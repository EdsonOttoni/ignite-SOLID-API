import { ICreateCarDTO } from '../dto/ICreateCarDTO'
import { IListCarAvailableDTO } from '../dto/IListCarAvailableDTO'
import { Car } from '../entities/Car'

interface ICarRepository {
  create(data: ICreateCarDTO): Promise<Car>
  listAllCarsAvailable({
    brand,
    categoryId,
    name,
  }: IListCarAvailableDTO): Promise<Car[]>
  findByLicensePlate(licensePlate: string): Promise<Car>
  findById(id: string): Promise<Car>
  assignSpecification(carId: string, specificationId: string[]): Promise<Car>
}

export { ICarRepository }
