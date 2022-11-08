import { Request, Response } from 'express'

import { CreateSpecificationsUseCase } from './CreateSpecificationsUseCase'

class CreateSpecificationController {
  constructor(
    private createSpecificationUseCase: CreateSpecificationsUseCase
  ) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body

    this.createSpecificationUseCase.execute({ name, description })

    return res.status(201).send()
  }
}

export { CreateSpecificationController }
