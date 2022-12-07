import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UserRepository } from '../modules/users/repositories/implementations/UserRepository'

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
    throw new Error('token missing')
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
      throw new Error('User does not exists')
    }

    next()
  } catch {
    throw new Error('Invalid token')
  }

  return
}
