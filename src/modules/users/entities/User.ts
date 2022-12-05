import { v4 as uuidV4 } from 'uuid'

class User {
  public id?: string
  public name: string
  public username: string
  public email: string
  public password: string
  public driver_license: string
  public isAdmin: boolean
  public avatar?: string
  public created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date()
      this.isAdmin = false
    }
  }
}

export { User }
