-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `isPresent` BOOLEAN NOT NULL,
    `Issue_For` VARCHAR(191) NOT NULL,
    `ParentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_Issue_For_fkey` FOREIGN KEY (`Issue_For`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_ParentId_fkey` FOREIGN KEY (`ParentId`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;
