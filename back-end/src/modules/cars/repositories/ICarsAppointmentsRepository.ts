import { CarsAppointments as CarAppointment } from "@prisma/client";

import { ICountCarsAvailableDTO } from "../dtos/ICountCarsAvailableDTO";
import { ICreateCarsAppointmentsDTO } from "../dtos/ICreateCarsAppointmentsDTO";

interface ICarsAppointmentsRepository {
  countCarsAvailable(data: ICountCarsAvailableDTO): Promise<number | null>;
  findUserScheduledCars(userId: string): Promise<CarAppointment[] | null>;
  create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment>;
}

export default ICarsAppointmentsRepository;
