import { CarRepository } from '@modules/cars/repositories/implementations/CarRepository'
import { Request, Response } from 'express'
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase'

class CreateCarSpecificationController {
  constructor(
    private createCarSpecificationUSeCase: CreateCarSpecificationUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { specificationsId } = req.body

    const car = await this.createCarSpecificationUSeCase.execute({
      carId: id,
      specificationsId,
    })

    return res.status(201).json(car)
  }
}

export { CreateCarSpecificationController }
