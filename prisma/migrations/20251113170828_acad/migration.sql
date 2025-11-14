/*
  Warnings:

  - Added the required column `ExamName` to the `Academics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Academics` ADD COLUMN `ExamName` VARCHAR(191) NOT NULL;
