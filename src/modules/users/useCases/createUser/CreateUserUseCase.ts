import { hash } from 'bcryptjs'

import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { IUserRepository } from '../../repositories/IUserRepository'

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    username,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email)

    if (userAlreadyExist) {
      throw new Error('User already exist')
    }

    const passwordHash = await hash(password, 10)

    await this.userRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      driverLicense,
    })
  }
}

export { CreateUserUseCase }
