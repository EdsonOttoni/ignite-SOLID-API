import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export default () => {
  const categoriesRepository = null

  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)

  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  )

  return listCategoriesController
}
