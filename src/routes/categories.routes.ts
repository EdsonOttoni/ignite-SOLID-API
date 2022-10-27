import { response, Router } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
 
const categoriesRoutes = Router()

const category = new Category()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.post('/', (req, res) => {
  const {name, description} = req.body

  categoriesRepository.create({name, description})

  return res.status(201).json({category})

})

export {categoriesRoutes}