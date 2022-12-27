import CarImage from '../entities/carImage'

interface ICarImageRepository {
  create(carId: string, imagesName: string): Promise<CarImage>
}

export { ICarImageRepository }
