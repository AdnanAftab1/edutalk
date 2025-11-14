/*
  Warnings:

  - Added the required column `Date` to the `Academics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Academics` ADD COLUMN `Date` DATETIME(3) NOT NULL;
