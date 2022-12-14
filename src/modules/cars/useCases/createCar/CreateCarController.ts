import { Request, Response } from 'express'
import { CreateCarUseCase } from './CreateCarUseCase'

class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      brand,
      dailyRate,
      fineAmount,
      licensePlate,
      categoryId,
    } = req.body

    const car = await this.createCarUseCase.execute({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
    })
    return res.json(201).json(car)
  }
}

export { CreateCarController }
