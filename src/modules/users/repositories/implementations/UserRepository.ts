import { IUserRepository } from '../IUserRepository'
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { User } from '../../entities/User'

class UserRepository implements IUserRepository {
  updateUser(user: User) {
    throw new Error('Method not implemented.')
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  list(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
}

export { UserRepository }
