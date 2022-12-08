import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { UserRepository } from '../modules/users/repositories/implementations/UserRepository'
import { AppError } from '../errors/AppError'
interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('token missing', 401)
  }

  const [, token] = authHeader.split('')

  try {
    const { sub: user_id } = verify(
      token,
      '1a36591bceec49c832079e270d7e8b73'
    ) as IPayload

    const userRepository = new UserRepository()
    const user = await userRepository.findById(user_id)

    if (!user) {
      throw new AppError('User does not exists', 401)
    }

    next()
  } catch {
    throw new AppError('Invalid token', 401)
  }

  return
}
