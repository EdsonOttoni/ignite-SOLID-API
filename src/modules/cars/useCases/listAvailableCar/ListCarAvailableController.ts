import { Request, Response } from 'express'
import { ListCarAvailableUseCase } from './ListCarAvailableUseCase'

class ListCarAvailableController {
  constructor(private listCarAvailableUseCase: ListCarAvailableUseCase) {}

  async handle(req: Request, res: Response) {
    const { brand, name, categoryId } = req.query

    const cars = await this.listCarAvailableUseCase.execute({
      brand: brand as string,
      categoryId: categoryId as string,
      name: name as string,
    })

    return res.status(200).json(cars)
  }
}

export { ListCarAvailableController }
