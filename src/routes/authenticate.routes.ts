import { Router } from 'express'
import { authenticationUserController } from '../modules/users/useCases/authenticationUser'

const authenticateRoutes = Router()

authenticateRoutes.post('/sessions', (req, res) => {
  authenticationUserController.handle(req, res)
})

export { authenticateRoutes }
