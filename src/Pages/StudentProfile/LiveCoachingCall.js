import React, { useEffect, useState } from "react";

import clockduration from "../../asstes1/images/icon/clock-duration.png";
import calendarduration from "../../asstes1/images/icon/calendarduration.png";
import durationprofile from "../../asstes1/images/icon/durationprofile.png";
import instrutor from "../../asstes1/images/icon/instrutor.png";
import calendartick from "../../asstes1/images/icon/calendar-tick.png";
import durationtime from "../../asstes1/images/icon/duration-time.png";
import profileimg from "../../asstes1/images/icon/profileimg.png";
import sort from "../../asstes1/images/icon/sort.png";
import janecooper from "../../asstes1/images/icon/janecooper.png";
import seen from "../../asstes1/images/icon/seen.png";
import HttpClient from "../../utils/HttpClient";
import ActiveCallCard from "./ActiveCallCard";
import moment from "moment";

export default function LiveCoachingCall({ id }) {
  const [activeCallData, setActiveCallData] = useState([]);
  const [prevCallData,setPrevCallData] = useState([])

  useEffect(() => {
    fetchCall();
    fetchprevCall()

  }, []);

  const fetchCall = async () => {
    let result = await HttpClient.requestData(
      "studentActiveLiveCoachingCall/" + id,
      "GET"
    );
    if (result && result.status) {
      setActiveCallData(result.data);
    }
  };
  const fetchprevCall = async () => {
    let result = await HttpClient.requestData(
      "studentPreviousLiveCoachingCall/" + id,
      "GET"
    );
    if (result && result.status) {
        setPrevCallData(result.data);
    }
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment enrollment_own">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <h1 className="course-tite">Joined 5 Coaching Call</h1>
                <button
                  type="button"
                  className="btn btn-primary btn-active-calls"
                >
                  Active Calls
                </button>
                <div className="duration">
                  {activeCallData.map((item,index) => {
                    return (
                      <ActiveCallCard
                        key={index}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        date={item.bookingOn}
                        name={item.instructorData.name}
                        image={item.instructorData.image}
                      />
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-previous-calls"
                >
                  Previous Calls
                </button>
                <div
                  className="table-responsive tab-mob"
                  style={{ background: "transparent" }}
                >
                  <table className="table table-hover table-live-coaching">
                    <thead>
                      <tr>
                        <th>
                          <img src={instrutor} />
                          Instructor
                        </th>
                        <th>
                          <img src={calendartick} />
                          Date
                        </th>
                        <th>
                          <img src={durationtime} />
                          Duration
                        </th>
                        <th>
                          <img src={sort} />
                          sort by
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                 {prevCallData.map((item,index)=>{
                     return <tr key={index}>
                     <td>
                       <img src={item?.instructorData?.image} style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                      {item?.instructorData?.name}
                     </td>
                     <td>{moment(item.bookingOn).format("MMM Do YY")}</td>
                     <td>{item.startTime} - {item.endTime}</td>
                     <td>
                       <p>
                         <img src={seen} className="noti-seen" />
                       </p>
                     </td>
                   </tr>
                 })}     
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
