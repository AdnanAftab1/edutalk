-- AlterTable
ALTER TABLE `Annoucements` ADD COLUMN `ClassID` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Annoucements` ADD CONSTRAINT `Annoucements_ClassID_fkey` FOREIGN KEY (`ClassID`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
