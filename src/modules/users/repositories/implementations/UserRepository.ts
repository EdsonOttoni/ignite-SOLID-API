import { IUserRepository } from '../IUserRepository'
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { User } from '../../entities/User'
import { PrismaClient } from '@prisma/client'
import { AppError } from '../../../../shared/errors/AppError'

class UserRepository implements IUserRepository {
  private prisma = new PrismaClient()

  async create(data: ICreateUserDTO): Promise<void> {
    const { id, avatar, name, username, password, email, driverLicense } = data
    await this.prisma.users.create({
      data: {
        id,
        avatar,
        name,
        username,
        driverLicense,
        email,
        password,
      },
    })
  }

  async updateUser(user: User): Promise<void> {
    throw new AppError('Method not implemented.')
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
    throw new AppError('Method not implemented.')
  }

  findById(id: string): Promise<User> {
    const user = this.prisma.users.findFirst({
      where: {
        id,
      },
    })

    return user
  }

  list(): Promise<User[]> {
    throw new AppError('Method not implemented.')
  }
}

export { UserRepository }
