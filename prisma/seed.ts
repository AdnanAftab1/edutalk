import { PrismaClient, Role, Status } from "../appi/generated/prisma";

const DB = new PrismaClient();

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

async function main() {

  console.log("🌱 Seeding database (auto-generated)...");
  
  const CLASS_NAME = "Class 5A";

  const teacherCount = 4;

  const teacherUsers = [];
  for (let i = 1; i <= teacherCount; i++) {
    const u = await DB.user.create({
      data: {
        name: `Teacher_${CLASS_NAME.replace(/\s+/g, "")}_${pad2(i)}`,
        password: `Teacher${pad2(i)}123`,
        role: Role.Teacher,
        status: Status.Successfull,
      },
    });
    teacherUsers.push(u);
  }


  const teachers = [];
  for (const u of teacherUsers) {
    const t = await DB.teacher.create({
      data: {
        Tid: u.id,           // FK -> User.id
        TeacherName: u.name, // must be unique
      },
    });
    teachers.push(t);
  }

  // First teacher = homeroom teacher
  const homeRoomTeacher = teachers[0];

  // -----------------------------
  // B) Create Class with homeroom teacher
  //    - Class.ClassTeacherId is @unique => only one class per teacher
  // -----------------------------
  const classA = await DB.class.create({
    data: {
      Name: CLASS_NAME,
      ClassTeacherId: homeRoomTeacher.Tid,
    },
  });

  // -----------------------------
  // C) Create 5 parent users + parent profiles (students)
  // -----------------------------
  const studentCount = 10;
  const parents = [];

  for (let i = 1; i <= studentCount; i++) {
    const parentUser = await DB.user.create({
      data: {
        name: `Parent_${CLASS_NAME.replace(/\s+/g, "")}_${pad2(i)}`,
        password: `Parent${pad2(i)}123`,
        role: Role.Parent,
        status: Status.Successfull,
      },
    });

    const parent = await DB.parent.create({
      data: {
        Pid: parentUser.id,                 // FK -> User.id
        StudentName: `Student_${pad2(i)}`,  // not unique in schema, ok
        ClassId: classA.id,                 // FK -> Class.id
      },
    });

    parents.push(parent);
  }

  // -----------------------------
  // D) Create subjects (example: 4 subjects, one per teacher)
  //    Subject.TeacherId references Teacher.Tid (NOT User.id) in your schema.
  // -----------------------------
  const subjectNames = ["Mathematics", "Science", "English", "SocialScience"];

  await DB.subject.createMany({
    data: teachers.map((t, idx) => ({
      Name: subjectNames[idx] ?? `Subject_${idx + 1}`,
      ClassId: classA.id,
      TeacherId: t.Tid,
    })),
    // skipDuplicates is supported on SQL connectors in Prisma createMany. [web:11]
    skipDuplicates: true,
  });

  // -----------------------------
  // E) Attendance for all 5 students for 20 days (10 present + 10 absent)
  //    Attendance.Issue_For references Class.id in your schema.
  // -----------------------------
  const presentDates = Array.from({ length: 10 }, (_, i) => new Date(2026, 0, 1 + i));
  const absentDates = Array.from({ length: 10 }, (_, i) => new Date(2026, 0, 11 + i));

  await DB.attendance.createMany({
    data: parents.flatMap((p) => [
      ...presentDates.map((date) => ({
        date,
        isPresent: true,
        Issue_For: classA.id,
        ParentId: p.Pid,
      })),
      ...absentDates.map((date) => ({
        date,
        isPresent: false,
        Issue_For: classA.id,
        ParentId: p.Pid,
      })),
    ]),
  });
  console.log("✅ Created: 1 class, 4 teachers (incl. homeroom), 5 students, subjects, attendance");
  console.log("✅ SEED COMPLETE");
}


main()
  .catch((e) => {
    console.error("❌ SEED ERROR:", e);
    process.exit(1);
  })
  .finally(async () => {
    await DB.$disconnect();
  });
