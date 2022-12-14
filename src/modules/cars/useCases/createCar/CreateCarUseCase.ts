import { AppError } from 'shared/errors/AppError'
import { ICarRepository } from '../../repositories/ICarsRepository'
import { ICreateCarDTO } from '../../dto/ICreateCarDTO'

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
  }: ICreateCarDTO): Promise<void> {
    const carAlreadyExists = await this.carRepository.findByLicensePlate(
      licensePlate
    )

    if (carAlreadyExists) {
      throw new AppError('Car already exists!')
    }

    await this.carRepository.create({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
    })
  }
}

export { CreateCarUseCase }
