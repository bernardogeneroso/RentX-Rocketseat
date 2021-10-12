import { inject, injectable } from "tsyringe";
import { CarsAppointments as CarAppointment } from "@prisma/client";
import { isPast, differenceInDays, compareAsc, startOfDay } from "date-fns";

import { ICreateCarsAppointmentsDTO } from "../dtos/ICreateCarsAppointmentsDTO";
import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";
import ICarsRepository from "../repositories/ICarsRepository";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateCarAppointmentService {
  private carsRepository: ICarsRepository;
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor(@inject("CacheProvider") private cacheProvider: ICacheProvider) {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
    this.carsRepository = new CarsRepository();
  }

  async execute(
    data: Omit<ICreateCarsAppointmentsDTO, "rentalPrice">
  ): Promise<CarAppointment> {
    if (compareAsc(data.start_in, data.end_in) > 0)
      throw new AppError("Error, invalid dates");

    if (isPast(data.start_in) || isPast(data.end_in))
      throw new AppError("Error, invalid dates");

    data.start_in = startOfDay(data.start_in);
    data.end_in = startOfDay(data.end_in);

    const carToRental = await this.carsRepository.findById(data.carId);

    if (!carToRental) throw new AppError("Error on create appointment");

    const countCarAvailable =
      await this.carsAppointmentsRepository.countCarsAvailable({
        carId: data.carId,
        date: {
          startDate: data.start_in,
          endDate: data.end_in,
        },
      });

    if (countCarAvailable !== 0)
      throw new AppError("Error on create appointment");

    const rentalPrice =
      carToRental.pricePerDay *
      (differenceInDays(data.end_in, data.start_in) || 1);

    try {
      const appointment = await this.carsAppointmentsRepository.create({
        ...data,
        rentalPrice,
      });

      let allAppointmentsBetweenDates = await this.cacheProvider.recover<
        CarAppointment[]
      >(`cars-appointments:start=${data.start_in}&end=${data.end_in}`);

      if (!allAppointmentsBetweenDates) {
        allAppointmentsBetweenDates = [appointment];
      } else {
        allAppointmentsBetweenDates.push(appointment);
      }

      await this.cacheProvider.save(
        `cars-appointments:start=${data.start_in}&end=${data.end_in}`,
        allAppointmentsBetweenDates
      );

      return appointment;
    } catch {
      throw new AppError("Error on create appointment");
    }
  }
}

export default CreateCarAppointmentService;
