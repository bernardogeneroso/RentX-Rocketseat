export default interface IFindCarsAvailableBetweenDatesDTO {
  date: Date;
  filter?: {
    pricesPerDay: {
      startPricePerDay: number;
      endPricePerDay: number;
    };
    fuel: "gasoline" | "electric" | "alcohol";
    transmission: "auto" | "manual";
  };
}
