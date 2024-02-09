import React, { useEffect, useState } from "react";
import meetingprofile from '../../asstes1/images/icon/meeting-profile.png'
import msgedit from '../../asstes1/images/icon/msg-edit.png'
import closesquare2 from '../../asstes1/images/icon/close-square-2.png'
import calendaredit2 from '../../asstes1/images/icon/calendar-edit-2.png'
import edit from '../../asstes1/images/icon/edit.png'
import closesquare3 from '../../asstes1/images/icon/close-square-3.png'
import RescheduleStatus from "./RequestStatus/RescheduleStatus";
import CancelMetting from "./RequestStatus/CancelMetting";
import AcceptMetting from "./RequestStatus/AcceptMetting";
import { memo } from "react";
import HttpClient from "../../utils/HttpClient";
import RequestedCard from "./RequestedCard";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RequestDetails({closeCallBack,id,changeBarFunc}) {
    const navigate = useNavigate()
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetchRequestFullDetails()
    },[])
    const fetchRequestFullDetails = async ()=>{
        let result = await HttpClient.requestData("particularStudentRequest/"+id,"GET")
        console.log("particular",result);
        if(result&&result.status){
            setData(result.data[0])
        }
    }
    const MessageSend=async(id)=>{
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
      <ToastContainer />
      <div
        onClick={() => closeCallBack(false)}
        style={{ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', zIndex: '1' }}
      />
      <div className="meeting-request-popup" style={{ zIndex: '2' }}>
        <div className="meeting-request-profile">
          <div className="meeting-request-wrapper">
            <div className="meeting-request-wrap">
              <img src={data?.image} />
            </div>
            <div className="meeting-request-wrap">
              <p className="meeting-person">
                {data?.fristName} {data?.lastName}
              </p>
              {/* <p className="meeting-time">
                                                    Local Time 8:00 PM (GMT +6:00 )
                                                </p> */}
            </div>
          </div>
          <div className="meeting-request-wrapper">
            <img src={msgedit} onClick={() => MessageSend(data?._id)} style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div className="">
          <div className="meeting-request-profile" style={{ marginTop: 30 }}>
            <div className="meeting-request-wrapper">
              <p className="meeting-request-title">Meeting Request</p>
            </div>
            <div className="meeting-request-wrapper">
              <p className="accept-box">
                <input type="checkbox" className="accept_Checkbox" />
                Accept All
              </p>
            </div>
          </div>
        </div>
        {data?.livecoacing?.map(item => {
          return <RequestedCard key={item._id} details={item} changeBarFunc={changeBarFunc} />;
        })}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <button type="button" onClick={setMettingStatusCancel} className="btn-request-decline">
                                                <img
                                                    src={closesquare2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Decline
                                            </button>
                                            <button type="button" onClick={setMettimgStatusReschedule} className="btn-meeting-rqst-schedule">
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Reschedule
                                            </button>
                                            <p onClick={setMettimgStatusAccept} className="accept-box-request-meeting">
                                                <input type="checkbox" className="accept_Checkbox_Requsted" />
                                                Accept
                                            </p>
                                        </div>
                                        {mettingStatus === "Reschedule" ? <RescheduleStatus /> : mettingStatus === "Cancel" ? <CancelMetting /> : mettingStatus === 'Accept' ? <AcceptMetting /> : null}

                                    </div> */}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20, display: "block" }}
                                        >
                                            <button
                                                type="button"
                                                className="btn-meeting-rqst-schedule"
                                                style={{ display: "block" }}
                                            >
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Reschedule
                                            </button>
                                            <input type="date" placeholder="Select Date & Time" />
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ justifyContent: "flex-end" }}
                                        >
                                            <div className="button">
                                                <button type="button" className="meeting-cancelBtn">
                                                    Cancel
                                                </button>
                                                <button type="button" className="meeting-doneBtn">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <button type="button" className="btn-request-decline">
                                                <img
                                                    src={closesquare2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Decline
                                            </button>
                                            <button type="button" className="btn-meeting-rqst-schedule">
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Reschedule
                                            </button>
                                            <p className="accept-box-request-meeting">
                                                <input type="checkbox"  className="accept_Checkbox_Requsted"/>
                                                Accept
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <button type="button" className="btn-request-decline">
                                                <img
                                                    src={closesquare2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Decline
                                            </button>
                                            <button type="button" className="btn-meeting-rqst-schedule">
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Reschedule
                                            </button>
                                            <p className="accept-box-request-meeting">
                                                <input type="checkbox"  className="accept_Checkbox_Requsted"/>
                                                Accept
                                            </p>
                                        </div>
                                    </div>
                                    <p className="adr-title">
                                        Accepted, Declined &amp; Rescheduled Meetings
                                    </p>
                                    <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <p className="btn-meeting-rqst-schedule-msg">
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                You have asked to rescedule this meeting to - 12th Feb - 02:00
                                                - 03:00
                                            </p>
                                            <img src={edit} />
                                        </div>
                                    </div> */}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <p className="btn-meeting-rqst-accepted-msg">
                                                <input type="checkbox" style={{ marginRight: 10 }} />
                                                You have accepted this meeting
                                            </p>
                                        </div>
                                    </div> */}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <button type="button" onClick={setMettingStatusCancel} className="btn-request-decline">
                                                <img
                                                    src={closesquare2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Decline
                                            </button>
                                            <button type="button" onClick={setMettimgStatusReschedule} className="btn-meeting-rqst-schedule">
                                                <img
                                                    src={calendaredit2}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Reschedule
                                            </button>
                                            <p onClick={setMettimgStatusAccept} className="accept-box-request-meeting">
                                                <input type="checkbox" className="accept_Checkbox_Requsted" />
                                                Accept
                                            </p>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20, display: "block" }}
                                        >
                                            <button
                                                type="button"
                                                className="btn-meeting-rqst-schedule"
                                                style={{ display: "block" }}
                                            >
                                                <img
                                                    src={closesquare3}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                Decline
                                            </button>
                                            <textarea
                                                rows={4}
                                                cols={50}
                                                placeholder="Describe Reason why you decline this meeting"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ justifyContent: "flex-end" }}
                                        >
                                            <div className="button">
                                                <button
                                                    type="button"
                                                    style={{ background: "#0F968E" }}
                                                    className="meeting-cancelBtn"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    style={{ background: "#FC5A5A" }}
                                                    className="meeting-doneBtn"
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}
        {/* <div
                                        className="meeting-request-details-section"
                                        style={{ marginTop: 25, marginBottom: 70 }}
                                    >
                                        <div className="meeting-request-profile">
                                            <div className="meeting-request-wrapper">
                                                <p className="request-date">5th Feb</p>
                                            </div>
                                            <div className="meeting-request-wrapper">
                                                <p className="request-time">16:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="youhave"><input className="accepted_Checked mr-1" type="checkbox"></input> You have accepted this meeting</p>
                                        </div>
                                        <div
                                            className="meeting-request-profile"
                                            style={{ marginTop: 20 }}
                                        >
                                            <p
                                                className="btn-meeting-rqst-accepted-msg"
                                                style={{ color: "#F66C63" }}
                                            >
                                                <img
                                                    src={closesquare3}
                                                    style={{ marginRight: 5, height: 20 }}
                                                />
                                                You have declined this meeting
                                            </p>
                                        </div>
                                    </div> */}
      </div>
    </>
  );
}

export default memo(RequestDetails) 