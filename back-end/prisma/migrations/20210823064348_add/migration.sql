/*
  Warnings:

  - Added the required column `rentalPrice` to the `CarsAppointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsAppointments" ADD COLUMN     "rentalPrice" INTEGER NOT NULL;
