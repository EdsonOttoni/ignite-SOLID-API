import { PrismaClient } from '@prisma/client'

import { ICreateSpecificationDTO } from '@modules/cars/dto/ICreateSpecificationDTO'
import { ISpecificationsRepository } from '../ISpecificationsRepository'
import { Specification } from '@modules/cars/entities/Specification'

class SpecificationsRepository implements ISpecificationsRepository {
  private prisma = new PrismaClient()

  async create({ description, name }: ICreateSpecificationDTO) {
    const specification = await this.prisma.specifications.create({
      data: {
        name,
        description,
      },
    })

    return specification
  }

  async findByName(name: string) {
    const specification = await this.prisma.specifications.findFirst({
      where: {
        name,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return specification
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.prisma.specifications.findMany({
      where: {
        id: { in: ids },
      },
    })

    return specifications
  }
}

export { SpecificationsRepository }
