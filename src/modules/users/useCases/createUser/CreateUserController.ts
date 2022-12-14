import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password, driverLicense } = req.body

    await this.createUserUseCase.execute({
      name,
      username,
      email,
      password,
      driverLicense,
    })

    return res.status(201).send()
  }
}

export { CreateUserController }
