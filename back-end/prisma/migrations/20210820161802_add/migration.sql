/*
  Warnings:

  - You are about to drop the column `carId` on the `CarsDetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carDetailId]` on the table `Cars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carDetailId` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CarsDetails" DROP CONSTRAINT "CarsDetails_carId_fkey";

-- DropIndex
DROP INDEX "CarsDetails_carId_unique";

-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "carDetailId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "CarsDetails" DROP COLUMN "carId";

-- CreateIndex
CREATE UNIQUE INDEX "Cars_carDetailId_unique" ON "Cars"("carDetailId");

-- AddForeignKey
ALTER TABLE "Cars" ADD FOREIGN KEY ("carDetailId") REFERENCES "CarsDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
