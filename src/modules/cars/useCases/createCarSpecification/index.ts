import { CarRepository } from '@modules/cars/repositories/implementations/CarRepository'
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateCarSpecificationController } from './CreateCarSpecificationController'
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase'

const carRepository = new CarRepository()
const specificationsRepository = new SpecificationsRepository()

const createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
  carRepository,
  specificationsRepository
)

const createCarSpecificationController = new CreateCarSpecificationController(
  createCarSpecificationUseCase
)

export { createCarSpecificationController }
