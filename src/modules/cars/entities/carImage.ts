import { v4 as uuidV4 } from 'uuid'
import { Car } from './Car'

class CarImage {
  public id?: string
  public carsId: string
  public imageName: string[]

  public createdAt?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.createdAt = new Date()
    }
  }
}

export default CarImage
