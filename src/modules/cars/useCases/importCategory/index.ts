import { ImportCategoryUseCase } from '../../useCases/importCategory/ImportCategoryUseCase'
import { ImportCategoryController } from '../../useCases/importCategory/ImportCategoryController'

const importCategoryUseCase = new ImportCategoryUseCase()

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
)

export { importCategoryController }
