import { AppError } from 'shared/errors/AppError'
import { ICarRepository } from '../../repositories/ICarsRepository'
import { ICreateCarDTO } from '../../dto/ICreateCarDTO'
import { Car } from '@modules/cars/entities/Car'

class CreateCarUseCase {
  constructor(private carRepository: ICarRepository) {}

  async execute({
    brand,
    categoryId,
    dailyRate,
    description,
    fineAmount,
    licensePlate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const carAlreadyExists = await this.carRepository.findByLicensePlate(
      licensePlate
    )

    if (carAlreadyExists) {
      throw new AppError('Car already exists!')
    }

    const car = await this.carRepository.create({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
    })

    return car
  }
}

export { CreateCarUseCase }
