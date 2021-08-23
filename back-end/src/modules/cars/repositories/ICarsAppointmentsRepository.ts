import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "../dtos/ICreateCarsAppointmentsDTO";

interface ICarsAppointmentsRepository {
  countCarsAvailable(carId: string, startDate: Date): Promise<number | null>;
  findUserScheduledCars(userId: string): Promise<CarAppointment[] | null>;
  create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment>;
}

export default ICarsAppointmentsRepository;
