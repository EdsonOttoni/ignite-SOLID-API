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
    await this.userRepository.create({
      name,
      username,
      email,
      password,
      driverLicense,
    })
  }
}

export { CreateUserUseCase }
