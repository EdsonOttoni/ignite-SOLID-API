import { PrismaClient } from '@prisma/client'

import { ICreateCarDTO } from '@modules/cars/dto/ICreateCarDTO'
import { Car } from '@modules/cars/entities/Car'
import { ICarRepository } from '../ICarsRepository'
import { IListCarAvailableDTO } from '@modules/cars/dto/IListCarAvailableDTO'

class CarRepository implements ICarRepository {
  private prisma = new PrismaClient()

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = await this.prisma.cars.create({
      data: {
        name: data.name,
        description: data.description,
        categoryId: data.categoryId,
        brand: data.brand,
        dailyRate: data.dailyRate,
        fineAmount: data.fineAmount,
        licensePlate: data.licensePlate,
      },
    })

    return car
  }

  async listAllCarsAvailable({
    brand,
    categoryId,
    name,
  }: IListCarAvailableDTO): Promise<Car[]> {
    const carsAvailable = await this.prisma.cars.findMany({
      where: {
        available: true,
      },
    })

    if (brand || categoryId || name) {
      const cars = carsAvailable.filter(car => {
        if (
          car.brand == brand ||
          car.categoryId == categoryId ||
          car.name == name
        )
          return car
      })

      return cars
    }

    return carsAvailable
  }

  async findById(id: string): Promise<Car> {
    const car = await this.prisma.cars.findFirst({
      where: {
        id,
      },
    })

    return car
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    const car = await this.prisma.cars.findFirst({
      where: {
        licensePlate,
      },
    })

    return car
  }

  async assignSpecification(id: string, sId: string[]): Promise<Car> {
    const assignSpecification = await this.prisma.cars.update({
      where: {
        id,
      },
      data: {
        specifications_cars: {
          create: [
            {
              specification: {
                connect: sId.map(id => ({ id })),
              },
            },
          ],
        },
      },
    })

    return assignSpecification
  }
}

export { CarRepository }
