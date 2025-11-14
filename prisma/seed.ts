import { PrismaClient } from "../appi/generated/prisma";

const DB = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ---------------------------------------------
  // 1. Create Users
  // ---------------------------------------------
  const teacherUser = await DB.user.create({
    data: {
      name: "TeacherA",
      password: "Teacher123",
      role: "Teacher",
      status: "Successfull",
    },
  });

  const parentUser = await DB.user.create({
    data: { 
      name: "ParentA",
      password: "Parent123",
      role: "Parent",
      status: "Successfull",
    },
  });

  console.log("✅ Created Users");

  // ---------------------------------------------
  // 2. Create Class
  // ---------------------------------------------
  const classA = await DB.class.create({
    data: {
      Name: "Class 5A",
    },
  });

  console.log("✅ Created Class");

  // ---------------------------------------------
  // 3. Create Parent (linked to User + Class)
  // ---------------------------------------------
  const parent = await DB.parent.create({
    data: {
      Pid: parentUser.id,
      StudentName: "Rohit Sharma",
      ClassId: classA.id,
    },
  });

  console.log("✅ Created Parent");

  // ---------------------------------------------
  // 4. Create Teacher (linked to User)
  // ---------------------------------------------
  const teacher = await DB.teacher.create({
    data: {
      Tid: teacherUser.id,
    },
  });

  console.log("✅ Created Teacher");

  // ---------------------------------------------
  // 5. Create Subject (linked to Teacher + Class)
  // ---------------------------------------------
  
  await DB.subject.create({
    data: {
      Name: "Mathematics",
      TeacherId: teacher.Tid,
      ClassId: classA.id,
    },
  });

  console.log("✅ Created Subject");

  // ---------------------------------------------
  // 6. Create Announcements (linked to Teacher user)
  // ---------------------------------------------
  await DB.annoucements.createMany({
    data: [
      {
        SenderId: teacherUser.id,
        Title: "Mid-term Exams Tentative Dates",
        Date: new Date("2024-07-15T00:00:00.000Z"),
        Text: "Mid-term exams will be held from Aug 1 to Aug 10.",
      },
      {
        SenderId: teacherUser.id,
        Title: "Campus Wi-Fi Maintenance",
        Date: new Date("2024-07-20T00:00:00.000Z"),
        Text: "WiFi will be offline from 10 AM to 1 PM.",
      },
      {
        SenderId: teacherUser.id,
        Title: "New Library Books Added",
        Date: new Date("2024-07-22T00:00:00.000Z"),
        Text: "500+ new books added to the library.",
      },
      {
        SenderId: teacherUser.id,
        Title: "Holiday Notice: Independence Day",
        Date: new Date("2024-08-15T00:00:00.000Z"),
        Text: "Campus closed on Independence Day.",
      },
    ],
  });

  console.log("✅ Created Announcements");

  console.log("✅ SEED COMPLETE");
}
     const  present=[
    new Date(2025, 10, 1),
    new Date(2025, 10, 2),
    new Date(2025, 10, 3),
    new Date(2025, 10, 4),
    new Date(2025, 10, 5),
    new Date(2025, 10, 6),
    new Date(2025, 10, 7),
    new Date(2025, 10, 8),
    new Date(2025, 10, 9),
    new Date(2025, 10, 10)
  ]
  const  absent=[
    new Date(2025, 10, 11),
    new Date(2025, 10, 12),
    new Date(2025, 10, 13),
    new Date(2025, 10, 14),
    new Date(2025, 10, 15),
    new Date(2025, 10, 16),
    new Date(2025, 10, 17),
    new Date(2025, 10, 18),
    new Date(2025, 10, 19),
    new Date(2025, 10, 20)
  ]

  
async function main2() {
  const res=await DB.attendance.createMany({
    data: [
      ...present.map((item)=>{
      return{
    date: item,
    Issue_For:"e7108035-71dd-4270-be4d-8b4d2abed399",
    isPresent:true,
    ParentId:"0460d711-f894-4361-8aa6-a600c08cd13e"
  }
    }),
    ...absent.map((item)=>{
      return{
    date: item,
    Issue_For:"e7108035-71dd-4270-be4d-8b4d2abed399",
    isPresent:false,
    ParentId:"0460d711-f894-4361-8aa6-a600c08cd13e"
  }
  })
  ]
  })
}


main2()
  .catch((e) => {
    console.error("❌ SEED ERROR:", e);
    process.exit(1);
  })
  .finally(async () => {
    await DB.$disconnect();
  });
