/*
  Warnings:

  - You are about to drop the column `TeacherId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `ClassId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Class` DROP FOREIGN KEY `Class_TeacherId_fkey`;

-- DropForeignKey
ALTER TABLE `Meeting_Request` DROP FOREIGN KEY `Meeting_Request_SenderId_fkey`;

-- DropForeignKey
ALTER TABLE `Meeting_Request` DROP FOREIGN KEY `Meeting_Request_TeacherId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_ClassId_fkey`;

-- DropIndex
DROP INDEX `Class_TeacherId_fkey` ON `Class`;

-- DropIndex
DROP INDEX `Meeting_Request_SenderId_fkey` ON `Meeting_Request`;

-- DropIndex
DROP INDEX `Meeting_Request_TeacherId_fkey` ON `Meeting_Request`;

-- DropIndex
DROP INDEX `User_ClassId_fkey` ON `User`;

-- AlterTable
ALTER TABLE `Class` DROP COLUMN `TeacherId`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `ClassId`;

-- CreateTable
CREATE TABLE `Parent` (
    `Pid` VARCHAR(191) NOT NULL,
    `StudentName` VARCHAR(191) NOT NULL,
    `ClassId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Parent_Pid_key`(`Pid`),
    PRIMARY KEY (`Pid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `Tid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teacher_Tid_key`(`Tid`),
    PRIMARY KEY (`Tid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `Sid` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `ClassId` VARCHAR(191) NOT NULL,
    `TeacherId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Sid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parent` ADD CONSTRAINT `Parent_Pid_fkey` FOREIGN KEY (`Pid`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parent` ADD CONSTRAINT `Parent_ClassId_fkey` FOREIGN KEY (`ClassId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_Tid_fkey` FOREIGN KEY (`Tid`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_ClassId_fkey` FOREIGN KEY (`ClassId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_SenderId_fkey` FOREIGN KEY (`SenderId`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;
