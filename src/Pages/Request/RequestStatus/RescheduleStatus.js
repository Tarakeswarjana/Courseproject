import React from "react";
import calendaredit2 from '../../../asstes1/images/icon/calendar-edit-2.png'


export default function RescheduleStatus() {
    return (
        <>
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
            </div>
        </>
    )
}