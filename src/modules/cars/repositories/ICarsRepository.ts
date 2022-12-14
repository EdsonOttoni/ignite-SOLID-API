import { ICreateCarDTO } from '../dto/ICreateCarDTO'
import { IListCarAvailableDTO } from '../dto/IListCarAvailableDTO'
import { Car } from '../entities/Car'

interface ICarRepository {
  create(data: ICreateCarDTO): Promise<void>
  listAllCarsAvailable({
    brand,
    categoryId,
    name,
  }: IListCarAvailableDTO): Promise<Car[]>
  findByLicensePlate(licensePlate: string): Promise<Car>
}

export { ICarRepository }
