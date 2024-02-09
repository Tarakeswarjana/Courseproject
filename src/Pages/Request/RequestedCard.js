import React from "react";
import closesquare2 from "../../asstes1/images/icon/close-square-2.png";
import calendaredit2 from "../../asstes1/images/icon/calendar-edit-2.png";
import closesquare3 from "../../asstes1/images/icon/close-square-3.png";
import accept from "../../asstes1/images/icon/acceptmeeting.png";
import moment from "moment";
import { async } from "@firebase/util";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RequestedCard({ details, changeBarFunc }) {
  const acceptMeeting = async (id) => {
    let dataSend = {
      id: id,
      acceptedStatus: "Accept",
    };
    let result = await HttpClient.requestData(
      "updateAcceptedStatus",
      "PUT",
      dataSend
    );
    if (result && result.status) {
      toast.success("Accepted Successfully");
    } else {
      toast.warn(result.message);
    }
  };
  const declineMeeting = async (id) => {
    let dataSend = {
      id: id,
      acceptedStatus: "Decline",
    };
    let result = await HttpClient.requestData(
      "updateAcceptedStatus",
      "PUT",
      dataSend
    );
    if (result && result.status) {
      changeBarFunc("reject");

      alert("Decline Successfully");
    } else {
      alert(result.message);
    }
  };

  // const resheduleMeeting = async (id) => {
  //   let dataSend = {
  //     id: id,
  //     acceptedStatus: "Decline",
  //   };
  //   let result = await HttpClient.requestData(
  //     "updateAcceptedStatus",
  //     "PUT",
  //     dataSend
  //   );
  //   if (result && result.status) {
  //     changeBarFunc("reject");

  //     alert("Decline Successfully");
  //   } else {
  //     alert(result.message);
  //   }
  // };
  return (
    <>
      <ToastContainer />
      {details.acceptedStatus == "Pending" && (
        <div
          className="meeting-request-details-section"
          style={{ marginTop: 25 }}
        >
          <div className="meeting-request-profile">
            <div className="meeting-request-wrapper">
              <p className="request-date">
                {moment(details.bookingOn).format("Do MMM")}
              </p>
            </div>
            <div className="meeting-request-wrapper">
              <p className="request-time">
                {details?.startTime} - {details?.endTime}
              </p>
            </div>
          </div>
          <div className="meeting-request-profile" style={{ marginTop: 20 }}>
            <button type="button" className="btn-request-decline">
              <img
                src={closesquare2}
                style={{ marginRight: 5, height: 20 }}
                onClick={() => declineMeeting(details._id)}
              />
              Decline
            </button>
            <button type="button" className="btn-meeting-rqst-schedule">
              <img src={calendaredit2} style={{ marginRight: 5, height: 20 }} />
              Reschedule
            </button>
            <p className="accept-box-request-meeting">
              {/* <input type="checkbox" onChange={} className="accept_Checkbox_Requsted"  /> */}
              <img
                src={accept}
                style={{ marginRight: 5, height: 20, cursor: "pointer" }}
                onClick={() => {
                  acceptMeeting(details._id);
                  changeBarFunc("accept");
                }}
              />
              Accept
            </p>
          </div>



          {/* <div
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
    </div> */}
        </div>



      )}{" "}
      {/* <div
        className="meeting-request-details-section"
        style={{ marginTop: 25 }}
      ></div> */}
    </>
  );
}

export default RequestedCard;
