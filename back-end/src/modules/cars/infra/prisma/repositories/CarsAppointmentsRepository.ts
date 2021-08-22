import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "@modules/cars/dtos/ICreateCarsAppointmentsDTO";
import ICarsAppointmentsRepository from "@modules/cars/repositories/ICarsAppointmentsRepository";
import { prisma } from "@shared/services/prisma";

class CarsAppointmentsRepository implements ICarsAppointmentsRepository {
  async create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment> {
    return await prisma.carsAppointments.create({
      data,
    });
  }
}

export default CarsAppointmentsRepository;
