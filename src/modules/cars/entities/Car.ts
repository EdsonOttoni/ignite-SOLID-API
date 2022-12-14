import { Decimal } from '@prisma/client/runtime'
import { v4 as uuidV4 } from 'uuid'

class Car {
  public id?: string
  public name: string
  public description: string
  public dailyRate: Decimal
  public available?: boolean
  public licensePlate: string
  public fineAmount: Decimal
  public brand: string
  public categoryId?: string
  public createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.createdAt = new Date()
      this.available = true
    }
  }
}

export { Car }
