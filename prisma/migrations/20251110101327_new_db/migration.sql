-- AlterTable
ALTER TABLE `User` ADD COLUMN `status` ENUM('Unverified', 'Rejected', 'Successfull') NOT NULL DEFAULT 'Unverified';
