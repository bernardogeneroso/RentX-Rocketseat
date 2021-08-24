/*
  Warnings:

  - The primary key for the `CarsImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CarsImages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CarsImages" DROP CONSTRAINT "CarsImages_pkey",
DROP COLUMN "id",
ADD PRIMARY KEY ("url");
