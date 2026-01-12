/*
  Warnings:

  - You are about to drop the column `SenderId` on the `Meeting_Request` table. All the data in the column will be lost.
  - Added the required column `ParentId` to the `Meeting_Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Meeting_Request` DROP FOREIGN KEY `Meeting_Request_SenderId_fkey`;

-- DropIndex
DROP INDEX `Meeting_Request_SenderId_fkey` ON `Meeting_Request`;

-- AlterTable
ALTER TABLE `Meeting_Request` DROP COLUMN `SenderId`,
    ADD COLUMN `ParentId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_ParentId_fkey` FOREIGN KEY (`ParentId`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;
