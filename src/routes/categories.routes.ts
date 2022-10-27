import { response, Router } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'
 
const categoriesRoutes = Router()

const categories: Category[] = []
const category = new Category()

categoriesRoutes.post('/', (req, res) => {
  const {name, description} = req.body

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })
 
  categories.push(category)

  return res.status(201).json({category})

})

export {categoriesRoutes}