interface ICreateUserDTO {
  id?: string
  name: string
  username: string
  avatar?: string
  password: string
  email: string
  driverLicense: string
}

export { ICreateUserDTO }
