import { Decimal } from '@prisma/client/runtime'

interface ICreateCarDTO {
  id?: string

  name: string
  description: string
  categoryId?: string
  brand: string
  dailyRate: number | Decimal
  fineAmount: number | Decimal
  licensePlate: string
  available?: boolean
  createdAt?: Date
}

export { ICreateCarDTO }
