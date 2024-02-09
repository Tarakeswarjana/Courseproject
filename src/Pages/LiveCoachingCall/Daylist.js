import React from 'react';
import DayCard from "../../Component/Schedule/DayCard";
import { useState } from 'react';
import { useEffect } from 'react';
import HttpClient from "../../utils/HttpClient";


export default function Daylist() {
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    fetchSchedule()
  }, [])
  const fetchSchedule = async () => {
    let result = await HttpClient.requestData("viewschedule", "GET")
    if (result && result.status) {
      setSchedule(result.data)
    }
  }
  return (
    <>
      <div className="container-fluid ">
      <div className="p-3">
      <div className="_enrollment">
      <h1 className="title-schedule title_schedule_own_txt title_schedule_own_dlist"> Create Your Schedule for live coaching call as per your time</h1>
        <div className="day-list">
          <DayCard color="#FFB59B" day="Sunday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "sunday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#44C979" day="Monday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "monday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#0F4F43" day="Tuesday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "tuesday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#7573E2" day="Wednesday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "wednesday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#EC6ED0" day="Thursday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "thursday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#B6CB34" day="Friday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "friday")} fetchSchedule={fetchSchedule} />
          <DayCard color="#896AE1" day="Saturday" scheduleData={schedule.filter(item => item.weeklyDay.toLowerCase() == "saturday")} fetchSchedule={fetchSchedule} />
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
