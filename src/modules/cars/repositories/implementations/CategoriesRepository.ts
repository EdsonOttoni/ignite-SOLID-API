import { PrismaClient } from '@prisma/client'

import { ICreateCategoryDTO } from '@modules/cars/dto/ICreateCategoryDTO'
import { ICategoriesRepository } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private prisma = new PrismaClient()

  async create({ name, description }: ICreateCategoryDTO) {
    await this.prisma.categories.create({
      data: {
        name,
        description,
      },
    })
  }

  async list() {
    const categoriesList = await this.prisma.categories.findMany()

    return categoriesList
  }

  async findByName(name: string) {
    const category = await this.prisma.categories.findFirst({
      where: {
        name,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return category
  }
}

export { CategoriesRepository }
