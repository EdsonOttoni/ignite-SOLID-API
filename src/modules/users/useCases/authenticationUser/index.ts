import { UserRepository } from '../../repositories/implementations/UserRepository'
import { AuthenticationController } from './AuthenticationController'
import { AuthenticationUserUseCase } from './AuthenticationUserUseCase'

const userRepository = new UserRepository()

const authenticationUserUseCase = new AuthenticationUserUseCase(userRepository)

const authenticationUserController = new AuthenticationController(
  authenticationUserUseCase
)

export { authenticationUserController }
