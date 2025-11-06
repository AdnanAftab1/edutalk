"use client"

import * as React from "react"

import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

interface SchoolDate extends Date {
  isPresent: boolean
}

export function CalendarDemo() {

  const [date, setDate] = React.useState<SchoolDate[]>();


    const modifiers = {
      selected:[],
      present: [
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
  ],
  absent: [
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
  };
  

  return (
    <Calendar
      mode="multiple"
      selected={date} 
      className="rounded-md m-4 border shadow-sm w-xl bg-transparent animate-fade-down"
      modifiers={modifiers}
      
    />
  )
}
