import React, { useEffect, useState } from "react";
import meetingprofile from "../../asstes1/images/icon/meeting-profile.png";
import meetingClock from "../../asstes1/images/icon/meeting-clock.png";
import closesquare from "../../asstes1/images/icon/close-square.png";
import messagenotif from "../../asstes1/images/icon/message-notif.png";
import calendar2 from "../../asstes1/images/icon/calendar-2.png";
import calendarsearch from "../../asstes1/images/icon/calendar-search.png";
import calendarremove from "../../asstes1/images/icon/calendar-remove.png";
import calendaredit from "../../asstes1/images/icon/calendar-edit.png";
import moment from "moment";
import MessageTab from "../../Pages/MettingToDo/MessageTab";
import { useNavigate } from "react-router-dom";

export default function MettingdetailSidePopup({
  name,
  startTime,
  endTime,
  closeCallback,
  day,
  image,
  studentId,
  meetingId,
}) {
  console.log(day, startTime, endTime, meetingId);  
  const [isInTime, setIsIntime] = useState(false);

  useEffect(() => {
    checkLiveChoaching();
  }, []);

  const Navigate = useNavigate();

  const checkLiveChoaching = async () => {
    if (moment(day).format("MMM Do YY") == moment().format("MMM Do YY")) {
      // console.log(parseInt(startTime.slice(0,2))*60+parseInt(startTime.slice(3,5))<=parseInt(moment().format('H'))*60+parseInt(moment().format('mm')) && parseInt(endTime.slice(0,2))*60+parseInt(endTime.slice(3,5))>=parseInt(moment().format('H'))*60+parseInt(moment().format('mm')));
      if (
        parseInt(startTime.slice(0, 2)) * 60 +
          parseInt(startTime.slice(3, 5)) <=
          parseInt(moment().format("H")) * 60 +
            parseInt(moment().format("mm")) &&
        parseInt(endTime.slice(0, 2)) * 60 + parseInt(endTime.slice(3, 5)) >=
          parseInt(moment().format("H")) * 60 + parseInt(moment().format("mm"))
      ) {
        setIsIntime(true);
      }
    } 
  };
  // console.log(isInTime);
  return (
    <>
      <div
        onClick={() => closeCallback(false)}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          zIndex: "999",
        }}
      />
      <div
        className="meeting-side-pop-up newpopUpsDesign"
        id="metting_detail_side_popup"
        // style={{ position: "fixed" }}
      >
        <div className="meeting-profile-section">
          <div className="meeting-profile">
            <img src={image} alt="" />
          </div>
          <div className="meeting-profile">
            <p className="meeting-person">{name}</p>
            <p className="meeting-time">Local Time 8:00 PM (GMT +6:00 )</p>
          </div>
        </div>
        <div className="meeting-profile-section align-items-center">
          <div className="meeting-profile">
            <img src={meetingClock} alt="" />
          </div>
          <div className="meeting-profile">
            <p className="meeting-person">Meeting Time</p>
            <p className="meeting-time">
              {moment(day).format("Do MMM YYYY")}
              <br />
              {startTime ?? ""}-{endTime ?? ""}
            </p>
          </div>
          {
            isInTime?
            <div className="ml-4">
            <button
              className="btn btn-primary px-4 py-2"
              onClick={() => {
                Navigate(`/video_calling/${meetingId}`);
              }}
            >
              Join Now
            </button>
          </div>
          : null
          }
          
        </div>
        <div className="meeting-button">
          <button type="button" className="reschedule-btn">
            <img src={calendaredit} />
            Reschedule This Meeting
          </button>
          <button type="button" className="close-button">
            <img src={closesquare} />
            Cancel Meeting
          </button>
        </div>
        <div className="_meeting_overview_nav">
          <ul
            className="nav nav-pills "
            id="pills-tab"
            role="tablist"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-meesages-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <img src={messagenotif} style={{ marginRight: 10 }} />
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-futuremeeting-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <img src={calendar2} style={{ marginRight: 10 }} />
                Future Meeting
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-meeting-history-tab"
                data-toggle="pill"
                href="#pills-meeting-history"
                role="tab"
                aria-controls="pills-meeting-history"
                aria-selected="false"
              >
                <img src={calendarsearch} style={{ marginRight: 10 }} />
                Meeting History
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <MessageTab studentId={studentId} />
          <div
            className="tab-pane fade "
            id="pills-profile"
            role="tabpanel"
            aria-labelledby=""
          >
            <div className="future-meeting-img">
              <img src={calendarremove} />
              <p>No future meeting is listed</p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-meeting-history"
            role="tabpanel"
            aria-labelledby="pills-meeting-history-tab"
          >
            <div className="future-meeting-img">
              <img src={calendaredit} />
              <p>No future meeting is listed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
