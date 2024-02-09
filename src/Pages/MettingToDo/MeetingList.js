import React, { useState } from "react";
import calendaredit from "../../asstes1/images/icon/calendar-edit.png";
import savvanth from "../../asstes1/images/icon/savvanth.png";
import message from "../../asstes1/images/icon/message.png";
import durationtime from "../../asstes1/images/icon/duration-time.png";
import MeetingCard from "./MeetingCard";
import CancelMettingModel from "../../Component/Models/CancelMettingModel";
import moment from "moment";
function MeetingList({ color, MeetingList }) {
    const [modal,setModal] = useState(false)
    console.log("MeetingList",MeetingList);
  return (
      <>
    <div className="meeting-item">
      <div className="nmb-bar" style={{ background: color }}>
        <p>{`${moment(MeetingList[0].bookingOn).format("Do MMM YYYY") ?? ""} `}</p>
        <p >
          <i className="fa fa-ellipsis-h" onClick={()=>setModal(!modal)} />
        </p>
      </div>
      {MeetingList.map((item) => {
        return (
          <MeetingCard
            key={item._id}
            id={item.studentId}
            name={item?.student?.name}
            startTime={item.startTime}
            endTime={item.endTime}
            day={item.bookingOn}
            image={item.student?.image}
            meetingId={item._id}
          />
        );
      })}
    </div>
    {modal&&
    <CancelMettingModel closeModal={setModal} day={MeetingList[0].bookingOn}/>}
    </>
  );
}

export default MeetingList;
