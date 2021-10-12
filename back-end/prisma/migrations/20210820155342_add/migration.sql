-- CreateEnum
CREATE TYPE "FuelRoles" AS ENUM ('gasoline', 'electric', 'alcohol');

-- CreateEnum
CREATE TYPE "TransmissionRoles" AS ENUM ('auto', 'manual');

-- CreateTable
CREATE TABLE "Cars" (
    "plate" VARCHAR NOT NULL,
    "brand" VARCHAR NOT NULL,
    "model" VARCHAR NOT NULL,
    "color" VARCHAR NOT NULL,
    "fuel" "FuelRoles" NOT NULL DEFAULT E'gasoline',
    "transmission" "TransmissionRoles" NOT NULL DEFAULT E'auto',
    "pricePerDay" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("plate")
);

-- CreateTable
CREATE TABLE "CarsDetails" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "carId" VARCHAR NOT NULL,
    "maxSpeed" INTEGER NOT NULL,
    "topSeed" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "people" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cars.model_unique" ON "Cars"("model");

-- CreateIndex
CREATE UNIQUE INDEX "CarsDetails_carId_unique" ON "CarsDetails"("carId");

-- AddForeignKey
ALTER TABLE "CarsDetails" ADD FOREIGN KEY ("carId") REFERENCES "Cars"("plate") ON DELETE CASCADE ON UPDATE CASCADE;
