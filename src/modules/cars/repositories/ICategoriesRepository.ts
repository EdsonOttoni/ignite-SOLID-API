import { Category } from '../entities/Category'
import { ICreateCategoryDTO } from '../dto/ICreateCategoryDTO'

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>
  list(): Promise<Category[]>
  findByName(name: string): Promise<Category>
}

export { ICategoriesRepository }
