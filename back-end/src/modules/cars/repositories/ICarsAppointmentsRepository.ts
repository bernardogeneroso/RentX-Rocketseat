import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "../dtos/ICreateCarsAppointmentsDTO";

interface ICarsAppointmentsRepository {
  create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment>;
  carAvailable(carId: string, startDate: Date): Promise<number | null>;
  carsRentedByUser(userId: string): Promise<CarAppointment[] | null>;
}

export default ICarsAppointmentsRepository;
