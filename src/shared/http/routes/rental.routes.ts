import { Router } from 'express'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { createRentalController } from '@modules/rentals/useCases/createRental'

const rentalRoutes = Router()

rentalRoutes.post('/', ensureAuthenticated, (req, res) => {
  createRentalController.handle(req, res)
})

export { rentalRoutes }
