import { Car } from '@modules/cars/entities/Car'
import { CarRepository } from '@modules/cars/repositories/implementations/CarRepository'
import { IListCarAvailableDTO } from '@modules/cars/dto/IListCarAvailableDTO'

class ListCarAvailableUseCase {
  constructor(private carsRepository: CarRepository) {}

  async execute({
    categoryId,
    brand,
    name,
  }: IListCarAvailableDTO): Promise<Car[]> {
    const cars = await this.carsRepository.listAllCarsAvailable({
      categoryId,
      brand,
      name,
    })

    return cars
  }
}

export { ListCarAvailableUseCase }
