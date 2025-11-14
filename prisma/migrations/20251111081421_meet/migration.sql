-- AlterTable
ALTER TABLE `User` ADD COLUMN `ClassId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Class` (
    `id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `TeacherId` VARCHAR(191) NULL,

    UNIQUE INDEX `Class_Name_key`(`Name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meeting_Request` (
    `id` VARCHAR(191) NOT NULL,
    `SenderId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `TeacherId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_ClassId_fkey` FOREIGN KEY (`ClassId`) REFERENCES `Class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_SenderId_fkey` FOREIGN KEY (`SenderId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
