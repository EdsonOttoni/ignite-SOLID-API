import { ICreateUserDTO } from '../dto/ICreateUserDTO'
import { User } from '../entities/User'

interface IUserRepository {
  updateUser(user: User): Promise<void>
  findByEmail(email: string): Promise<User>
  create(data: ICreateUserDTO): Promise<void>
  findByUsername(username: string): Promise<User>
  findById(id: string): Promise<User>
  list(): Promise<User[]>
}

export { IUserRepository }
