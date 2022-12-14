import { Specification } from '../entities/Specification'
import { ICreateSpecificationDTO } from '../dto/ICreateSpecificationDTO'

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export { ISpecificationsRepository }
