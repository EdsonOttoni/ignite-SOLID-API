import { Request, Response } from 'express'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user

    const avatar_file = req.file.filename

    this.updateUserAvatarUseCase.execute({ user_id: id, avatar_file })

    return res.status(200).send()
  }
}

export { UpdateUserAvatarController }
