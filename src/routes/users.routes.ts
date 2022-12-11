import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/uploadConfig'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { createUserController } from '../modules/users/useCases/createUser'
import { updateUserAvatarController } from '../modules/users/useCases/updateUserAvatar'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

usersRoutes.post('/', (req, res) => {
  return createUserController.handle(req, res)
})

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  (req, res) => {
    return updateUserAvatarController.handle(req, res)
  }
)

export { usersRoutes }
