import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryUseCase } from '../../useCases/importCategory/ImportCategoryUseCase'
import { ImportCategoryController } from '../../useCases/importCategory/ImportCategoryController'

const categoriesRepository = new CategoriesRepository()

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
)

export { importCategoryController }
