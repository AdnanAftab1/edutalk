"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios"

export type AcademicRecord = {
  subject: string
  class: string
  teacher: string
  grade: string
  date: string
  semester: string
  exam: string,
  ReportLink?:string
}



export const columns: ColumnDef<AcademicRecord>[] = [
  {
    accessorKey: "exam",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Exam</button>
    ),
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Subject</button>
    ),
  },
  {
    accessorKey: "class",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Class</button>
    ),
  },
  {
    accessorKey: "teacher",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Teacher</button>
    ),
  },
  {
    accessorKey: "grade",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Grade</button>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Date</button>
    ),
  },
  {
    accessorKey: "semester",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Semester</button>
    ),
  },
]

export function AcademicTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
//   const data: AcademicRecord[] = [
//   { subject: "Mathematics", class: "10A", teacher: "Mr. Sharma", grade: "A", date: "2025-03-12", semester: "Semester 2", exam: "Mid Term" },
//   { subject: "Physics", class: "10A", teacher: "Mrs. Gupta", grade: "B+", date: "2025-03-15", semester: "Semester 2", exam: "Mid Term" },
//   { subject: "Chemistry", class: "10A", teacher: "Dr. Kumar", grade: "A-", date: "2025-03-18", semester: "Semester 2", exam: "Mid Term" },
//   { subject: "English", class: "10A", teacher: "Ms. D'Souza", grade: "A", date: "2025-03-20", semester: "Semester 2", exam: "Mid Term" },
//   { subject: "Biology", class: "10A", teacher: "Mr. Ramesh", grade: "B", date: "2025-03-22", semester: "Semester 2", exam: "Mid Term" },
// ]
  const  [data,setData]=React.useState<AcademicRecord[]>([{ subject: "Mathematics", class: "10A", teacher: "Mr. Sharma", grade: "A", date: "2025-03-12", semester: "Semester 2", exam: "Mid Term" }])
  React.useEffect(()=>{
    async function Load() {
           axios.get('http://localhost:3000/api/auth/parent/attendance').then((data)=>{
            if(data.status===200){
              const op:AcademicRecord[]=data.data;
              console.log(op);  
              setData(op);
            }
          }).catch((err)=>{
            console.log("Error occured",err);
          });
      }
      Load()
  },[])

  
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="w-[90%] mt-4 font-['Inter']">
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-slate-300/55">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))} 
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button> */}
      </div>
    </div>
  )
}