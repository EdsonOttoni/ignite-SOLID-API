import { ICarImageRepository } from '@modules/cars/repositories/ICarImageRepository'

interface IRequest {
  carId: string
  imagesName: string[]
}

class UploadCarImageUseCase {
  constructor(private carsImagesRepository: ICarImageRepository) {}

  async execute({ carId, imagesName }: IRequest) {
    imagesName.map(async img => {
      await this.carsImagesRepository.create(carId, img)
    })
  }
}

export { UploadCarImageUseCase }
