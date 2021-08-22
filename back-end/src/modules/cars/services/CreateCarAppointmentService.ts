import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "../dtos/ICreateCarsAppointmentsDTO";
import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";

class CreateCarAppointmentService {
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor() {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
  }

  async execute(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment> {
    return await this.carsAppointmentsRepository.create(data);
  }
}

export default CreateCarAppointmentService;
