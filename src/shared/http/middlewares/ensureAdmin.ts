import { NextFunction, Request, Response } from 'express'
import { UserRepository } from '@modules/users/repositories/implementations/UserRepository'
import { AppError } from 'shared/errors/AppError'

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.user
  const userRepository = new UserRepository()

  const user = userRepository.findById(id)

  if (!user) {
    throw new AppError('User is not Admin')
  }

  return next()
}
