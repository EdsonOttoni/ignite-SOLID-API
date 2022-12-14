import { CarRepository } from '@modules/cars/repositories/implementations/CarRepository'
import { CreateCarController } from './CreateCarController'
import { CreateCarUseCase } from './CreateCarUseCase'

const carRepository = new CarRepository()

const createCarUseCase = new CreateCarUseCase(carRepository)

const createCarController = new CreateCarController(createCarUseCase)

export { createCarController }
