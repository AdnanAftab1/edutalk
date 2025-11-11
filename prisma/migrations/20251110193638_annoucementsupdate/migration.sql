/*
  Warnings:

  - Added the required column `Date` to the `Annoucements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Annoucements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Annoucements` ADD COLUMN `Date` DATETIME(3) NOT NULL,
    ADD COLUMN `Title` VARCHAR(191) NOT NULL;
