import { ICreateCarSpecification } from '@modules/cars/dto/ICreateCarSpecification'
import { Car } from '@modules/cars/entities/Car'
import { ICarRepository } from '@modules/cars/repositories/ICarsRepository'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'
import { AppError } from 'shared/errors/AppError'

class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarRepository,
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({
    carId,
    specificationsId,
  }: ICreateCarSpecification): Promise<Car> {
    const carExist = await this.carsRepository.findById(carId)

    if (!carExist) {
      throw new AppError('Car not exist')
    }

    const specifications = await this.specificationsRepository.findByIds(
      specificationsId
    )

    carExist.specifications = specifications

    await this.carsRepository.assignSpecification(carId, specificationsId)

    return carExist
  }
}

export { CreateCarSpecificationUseCase }
