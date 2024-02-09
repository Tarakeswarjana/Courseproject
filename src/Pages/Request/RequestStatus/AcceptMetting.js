import React from "react";

export default function AcceptMetting() {
    return (
        <>
            <div
                className="meeting-request-profile"
                style={{ marginTop: 20 }}
            >
                <p className="btn-meeting-rqst-accepted-msg">
                    <input type="checkbox" style={{ marginRight: 10 }} />
                    You have accepted this meeting
                </p>
            </div>
        </>
    )
}