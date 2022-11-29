import { PrismaClient } from '@prisma/client'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository'

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
    })

    return category
  }
}

export { CategoriesRepository }
