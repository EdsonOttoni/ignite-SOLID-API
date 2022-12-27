import { CarImagesRepository } from '@modules/cars/repositories/implementations/CarImageRepository'
import { UploadCarImageController } from './UpdateCarImageController'
import { UploadCarImageUseCase } from './UpdateCarImageUseCase'

const carImagesRepository = new CarImagesRepository()

const uploadCarImageUseCase = new UploadCarImageUseCase(carImagesRepository)

const uploadCarImageController = new UploadCarImageController(
  uploadCarImageUseCase
)

export { uploadCarImageController }
