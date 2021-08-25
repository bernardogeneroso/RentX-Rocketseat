export interface ICountCarsAvailableDTO {
  carId: string;
  date: {
    startDate: Date;
    endDate: Date;
  };
}
