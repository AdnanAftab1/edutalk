-- CreateTable
CREATE TABLE `Annoucements` (
    `id` VARCHAR(191) NOT NULL,
    `Text` VARCHAR(191) NOT NULL,
    `SenderId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Annoucements` ADD CONSTRAINT `Annoucements_SenderId_fkey` FOREIGN KEY (`SenderId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
