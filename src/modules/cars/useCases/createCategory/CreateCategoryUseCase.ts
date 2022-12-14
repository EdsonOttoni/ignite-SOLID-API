import { ICreateCategoryDTO } from '@modules/cars/dto/ICreateCategoryDTO'
import { AppError } from '../../../../shared/errors/AppError'

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ description, name }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    )

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
