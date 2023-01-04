import { RentalRepository } from '@modules/rentals/repositories/implementations/RentalRepository'
import { DayjsDateProvider } from 'shared/containers/providers/DayjsProvider/implementations/DayjsDateProvider'
import { CreateRentalController } from './createRentalController'
import { CreateRentalUseCase } from './createRentalUseCase'

const rentalRepository = new RentalRepository()

const dayjsDateProvider = new DayjsDateProvider()

const createRentalUseCase = new CreateRentalUseCase(
  rentalRepository,
  dayjsDateProvider
)

const createRentalController = new CreateRentalController(createRentalUseCase)

export { createRentalController }
