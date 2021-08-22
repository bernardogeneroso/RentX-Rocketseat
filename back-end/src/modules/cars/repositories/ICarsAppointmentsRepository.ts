import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "../dtos/ICreateCarsAppointmentsDTO";

interface ICarsAppointmentsRepository {
  create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment>;
}

export default ICarsAppointmentsRepository;
