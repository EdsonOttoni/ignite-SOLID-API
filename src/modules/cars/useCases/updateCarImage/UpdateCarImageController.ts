import { Request, Response } from 'express'

import { UploadCarImageUseCase } from './UpdateCarImageUseCase'

interface IFiles {
  filename: string
}

class UploadCarImageController {
  constructor(private uploadCarImageUseCase: UploadCarImageUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const imgs = req.files as IFiles[]

    const imagesName = imgs.map(file => file.filename)

    await this.uploadCarImageUseCase.execute({
      carId: id,
      imagesName,
    })

    return res.status(201).send()
  }
}

export { UploadCarImageController }
