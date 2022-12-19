import { Decimal } from '@prisma/client/runtime'
import { v4 as uuidV4 } from 'uuid'
import { Specification } from './Specification'

class Car {
  public id?: string
  public name: string
  public description: string
  public dailyRate: Decimal
  public available?: boolean
  public licensePlate: string
  public fineAmount: Decimal
  public brand: string
  public createdAt: Date

  public categoryId?: string

  public specifications?: Specification[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.createdAt = new Date()
      this.available = true
    }
  }
}

export { Car }
