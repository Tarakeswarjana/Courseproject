import React, { useState } from "react";
import { ToastContainer ,Zoom} from "react-toastify";
import AcceptedCalls from "./AcceptedCalls";
import NewRequests from "./NewRequest";
import RejectedMeetings from "./RejectedMeetings";

export default function Requests() {
  const [changeBar, setChangeBar] = useState("new");

  return (
    <div className="container-fluid ">
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
      />
      <div className="p-3">
        <div className="_enrollment">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-12">
              <h1 className="requests-title">Requests</h1>
              <div className="_student_request_nav">
                <ul className="nav nav-pills " id="pills-tab" role="tablist">
                  <li className="nav-item nav_item_own" onClick={() => setChangeBar("new")}>
                    <a
                      className="nav-link active-tab active"
                      id="pills-new-requests"
                      data-toggle="pill"
                      href="#pills-new-requests"
                      role="tab"
                      aria-controls="pills-new-requests"
                      aria-selected="false"
                    >
                      New Requests
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setChangeBar("accept")}
                  >
                    <a
                      className="nav-link"
                      id="pills-accepted-calls"
                      data-toggle="pill"
                      href="#pills-accepted-calls"
                      role="tab"
                      aria-controls="pills-accepted-calls"
                      aria-selected="true"
                    >
                      Accepted Calls
                    </a>
                  </li>
                  {/* <li
                    className="nav-item"
                    onClick={() => setChangeBar("reject")}
                  >
                    <a
                      className="nav-link"
                      id="pills-rejected-calls"
                      data-toggle="pill"
                      href="#pills-rejected-calls"
                      role="tab"
                      aria-controls="pills-rejected-calls"
                      aria-selected="true"
                    >
                      Rejected Calls
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {changeBar == "accept" ? (
            <AcceptedCalls />
          ) : changeBar == "new" ? (
            <NewRequests
            changeBarFunc={setChangeBar}
             />
          ) : changeBar == "reject" ? (
            <RejectedMeetings />
          ) : null}
        </div>
      </div>
    </div>
  );
}
