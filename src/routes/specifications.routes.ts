import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

export { specificationsRoutes }
