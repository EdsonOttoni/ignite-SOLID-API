import { IUserRepository } from '../IUserRepository'
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { User } from '../../entities/User'
import { PrismaClient } from '@prisma/client'

class UserRepository implements IUserRepository {
  private prisma = new PrismaClient()

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, username, password, email, driverLicense } = data
    await this.prisma.users.create({
      data: {
        name,
        username,
        driverLicense,
        email,
        password,
      },
    })
  }

  async updateUser(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    })

    return user
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
