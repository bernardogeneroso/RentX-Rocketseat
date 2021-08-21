/*
  Warnings:

  - You are about to drop the column `avatarUrl` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "avatarUrl",
ADD COLUMN     "avatar" VARCHAR;
