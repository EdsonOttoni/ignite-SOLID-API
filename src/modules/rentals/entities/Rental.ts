import { v4 as uuidV4 } from 'uuid'
import { Decimal } from '@prisma/client/runtime'

class Rental {
  id?: string
  car_id: string
  user_id: string
  start_date: Date
  end_date?: Date
  expected_return_date: Date
  total?: Decimal
  createdAt?: Date
  updateAt?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.createdAt = new Date()
      this.updateAt = new Date()
    }
  }
}

export { Rental }
