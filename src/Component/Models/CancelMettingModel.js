import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-toastify";
import HttpClient from "../../utils/HttpClient";

export default function CancelMettingModel({closeModal,day}) {
  const [message,setMessage] = useState("")
  
    const cancelMeeting =async (e)=>{
      e.preventDefault()
      let dataSend ={
        bookingOn:day,
        cancelMsg:message
      }
      console.log(dataSend);
      let result = await HttpClient.requestData("cancelAllMeetingForDay","PUT")
      if(result&&result.status){
        closeModal(false)
        toast.success("meeting cancel successfully")

      }else{
        toast.error(result.message)
      }
    }
  return (
    <>
      <div className="pop-up" id="cancel_metting_popup">
        <div className="popUp-wrapper">
          <h2 className="popUpText">Cancel All Meeting For - {moment(day).format("LL")}</h2>
          <div className="closeBtn" onClick={()=>closeModal(false)}>
            X
          </div>
          <label className="addMessage">
            Add a message <span className="optional">(Optional)</span>
          </label>
          <textarea
            name=""
            rows={4}
            cols={50}
            placeholder="Hey , I’m currently a little busy, but I’ll be free within some months. Thank you."
            value={message}
            onChange={(val)=>setMessage(val.target.value)}
/>
          <div className="cancel-Btn">
            <input
              type="submit"
              defaultValue="Cancel Meetings"
              className="btn btn-primary btnSettings"
              onClick={cancelMeeting}
            />
          </div>
        </div>
      </div>
    </>
  );
}
