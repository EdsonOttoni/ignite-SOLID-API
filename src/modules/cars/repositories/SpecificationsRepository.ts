import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository'

type Specification = any

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    //const specification = new Specification()
    const specification = {}

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name
    )

    return specification
  }
}

export { SpecificationsRepository }
