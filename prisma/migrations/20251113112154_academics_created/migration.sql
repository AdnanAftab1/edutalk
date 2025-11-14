-- CreateTable
CREATE TABLE `Academics` (
    `id` VARCHAR(191) NOT NULL,
    `Pid` VARCHAR(191) NOT NULL,
    `Tid` VARCHAR(191) NOT NULL,
    `SubjectID` VARCHAR(191) NOT NULL,
    `Grade` VARCHAR(191) NOT NULL,
    `ReportLink` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Academics` ADD CONSTRAINT `Academics_Pid_fkey` FOREIGN KEY (`Pid`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Academics` ADD CONSTRAINT `Academics_SubjectID_fkey` FOREIGN KEY (`SubjectID`) REFERENCES `Subject`(`Sid`) ON DELETE RESTRICT ON UPDATE CASCADE;
