/*
  Warnings:

  - Made the column `start_in` on table `CarsAppointments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_in` on table `CarsAppointments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CarsAppointments" ALTER COLUMN "start_in" SET NOT NULL,
ALTER COLUMN "start_in" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "end_in" SET NOT NULL;
