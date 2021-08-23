export default interface ICreateCarsAppointmentsDTO {
  carId: string;
  userId: string;
  start_in: Date;
  end_in: Date;
  rentalPrice: number;
}
