import { ICreateRentalDTO } from '@modules/rentals/dto/ICreateRentalDTO'
import { Rental } from '@modules/rentals/entities/Rental'
import { PrismaClient } from '@prisma/client'
import { IRentalsRepository } from '../IRentalsRepository'

class RentalRepository implements IRentalsRepository {
  private prisma = new PrismaClient()

  findOpenRentalByCar(car_id: string): Promise<Rental> {
    throw new Error('Method not implemented.')
  }
  findOpenRentalByUser(user_id: string): Promise<Rental> {
    throw new Error('Method not implemented.')
  }
  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = await this.prisma.rentals.create({
      data: {
        user_id: data.user_id,
        car_id: data.car_id,
        expected_return_date: data.expected_return_date,
        start_date: new Date(),
        updatedAt: new Date(),
      },
    })

    return rental
  }
}

export { RentalRepository }
