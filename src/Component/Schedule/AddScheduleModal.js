import React, { useMemo, useState } from 'react'
import { Country, State, City } from "country-state-city";
import moment from 'moment';
import get24Time from '../../customHooks/get24Time';
import HttpClient from '../../utils/HttpClient';



function AddScheduleModal({ day, callbackClose, fetchSchedule }) {


  let Hours = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"
  ]

  let Minuts = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", '25', "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "58", "59", "60"

  ]

  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [timeZone, setTimeZone] = useState("")
  const [error, setError] = useState(false)
  const [price, setPrice] = useState("")
  // const [duration,setDuration] = useState("")
  const [durationHour, setDurationHour] = useState("00")
  const [durationMinute, setDurationMinute] = useState("00")

  const durationcheking = useMemo(() => {
    return calculatingDuration(startTime, endTime)
  }, [startTime, endTime])

  function calculatingDuration(start, end) {
    if (start < end) {
      // return console.log(end.diff())
      setError(false)
      var a = moment(end, 'HH:mm');
      var b = moment(start, 'HH:mm');
      a.diff(b, 'hours', true)
      return get24Time(a.diff(b, 'hours', true))
    }
    else {
      setError(true)
    }
  }
  // console.log(`${durationHour}:${durationMinute}`);

  const SubmitSchedule = async () => {
    let duration = `${durationHour}:${durationMinute}`
    if (endTime != "" && startTime != "" && timeZone != "" && durationHour != "" && durationMinute != "") {
      if (durationcheking >= duration) {
        let dataSend = {
          duration: duration,
          startTime,
          endTime,
          price: "200",
          timeZone,
          weeklyDay: day
        }
        console.log(dataSend);
        let result = await HttpClient.requestData("addschedule", "POST", dataSend)
        console.log(result);
        if (result && result.status) {
          fetchSchedule()
          // alert("sechedule added success")
          callbackClose()
        } else if (result.status == false) {
          alert(result.error)
        }
        else {
          alert(result.message)
        }
      }
      else {
        alert("duration should be small and equal than time")
      }

    } else {
      alert("please fill all detail")
    }
  }

  return (
    <div className='tooltip-box-wrap'>
      <div onClick={(e) => {
        e.stopPropagation()
        callbackClose()
      }} style={{ width: "100%", height: "100vh", position: "absolute" }} />
      <div className="tooltip-box">
        <div className='tooltip-wrapper'>
          {/* <div className="tooltip-item">
        <form action="">
          <div className="form-group form-check tooltipBoxalign" style={{marginBottom:"1rem"}}>
            <label htmlFor="startTime">Price</label>
            <input
              type="number"
              className="form-control"
              style={{ display: "inline-block" }}
              value={price}
              onChange={(val)=>setPrice(val.target.value)}

            />
           
          </div>
        </form>
      </div> */}
          <div className="tooltip-item">
            <form action="">

              <div className="form-group form-check " style={{ display: "inline-block", marginBottom: "1rem",marginRight:'21px' }}>
                {/* <label htmlFor="endTime">Duration</label> */}
                {/* <input
              type="time"
              className="form-control"
              style={{ display: "inline-block" }}
              value={duration}
              min='00:00' max='24:00'
              // pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
              onChange={(val)=>setDuration(val.target.value)}
            /> */}


                <label>Duration in Hour</label>
                <select className="form-control" id="countrySelect" value={durationHour} onChange={(val) => setDurationHour(val.target.value)}>
                  <option>select</option>
                  {Hours.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>



            </form>
          </div>
          <div className="tooltip-item">
            <form action="" style={{marginRight:'23px'}}>

              <div className="form-group form-check " style={{ display: "inline-block", marginBottom: "1rem",marginRight:'0px',padding:'0px' }}>
                <label>Duration in Minute</label>
                <select className="form-control" id="countrySelect" value={durationMinute} onChange={(val) => setDurationMinute(val.target.value)}>
                  <option>select</option>
                  {Minuts.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })}

                </select>
              </div>



            </form>
          </div>

        </div>
        <div className="tooltip-wrapper" style={{margin:'0px 18px'}}>
          <div className="tooltip-item" >
            <form action="">
              <div className="form-group tooltipBoxalign" style={{ marginBottom: "1rem" }}>
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="time"
                  className="form-control"
                  style={{ display: "inline-block" }}
                  value={startTime}
                  onChange={(val) => setStartTime(val.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="tooltip-item">
            <form action="">
              <div className="form-group tooltipBoxalign" style={{ marginBottom: "1rem" }}>
                <label htmlFor="endTime">End Time</label>
                <input
                  type="time"
                  className="form-control"
                  style={{ display: "inline-block" }}
                  value={endTime}
                  onChange={(val) => setEndTime(val.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="tooltip-item">
            <form action="">
              <div className="form-group tooltipBoxalign" style={{ marginBottom: "1rem" }}>
                <label htmlFor="countrySelect">TimeZone</label>
                <select className="form-control" id="countrySelect" value={timeZone} onChange={(val) => setTimeZone(val.target.value)}>
                  <option>select</option>
                  {Country.getAllCountries().map((item, index) => {
                    return <option key={index} value={item.name}>{item.name}</option>
                  })}

                </select>
              </div>
            </form>
          </div>
        </div>

        <div className='d-block d-md-flex align-items-center justify-content-between pl-2'style={{margin:'0px 18px'}}>
          {durationHour && <p className='m-0 mb-2 mb-md-0' >Duration {`${durationHour}:${durationMinute ?? "00"}`} hours</p>}
          <button
            type="submit"
            onClick={SubmitSchedule}
            className="  btn-save-schedule mb-0"
          >
            Save
          </button>
        </div>
      </div>
    </div>)
}

export default AddScheduleModal