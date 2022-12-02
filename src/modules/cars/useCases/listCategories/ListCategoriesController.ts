import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listCategories = await this.listCategoriesUseCase.execute()
      return res.status(200).json(listCategories)
    } catch (err) {
      return res.status(404).json({
        message: err.message || 'Not found',
      })
    }
  }
}

export { ListCategoriesController }
