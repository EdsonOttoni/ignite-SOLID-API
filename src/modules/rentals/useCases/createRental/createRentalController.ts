import { Request, Response } from 'express'
import { CreateRentalUseCase } from './createRentalUseCase'

class CreateRentalController {
  constructor(private createRentalUseCase: CreateRentalUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { expected_return_date, car_id } = req.body
    const { id } = req.user

    const rental = await this.createRentalUseCase.execute({
      car_id,
      expected_return_date,
      user_id: id,
    })

    return res.status(201).json(rental)
  }
}

export { CreateRentalController }
