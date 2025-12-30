-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Parent', 'Teacher', 'Admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Unverified', 'Rejected', 'Successfull');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Parent',
    "status" "Status" NOT NULL DEFAULT 'Unverified',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "Pid" TEXT NOT NULL,
    "StudentName" TEXT NOT NULL,
    "ClassId" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("Pid")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "Tid" TEXT NOT NULL,
    "TeacherName" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("Tid")
);

-- CreateTable
CREATE TABLE "Subject" (
    "Sid" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "ClassId" TEXT NOT NULL,
    "TeacherId" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("Sid")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "ClassTeacherId" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annoucements" (
    "id" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "SenderId" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Annoucements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meeting_Request" (
    "id" TEXT NOT NULL,
    "SenderId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "TeacherId" TEXT NOT NULL,

    CONSTRAINT "Meeting_Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isPresent" BOOLEAN NOT NULL,
    "Issue_For" TEXT NOT NULL,
    "ParentId" TEXT NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Academics" (
    "ExamName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "Pid" TEXT NOT NULL,
    "SubjectID" TEXT NOT NULL,
    "Grade" TEXT NOT NULL,
    "ReportLink" TEXT,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Academics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessages" (
    "MessageId" TEXT NOT NULL,
    "Pid" TEXT NOT NULL,
    "Tid" TEXT NOT NULL,
    "Content" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatMessages_pkey" PRIMARY KEY ("MessageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_UserId_key" ON "Admin"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_Pid_key" ON "Parent"("Pid");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_Tid_key" ON "Teacher"("Tid");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_TeacherName_key" ON "Teacher"("TeacherName");

-- CreateIndex
CREATE UNIQUE INDEX "Class_Name_key" ON "Class"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Class_ClassTeacherId_key" ON "Class"("ClassTeacherId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_Pid_fkey" FOREIGN KEY ("Pid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_ClassId_fkey" FOREIGN KEY ("ClassId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_Tid_fkey" FOREIGN KEY ("Tid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_ClassId_fkey" FOREIGN KEY ("ClassId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_TeacherId_fkey" FOREIGN KEY ("TeacherId") REFERENCES "Teacher"("Tid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_ClassTeacherId_fkey" FOREIGN KEY ("ClassTeacherId") REFERENCES "Teacher"("Tid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annoucements" ADD CONSTRAINT "Annoucements_SenderId_fkey" FOREIGN KEY ("SenderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting_Request" ADD CONSTRAINT "Meeting_Request_SenderId_fkey" FOREIGN KEY ("SenderId") REFERENCES "Parent"("Pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting_Request" ADD CONSTRAINT "Meeting_Request_TeacherId_fkey" FOREIGN KEY ("TeacherId") REFERENCES "Teacher"("Tid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_Issue_For_fkey" FOREIGN KEY ("Issue_For") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_ParentId_fkey" FOREIGN KEY ("ParentId") REFERENCES "Parent"("Pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Academics" ADD CONSTRAINT "Academics_Pid_fkey" FOREIGN KEY ("Pid") REFERENCES "Parent"("Pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Academics" ADD CONSTRAINT "Academics_SubjectID_fkey" FOREIGN KEY ("SubjectID") REFERENCES "Subject"("Sid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_Pid_fkey" FOREIGN KEY ("Pid") REFERENCES "Parent"("Pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_Tid_fkey" FOREIGN KEY ("Tid") REFERENCES "Teacher"("Tid") ON DELETE RESTRICT ON UPDATE CASCADE;
