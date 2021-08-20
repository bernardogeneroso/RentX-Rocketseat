/*
  Warnings:

  - You are about to drop the column `topSeed` on the `CarsDetails` table. All the data in the column will be lost.
  - Added the required column `topSpeed` to the `CarsDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarsDetails" DROP COLUMN "topSeed",
ADD COLUMN     "topSpeed" DOUBLE PRECISION NOT NULL;
