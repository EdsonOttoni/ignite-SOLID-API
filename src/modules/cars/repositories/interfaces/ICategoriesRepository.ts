import { Category } from "../../models/Category";

interface ICategoriesRepository {
  create(name: string, description: string): void
  list(): Category[]
  findByName(nome: string): Category
}

export {ICategoriesRepository}