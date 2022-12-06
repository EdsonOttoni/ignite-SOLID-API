import { Request, Response } from 'express'
import { AuthenticationUserUseCase } from './AuthenticationUserUseCase'

class AuthenticationController {
  constructor(private authenticationUserUseCase: AuthenticationUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body

    const token = await this.authenticationUserUseCase.execute({
      password,
      email,
    })

    return res.json(token)
  }
}

export { AuthenticationController }
