/*
  Warnings:

  - A unique constraint covering the columns `[TeacherName]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Teacher` ALTER COLUMN `TeacherName` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Teacher_TeacherName_key` ON `Teacher`(`TeacherName`);
