-- CreateTable
CREATE TABLE "CarsAppointments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "carId" VARCHAR NOT NULL,
    "userId" UUID NOT NULL,
    "start_in" TIMESTAMP(3),
    "end_in" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarsAppointments" ADD FOREIGN KEY ("carId") REFERENCES "Cars"("plate") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsAppointments" ADD FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
