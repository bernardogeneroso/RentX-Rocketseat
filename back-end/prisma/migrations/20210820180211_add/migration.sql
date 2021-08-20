/*
  Warnings:

  - Added the required column `avatarUrl` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "avatarUrl" VARCHAR NOT NULL;

-- CreateTable
CREATE TABLE "CarsImages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "carId" VARCHAR NOT NULL,
    "url" VARCHAR NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarsImages" ADD FOREIGN KEY ("carId") REFERENCES "Cars"("plate") ON DELETE CASCADE ON UPDATE CASCADE;
