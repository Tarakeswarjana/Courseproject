import React from "react";
import closesquare3 from '../../../asstes1/images/icon/close-square-3.png'


export default function CancelMetting() {
    return (
        <>
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
        </>
    )
}