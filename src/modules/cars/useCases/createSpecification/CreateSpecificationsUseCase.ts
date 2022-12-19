import { ICreateSpecificationDTO } from '@modules/cars/dto/ICreateSpecificationDTO'
import { AppError } from '../../../../shared/errors/AppError'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'
class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists')
    }

    await this.specificationsRepository.create({
      name,
      description,
    })
  }
}

export { CreateSpecificationsUseCase }
