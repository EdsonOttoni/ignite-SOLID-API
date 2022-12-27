-- CreateTable
CREATE TABLE "cars_image" (
    "id" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carsId" TEXT NOT NULL,

    CONSTRAINT "cars_image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars_image" ADD CONSTRAINT "cars_image_carsId_fkey" FOREIGN KEY ("carsId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
