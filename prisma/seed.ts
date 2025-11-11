import { DB } from "@/app/api/essentials";

async function main() {
    //   const name = await DB.user.createMany({
    //     data:[{
    //         name:"Adnan",
    //         password:"Adnan123"
    //     },{
    //         name:"Rajat",
    //         password:"Rajat123"
    //     }
    // ]
    //   })

    await DB.annoucements.createMany({
        data: [
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Mid-term Exams Tentative Dates",
                Date: "2024-07-15T00:00:00.000Z",
                Text: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Campus Wi-Fi Maintenance Scheduled",
                Date: "2024-07-20T00:00:00.000Z",
                Text: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "New Library Books Added",
                Date: "2024-07-22T00:00:00.000Z",
                Text: "The library has added 500+ new titles across technology, literature, and science."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Holiday Notice: Independence Day",
                Date: "2024-08-15T00:00:00.000Z",
                Text: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
            }, {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Mid-term Exams Tentative Dates",
                Date: "2024-07-15T00:00:00.000Z",
                Text: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Campus Wi-Fi Maintenance Scheduled",
                Date: "2024-07-20T00:00:00.000Z",
                Text: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "New Library Books Added",
                Date: "2024-07-22T00:00:00.000Z",
                Text: "The library has added 500+ new titles across technology, literature, and science."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Holiday Notice: Independence Day",
                Date: "2024-08-15T00:00:00.000Z",
                Text: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
            }, {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Mid-term Exams Tentative Dates",
                Date: "2024-07-15T00:00:00.000Z",
                Text: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Campus Wi-Fi Maintenance Scheduled",
                Date: "2024-07-20T00:00:00.000Z",
                Text: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "New Library Books Added",
                Date: "2024-07-22T00:00:00.000Z",
                Text: "The library has added 500+ new titles across technology, literature, and science."
            },
            {
                SenderId:"7b324232-1bd6-4f65-aabc-a927e67db400",
                Title: "Holiday Notice: Independence Day",
                Date: "2024-08-15T00:00:00.000Z",
                Text: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
            }

        ]
    })



}
main();