-- AlterTable
ALTER TABLE `ChatMessages` ADD COLUMN `Sender` ENUM('Parent', 'Teacher', 'Admin') NOT NULL DEFAULT 'Parent';
