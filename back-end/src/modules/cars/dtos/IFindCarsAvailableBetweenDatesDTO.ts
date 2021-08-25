export interface IFindCarsAvailableBetweenDatesDTO {
  dates: {
    startDate: Date;
    endDate: Date;
  };
  filter?: {
    pricesPerDay: {
      startPricePerDay: number;
      endPricePerDay: number;
    };
    fuel: "gasoline" | "electric" | "alcohol";
    transmission: "auto" | "manual";
  };
}
