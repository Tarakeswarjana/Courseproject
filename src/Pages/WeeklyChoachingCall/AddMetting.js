import React, { useEffect, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import tz from "moment-timezone";
import { toast, ToastContainer,Zoom } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddMetting({Courses,fetchAllMeeting}) {
  const [courseId, setCourseId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setstartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [timeZone, settimeZone] = useState("");
  const [meetingId, setmeetingId] = useState("");
  const [times, setTimes] = useState({
    start: "",
    end: "",
  });
//   const [Courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetchCourse();
//   }, []);
//   const fetchCourse = async () => {
//     let result = await HttpClient.requestData("activecourse", "GET");
//     console.log(result);
//     if (result && result.status) {
//       setCourses(result.data);
//     }
//   };

  const createMeeting = async () => {
    if (
      courseId != "" &&
      date != "" &&
      startTime != "" &&
      endTime != "" &&
      meetingId != "" &&
      timeChecking
    ) {
      let dataSend = {
        courseId,
        date,
        startTime,
        endTime,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        meetingId,
      };
      console.log(dataSend);
      let result = await HttpClient.requestData(
        "addweeklymeeting",
        "POST",
        dataSend
      );

      console.log(result);
    //   return false
      if (result && result.status) {
        toast.success("Meeting Added successfully");
        fetchAllMeeting()
      } else {
        toast.error(result.message);
      }
      //   console.log(dataSend);
    } else {
      toast.warn("All feilds are required");
    }
  };

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
const timeChecking = React.useMemo(() => {
  return checkingTime(startTime,endTime)
}, [startTime,endTime])

function checkingTime (start,end){
  if(start>end && endTime!=""){
    toast.error("end time should be greater than start time")
    setendTime("")
    setTimes((prev)=>{
      return {...prev,start:"",end:""}
    })
    return false

  }
  else{
    return true
  }
}
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
        bodyStyle={{ borderRadius: '10px' }}
      />
      <div
        className="modal custom__MoDal fade"
        id="exampleModal2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog custom_ModalDialog" role="document">
          <div className="modal-content custom_ModalContent">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="meeting__DeTails p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="title__Meeting">Create Weekly Live Coaching Call</h2>
                </div>
                <div className="mt-3">
                  <div className="form-group">
                    <label htmlFor="">Choose for which course this call will be</label>
                    <select
                      // type="text"
                      className="form-control input_Field"
                      // placeholder="Choose a course"
                      value={courseId}
                      onChange={val => setCourseId(val.target.value)}
                    >
                      <option>Select Course</option>
                      {Courses.map(item => {
                        return (
                          <option value={item._id} key={item._id}>
                            {item.courseName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Date</label>
                    {/* <input
                      type="date"
                      className="form-control input_Field"
                      placeholder="Pick a date"
                      value={date}
                      onChange={(val) => setDate(val.target.value)}
                      // disabled={true}
                    /> */}
                    <DatePicker
                      className="form-control input_Field"
                      selected={date}
                      onChange={date => setDate(date)}
                      minDate={moment().toDate()}
                      placeholderText="Select Date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Choose Start Time</label>
                    <input
                      type="time"
                      value={times.start}
                      onChange={val => {
                        let time = tConvert(val.target.value);
                        console.log(time);
                        setstartTime(time);
                        setTimes(prev => {
                          return { ...prev, start: val.target.value };
                        });
                      }}
                      name=""
                      id=""
                      className="form-control input_Field"
                    />
                    {/* <option value="">Select hour</option>
                    </select> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Choose End Time</label>
                    <input
                      type="time"
                      value={times.end}
                      onChange={val => {
                        let time = tConvert(val.target.value);
                        setendTime(time);
                        setTimes(prev => {
                          return { ...prev, end: val.target.value };
                        });
                      }}
                      name=""
                      id=""
                      className="form-control input_Field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Meeting ID</label>
                    <input
                      type="text"
                      className="form-control input_Field"
                      placeholder=""
                      value={meetingId}
                      onChange={val => setmeetingId(val.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      style={{ marginTop: '1rem' }}
                      className="btn create__BTN"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={createMeeting}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
