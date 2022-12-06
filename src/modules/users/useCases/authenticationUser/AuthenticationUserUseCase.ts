import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UserRepository } from '../../repositories/implementations/UserRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

class AuthenticationUserUseCase {
  constructor(private userRepository: UserRepository) {}

  /**
    TODO:
    - verificar se o usuário existe
    - se a senha está correta
    - gerar jsonwebtoken
   */

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error('Email or password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!password) {
      throw new Error('Email or password incorrect')
    }

    const token = sign({}, '1a36591bceec49c832079e270d7e8b73', {
      subject: user.id,
      expiresIn: '1d',
    })

    const tokenReturn = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    }

    return tokenReturn
  }
}

export { AuthenticationUserUseCase }
