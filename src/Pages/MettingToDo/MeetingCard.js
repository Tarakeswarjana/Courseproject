import React, { useState } from "react";
import calendaredit from "../../asstes1/images/icon/calendar-edit.png";
import savvanth from "../../asstes1/images/icon/savvanth.png";
import message from "../../asstes1/images/icon/message.png";
import durationtime from "../../asstes1/images/icon/duration-time.png";
import HttpClient from "../../utils/HttpClient";
import { useNavigate } from "react-router-dom";
import MettingdetailSidePopup from "../../Component/Models/MettingDetailSidePopup";
function MeetingCard({ name, startTime, endTime ,id,day,image,meetingId}) {

  const navigate = useNavigate()
  const [show,setShow] = useState(false)

  const MessageSend=async()=>{
// console.log(id);
let dataSend={
  receiverId:id,
  senderType:"teacher",
  receiverType:"student",
  message:".",
  lastMsgBy:"teacher"
}
console.log(dataSend);
let result = await HttpClient.requestData("createChat","POST",dataSend)
console.log(result);
if(result&&result.status){
  navigate("/chat",{state:{id:result.data._id}})
//  let res =   await setDoc(doc(db, "messages", result.data[0]._id), {
//         // message: "Hii",

//       },{merge:true});

//     console.log(res);
}
  }
  return (
    <>
      <div
        className="nmt-description"
        style={{
          boxShadow:
            "0px 4px 0px #0076fb, 0px 12px 20px rgb(130 130 130 / 10%), 0px 10px 20px -10px rgb(0 118 251 / 40%)",
            cursor:"pointer"
            
        }}
        onClick={()=>setShow(!show)}
      >
        <div className="nmt-top">
          <img src={image} />
          <p className="meet-name">{name}</p>
          <img src={message} className="noti-msg" onClick={MessageSend} style={{cursor:"pointer"}}/>
        </div>
        <div className="nmt-bottom">
          <p className="meet-time">
            <img src={durationtime} />
            {startTime} - {endTime}
          </p>
        </div>
      </div>
   {show&&   <MettingdetailSidePopup studentId={id} image={image} name={name} startTime={startTime} endTime={endTime} closeCallback={setShow} day={day} meetingId={meetingId}/>}

    </>
  );
}

export default MeetingCard;
