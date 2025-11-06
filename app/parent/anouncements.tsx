import { Dialog,DialogContent,DialogTrigger,DialogTitle } from "@radix-ui/react-dialog";


export default function Announcements(){
    const Announcemetns = [
  {
    title: "Mid-term Exams Tentative Dates",
    date: "2024-07-15",
    content: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
  },
  {
    title: "Campus Wi-Fi Maintenance Scheduled",
    date: "2024-07-20",
    content: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
  },
  {
    title: "New Library Books Added",
    date: "2024-07-22",
    content: "The library has added 500+ new titles across technology, literature, and science."
  },
  {
    title: "Holiday Notice: Independence Day",
    date: "2024-08-15",
    content: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
  },{
    title: "Mid-term Exams Tentative Dates",
    date: "2024-07-15",
    content: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
  },
  {
    title: "Campus Wi-Fi Maintenance Scheduled",
    date: "2024-07-20",
    content: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
  },
  {
    title: "New Library Books Added",
    date: "2024-07-22",
    content: "The library has added 500+ new titles across technology, literature, and science."
  },
  {
    title: "Holiday Notice: Independence Day",
    date: "2024-08-15",
    content: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
  },{
    title: "Mid-term Exams Tentative Dates",
    date: "2024-07-15",
    content: "Dear Parents, please note that the mid-term exams are scheduled from August 1st to August 10th. Ensure your child is well-prepared."
  },
  {
    title: "Campus Wi-Fi Maintenance Scheduled",
    date: "2024-07-20",
    content: "Wi-Fi services will be temporarily unavailable from 10:00 AM to 1:00 PM for maintenance."
  },
  {
    title: "New Library Books Added",
    date: "2024-07-22",
    content: "The library has added 500+ new titles across technology, literature, and science."
  },
  {
    title: "Holiday Notice: Independence Day",
    date: "2024-08-15",
    content: "The campus will remain closed on account of Independence Day. Regular classes resume the next day."
  }
];
    return (
        <div className="text-2xl font-['Inter'] relative  font-semibold w-2xl bg-gradient-to-b from-slate-500/50 m-12 p-5 rounded-lg flex flex-col justify-center items-center max-h-96 ">
            <p>Announcements</p>
             <div className="overflow-scroll w-full">
            {
                Announcemetns.map((an,index)=>{
                    return (
                            <Dialog key={index}>
                    <DialogTrigger asChild>
                            <div  className="w-full flex hover:bg-slate-500      items-center justify-between rounded-lg duration-200">
                            <p className="text-sm text-start font-['Inter'] font-semibold m-2">{an.title}</p>
                            <p className="text-sm opacity-80 m-2">{an.date}</p>
                            </div>
                            </DialogTrigger>
                            <DialogContent className="w-96 fixed backdrop-blur-2xl bg-slate-800/20 top-20 p-4 rounded-lg border-2 border-slate-500/50">
                                <DialogTitle className="text-2xl font-semibold mb-4 text-center">
                                        {an.title}
                                    </DialogTitle>
                                <p className="text-lg ">{an.content}</p>
                                </DialogContent>     
                                </Dialog>                       
                    )
                })
            }
            </div>
            
        </div>
    )
}