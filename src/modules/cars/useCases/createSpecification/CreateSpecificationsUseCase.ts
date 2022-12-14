import { ICreateSpecificationDTO } from '@modules/cars/dto/ICreateSpecificationDTO'
import { AppError } from '../../../../shared/errors/AppError'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'
class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ description, name }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists')
    }

    this.specificationsRepository.create({
      name,
      description,
    })
  }
}

export { CreateSpecificationsUseCase }
