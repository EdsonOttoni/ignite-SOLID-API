/*
  Warnings:

  - The `imageName` column on the `cars_image` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cars_image" DROP COLUMN "imageName",
ADD COLUMN     "imageName" TEXT[];
