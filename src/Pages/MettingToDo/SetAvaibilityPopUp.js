import React from "react";
export default function AvaibilityPopUp () {
    return (
        <>
               <div className="meeting-side-pop-up">
                                    <div className="meeting-profile-section">
                                        <div className="meeting-profile">
                                            <img src="./images/icon/meeting-profile.png" alt="" />
                                        </div>
                                        <div className="meeting-profile">
                                            <p className="meeting-person">Savannah Nguyen</p>
                                            <p className="meeting-time">Local Time 8:00 PM (GMT +6:00 )</p>
                                        </div>
                                    </div>
                                    <div className="meeting-profile-section">
                                        <div className="meeting-profile">
                                            <img src="./images/icon/meeting-clock.png" alt="" />
                                        </div>
                                        <div className="meeting-profile">
                                            <p className="meeting-person">Meeting Time</p>
                                            <p className="meeting-time">
                                                8th Feb, Monday
                                                <br />
                                                15:00-16:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="meeting-button">
                                        <button type="button" className="reschedule-btn">
                                            <img src="./images/icon/calendar-edit.png" />
                                            Reschedule This Meeting
                                        </button>
                                        <button type="button" className="close-button">
                                            <img src="./images/icon/close-square.png" />
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
                                                    <img
                                                        src="./images/icon/message-notif.png"
                                                        style={{ marginRight: 10 }}
                                                    />
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
                                                    <img
                                                        src="./images/icon/calendar-2.png"
                                                        style={{ marginRight: 10 }}
                                                    />
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
                                                    <img
                                                        src="./images/icon/calendar-search.png"
                                                        style={{ marginRight: 10 }}
                                                    />
                                                    Meeting History
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-home"
                                            role="tabpanel"
                                            aria-labelledby="pills-meesages-tab"
                                        >
                                            Meesages
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby=""
                                        >
                                            <div className="future-meeting-img">
                                                <img src="./images/icon/calendar-remove.png" />
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
                                                <img src="./images/icon/calendar-remove.png" />
                                                <p>No future meeting is listed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        </>
    )
}
