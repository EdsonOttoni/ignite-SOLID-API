import { Specification } from '@modules/cars/entities/Specification'
import { ICreateSpecificationDTO } from '../dto/ICreateSpecificationDTO'

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>
  findByName(name: string): Promise<Specification>
  findByIds(ids: string[]): Promise<Specification[]>
}

export { ISpecificationsRepository }
