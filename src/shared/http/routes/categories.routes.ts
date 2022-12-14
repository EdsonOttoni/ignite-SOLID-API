import { Router } from 'express'
import multer from 'multer'

import { listCategoriesController } from '../../../modules/cars/useCases/listCategories'
import { importCategoryController } from '../../../modules/cars/useCases/importCategory'
import { createCategoryController } from '../../../modules/cars/useCases/createCategory'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

categoriesRoutes.post('/', ensureAuthenticated, ensureAdmin, (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    return importCategoryController.handle(req, res)
  }
)

export { categoriesRoutes }
