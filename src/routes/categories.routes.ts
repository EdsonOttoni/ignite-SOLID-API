import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  const listCategories = categoriesRepository.list()

  return res.status(200).json(listCategories)
})

export {categoriesRoutes}