import { AppError } from '../../../../errors/AppError'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ description, name }: IRequest): void {
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
