-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_carDetailId_fkey";

-- DropForeignKey
ALTER TABLE "CarsAppointments" DROP CONSTRAINT "CarsAppointments_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarsAppointments" DROP CONSTRAINT "CarsAppointments_userId_fkey";

-- DropForeignKey
ALTER TABLE "CarsImages" DROP CONSTRAINT "CarsImages_carId_fkey";

-- DropForeignKey
ALTER TABLE "UsersTokens" DROP CONSTRAINT "UsersTokens_user_id_fkey";

-- AddForeignKey
ALTER TABLE "UsersTokens" ADD CONSTRAINT "UsersTokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_carDetailId_fkey" FOREIGN KEY ("carDetailId") REFERENCES "CarsDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsImages" ADD CONSTRAINT "CarsImages_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Cars"("plate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsAppointments" ADD CONSTRAINT "CarsAppointments_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Cars"("plate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsAppointments" ADD CONSTRAINT "CarsAppointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Cars.model_unique" RENAME TO "Cars_model_key";

-- RenameIndex
ALTER INDEX "Cars_carDetailId_unique" RENAME TO "Cars_carDetailId_key";

-- RenameIndex
ALTER INDEX "Users.email_unique" RENAME TO "Users_email_key";
