-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('Parent', 'Teacher', 'Admin') NOT NULL DEFAULT 'Parent',
    `status` ENUM('Unverified', 'Rejected', 'Successfull') NOT NULL DEFAULT 'Unverified',

    UNIQUE INDEX `User_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `UserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_UserId_key`(`UserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parent` (
    `Pid` VARCHAR(191) NOT NULL,
    `StudentName` VARCHAR(191) NOT NULL,
    `ClassId` VARCHAR(191) NOT NULL,
    `ParentName` VARCHAR(191) NOT NULL DEFAULT 'Adnan',

    UNIQUE INDEX `Parent_Pid_key`(`Pid`),
    PRIMARY KEY (`Pid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `Tid` VARCHAR(191) NOT NULL,
    `TeacherName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teacher_Tid_key`(`Tid`),
    UNIQUE INDEX `Teacher_TeacherName_key`(`TeacherName`),
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

-- CreateTable
CREATE TABLE `Class` (
    `id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `ClassTeacherId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Class_Name_key`(`Name`),
    UNIQUE INDEX `Class_ClassTeacherId_key`(`ClassTeacherId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Annoucements` (
    `id` VARCHAR(191) NOT NULL,
    `Text` VARCHAR(191) NOT NULL,
    `SenderId` VARCHAR(191) NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Date` DATETIME(3) NOT NULL,

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

-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `isPresent` BOOLEAN NOT NULL,
    `Issue_For` VARCHAR(191) NOT NULL,
    `ParentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Academics` (
    `ExamName` VARCHAR(191) NOT NULL,
    `id` VARCHAR(191) NOT NULL,
    `Pid` VARCHAR(191) NOT NULL,
    `SubjectID` VARCHAR(191) NOT NULL,
    `Grade` VARCHAR(191) NOT NULL,
    `ReportLink` VARCHAR(191) NULL,
    `Date` DATETIME(3) NOT NULL,
    `TeacherID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessages` (
    `MessageId` VARCHAR(191) NOT NULL,
    `Pid` VARCHAR(191) NOT NULL,
    `Tid` VARCHAR(191) NOT NULL,
    `Content` VARCHAR(191) NOT NULL,
    `Date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`MessageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `Class` ADD CONSTRAINT `Class_ClassTeacherId_fkey` FOREIGN KEY (`ClassTeacherId`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Annoucements` ADD CONSTRAINT `Annoucements_SenderId_fkey` FOREIGN KEY (`SenderId`) REFERENCES `Teacher`(`Tid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_SenderId_fkey` FOREIGN KEY (`SenderId`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting_Request` ADD CONSTRAINT `Meeting_Request_TeacherId_fkey` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_Issue_For_fkey` FOREIGN KEY (`Issue_For`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_ParentId_fkey` FOREIGN KEY (`ParentId`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Academics` ADD CONSTRAINT `Academics_TeacherID_fkey` FOREIGN KEY (`TeacherID`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Academics` ADD CONSTRAINT `Academics_Pid_fkey` FOREIGN KEY (`Pid`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Academics` ADD CONSTRAINT `Academics_SubjectID_fkey` FOREIGN KEY (`SubjectID`) REFERENCES `Subject`(`Sid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessages` ADD CONSTRAINT `ChatMessages_Pid_fkey` FOREIGN KEY (`Pid`) REFERENCES `Parent`(`Pid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessages` ADD CONSTRAINT `ChatMessages_Tid_fkey` FOREIGN KEY (`Tid`) REFERENCES `Teacher`(`Tid`) ON DELETE RESTRICT ON UPDATE CASCADE;
