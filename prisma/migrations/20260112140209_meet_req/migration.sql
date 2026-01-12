-- AlterTable
ALTER TABLE `Meeting_Request` ADD COLUMN `MeetStatus` ENUM('Pending', 'Rejected', 'Approved') NOT NULL DEFAULT 'Pending',
    ADD COLUMN `Rejection_Reason` VARCHAR(191) NULL;
