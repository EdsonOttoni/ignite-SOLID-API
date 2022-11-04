import { Category } from "../models/Category";

interface ICategoriesRepository {
  findByName(nome: string): Category
  list(): Category[]
  create(name: string, description: string): void
}

export {ICategoriesRepository}