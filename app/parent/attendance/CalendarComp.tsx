"use client"

import * as React from "react"

import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

interface SchoolDate extends Date {
  isPresent: boolean
}

export function CalendarDemo({present,absent}:{present:Date[],absent:Date[]}) {

  const [date, setDate] = React.useState<SchoolDate[]>();

  

    const modifiers = {
      selected:[],
      present:present ,
      absent:absent 
  };
  

  return (
    <Calendar
      mode="multiple"
      selected={date} 
      className="rounded-md m-4 border shadow-sm w-xl bg-transparent animate-fade-down animate-delay-500"
      modifiers={modifiers}
      
    />
  )
}
