import { v4 as uuidV4 } from 'uuid'

class User {
  public id?: string
  public name: string
  public username: string
  public email: string
  public password: string
  public driverLicense: string
  public isAdmin: boolean
  public avatar?: string
  public createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.createdAt = new Date()
      this.isAdmin = false
    }
  }
}

export { User }
