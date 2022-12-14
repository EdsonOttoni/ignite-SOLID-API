import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { createSpecificationController } from '../../../modules/cars/useCases/createSpecification'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const specificationsRoutes = Router()

specificationsRoutes.post('/', ensureAuthenticated, ensureAdmin, (req, res) => {
  return createSpecificationController.handle(req, res)
})

export { specificationsRoutes }
