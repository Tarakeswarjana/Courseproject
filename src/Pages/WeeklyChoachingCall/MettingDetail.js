import React, { useEffect, useMemo, useState } from "react";
import HttpClient from "../../utils/HttpClient";
import closesquare3 from "./../../asstes1/images/icon/close-square-3.png";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function MettingDetail({
  meeting_id,
  Courses,
  fetchAllMeeting,
}) {
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

  const [edit_enable, setEditEnable] = useState(false);
  useEffect(() => {
    if (meeting_id != "") {
      fetchMeetingDetail();
    }
  }, [meeting_id]);

  const fetchMeetingDetail = async () => {
    let result = await HttpClient.requestData(
      "viewparticularmeetingdetails/" + meeting_id,
      "GET"
    );
    console.log("singmeeting", result);
    if (result && result.status) {
      let data = result.data[0];
      setmeetingId(data.meetingId);
      setDate(moment(data.date).toDate());
      setstartTime(data.startTime);
      setendTime(data.endTime);
      setCourseId(data.courseId);
      setTimes((prev) => {
        return {
          ...prev,
          start: covert12to24(data.startTime),
          end: covert12to24(data.endTime),
        };
      });
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

  const covert12to24 = (str) => {
    str = String(str).toLowerCase().replace(/\s/g, "");
    var has_am = str.indexOf("am") >= 0;
    var has_pm = str.indexOf("pm") >= 0;
    // first strip off the am/pm, leave it either hour or hour:minute
    str = str.replace("am", "").replace("pm", "");
    // if hour, convert to hour:00
    if (str.indexOf(":") < 0) str = str + ":00";
    // now it's hour:minute
    // we add am/pm back if striped out before
    if (has_am) str += " am";
    if (has_pm) str += " pm";
    // now its either hour:minute, or hour:minute am/pm
    // put it in a date object, it will convert to 24 hours format for us
    var d = new Date("1/1/2011 " + str);
    // make hours and minutes double digits
    var doubleDigits = function (n) {
      return parseInt(n) < 10 ? "0" + n : String(n);
    };
    return doubleDigits(d.getHours()) + ":" + doubleDigits(d.getMinutes());
  };

  const SaveMeeting = async () => {
    if (
      courseId != "" &&
      date != "" &&
      startTime != "" &&
      endTime != "" &&
      meetingId != ""
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
      // return false
      let result = await HttpClient.requestData(
        "editweeklymeetingdetails/" + meeting_id,
        "PUT",
        dataSend
      );
      if (result && result.status) {
        alert("Edited successfully");
        fetchAllMeeting();
        fetchMeetingDetail();
        setEditEnable(false);
      } else {
        alert(result.message);
      }
      //   console.log(dataSend);
    } else {
      alert("All feilds are required");
    }
  };

  const cancelMeeting = async () => {
    let result = await HttpClient.requestData(
      "deleteweeklymeeting/" + meeting_id,
      "PUT"
    );
    console.log(result);
    if (result && result.status) {
      alert("Cancel Successfully");
      fetchAllMeeting();
    }
  };


  const timeChecking = useMemo(()=>{
    return checkingFunction(startTime,endTime)
  },[startTime,endTime])

  function checkingFunction(){
    if(startTime<endTime){
      return true
    }
    else{

      return false
    }
  }

  return (
    <>
      <div
        className="modal custom__MoDal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // onClick={()=>setEditEnable(false)}
      >
        <div className="modal-dialog custom_ModalDialog" role="document">
          <div className="modal-content custom_ModalContent">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {/* <span aria-hidden="true">×</span> */}
              </button>
              <div className="meeting__DeTails p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="title__Meeting">Meetings Details</h2>
                  {!edit_enable ? (
                    <a
                      className="eDitMeeting__btn"
                      onClick={() => {
                        setEditEnable(!edit_enable);
                      }}
                    >
                      <i className="fa fa-pencil-square-o" aria-hidden="true" />{" "}
                      Edit
                    </a>
                  ) : (
                    <a
                      className="btn btn-success"
                      style={{color: "#fff"}}
                      onClick={() => {
                        SaveMeeting();
                      }}
                    >
                      {/* <i className="fa fa-pencil-square-o" aria-hidden="true" />{" "} */}
                      Save
                    </a>
                  )}
                </div>
                <div className="mt-3">
                  <div className="form-group">
                    <label htmlFor="">
                      Choose for which course this call will be
                    </label>
                    <select
                      // type="text"
                      className="form-control input_Field"
                      // placeholder="Choose a course"
                      value={courseId}
                      onChange={(val) => setCourseId(val.target.value)}
                    >
                      <option>Select Course</option>
                      {Courses.map((item) => {
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
                    {edit_enable ? (
                      // <input
                      //   type="date"
                      //   className="form-control input_Field"
                      //   placeholder=""
                      //   value={date}
                      //   onChange={(val) => {
                      //     console.log(val.target.value);
                      //     setDate(val.target.value);
                      //   }}
                      // />
                      <DatePicker
                      className="form-control input_Field"
                     selected={date} onChange={(date) => {
                      console.log(date);
                      setDate(date)}}
                     minDate={moment().toDate()}
                     placeholderText="Select a day" />
                    ) : (
                      <div
                        className="input_Field"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {moment(date).format("Do MMM")}
                      </div>
                    )}
                  </div>
                  {edit_enable ? (
                    <>
                      <div className="form-group">
                        <label htmlFor="">Choose Start Time</label>
                        <input
                          type="time"
                          value={times.start}
                          onChange={(val) => {
                            let time = tConvert(val.target.value);
                            console.log(time);
                            setstartTime(time);
                            setTimes((prev) => {
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
                          onChange={(val) => {
                            let time = tConvert(val.target.value);
                            setendTime(time);
                            setTimes((prev) => {
                              return { ...prev, end: val.target.value };
                            });
                          }}
                          name=""
                          id=""
                          className="form-control input_Field"
                        />
                      </div>
                      {!timeChecking&&<p>start time should be less than end time</p>}
                    </>
                  ) : (
                    <div className="form-group">
                      <label htmlFor="">Duration</label>
                      <div
                        className="input_Field"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {startTime}-{endTime}
                      </div>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="">Meeting ID</label>
                    <input
                      type="text"
                      className="form-control input_Field"
                      placeholder=""
                      value={meetingId}
                      onChange={(val) => setmeetingId(val.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn cancel__CallBTN"
                      onClick={cancelMeeting}
                      data-dismiss="modal"
                      aria-label="Close"
                      style={{marginTop: "3rem"}}
                    >
                      <img src={closesquare3} alt="" className="img-fluid" style={{marginRight: "10px"}}/>
                      Cancel Call
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
