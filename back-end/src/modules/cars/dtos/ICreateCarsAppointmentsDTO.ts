export default interface ICreateCarsAppointmentsDTO {
  carId: string;
  userId: string;
  start_in: Date | null;
  end_in: Date | null;
}
