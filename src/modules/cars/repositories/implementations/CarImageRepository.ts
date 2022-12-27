import { ICreateImageCategoryDTO } from '@modules/cars/dto/ICreateImageCarDTO'
import CarImage from '@modules/cars/entities/carImage'
import { PrismaClient } from '@prisma/client'
import { ICarImageRepository } from '../ICarImageRepository'

class CarImagesRepository implements ICarImageRepository {
  private prisma = new PrismaClient()

  async create(carId: string, imagesName: string): Promise<CarImage> {
    const carImage = await this.prisma.cars_image.create({
      data: {
        carsId: carId,
        imageName: imagesName,
      },
    })

    return carImage
  }
}

export { CarImagesRepository }
