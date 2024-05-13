/*
  Warnings:

  - Added the required column `number` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Reports" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
