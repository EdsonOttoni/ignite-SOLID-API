import { CarRepository } from '@modules/cars/repositories/implementations/CarRepository'
import { ListCarAvailableController } from './ListCarAvailableController'
import { ListCarAvailableUseCase } from './ListCarAvailableUseCase'

const carRepository = new CarRepository()

const listCarAvailableUseCase = new ListCarAvailableUseCase(carRepository)

const listCarAvailableController = new ListCarAvailableController(
  listCarAvailableUseCase
)

export { listCarAvailableController }
