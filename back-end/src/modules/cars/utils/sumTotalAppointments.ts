import { CountsCarsHasBeenUsed } from "./divideCarsByRegistration";

export function sumTotalAppointments(counts: CountsCarsHasBeenUsed): number {
  // @ts-ignore
  return Object.values(counts).reduce((a: any, b: any) => a.used + b.used);
}
