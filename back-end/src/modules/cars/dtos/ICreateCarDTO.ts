import { ICreateCarDetailsDTO } from "./ICreateCarDetailsDTO";

export interface ICreateCarDTO {
  plate: string;
  brand: string;
  model: string;
  colour: string;
  fuel: "gasoline" | "electric" | "alcohol";
  transmission: "auto" | "manual";
  pricePerDay: number;
  carDetail: {
    create: ICreateCarDetailsDTO;
  };
}
