import React, { useState, useEffect } from "react";
import profile from "../../asstes1/images/icon/profile.png"
import calendartick from '../../asstes1/images/icon/calendar-tick.png'
import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import timer from '../../asstes1/images/icon/timer.png'
import sort from '../../asstes1/images/icon/sort.png'
import profileimg from '../../asstes1/images/icon/profileimg.png'
import message from '../../asstes1/images/icon/message.png'
import seen from '../../asstes1/images/icon/seen.png'
import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import HttpClient from "../../utils/HttpClient"
import moment from "moment"
import Loader from "../../Component/FullPageLoader/DotLoading"


export default function AcceptedCalls() {
    const [acceptRequest, setacceptRequest] = useState([])
    const [loading, setloading] = useState(false)


    useEffect(() => {
        fetchAcceptRequest()
    }, [])

    const fetchAcceptRequest = async () => {
        setloading(true)
        let result = await HttpClient.requestData("acceptRequest", "GET")
        // console.log(result);
        if (result && result.status) {
            setacceptRequest(result.data)
        }
        setloading(false)
    }



    return (
        <>

            <div className="_enrollment mt-0" style={{ marginLeft: "0" }}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="table-responsive m-0" style={{ background: "transparent" }}>
                            <table className="table table-hover table_own_csn_brdr  table_brdr_simple">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: "left",}}>
                                            <img src={profile} />
                                            <span className="rcnt_coaching" style={{fontSize:"15px"}}>Client</span>
                                        </th>
                                        <th
                                            style={{ textAlign: "left" }}
                                        >
                                            <img src={calendartick} />
                                            <span className="rcnt_coaching" style={{fontSize:"15px"}}>Schedule</span>
                                        </th>
                                        <th
                                            style={{ textAlign: "left" }}>
                                            <img src={timer} />
                                            <span className="rcnt_coaching" style={{fontSize:"15px"}}>Next Meeting</span>
                                        </th>

                                        <th
                                            style={{ textAlign: "left" }}>
                                            <img src={sort} />
                                            <span className="rcnt_coaching" style={{fontSize:"15px"}}>Sort by</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading && <div style={{ position: "absolute", textAlign: "center", width: "90%" }}><Loader /></div>}

                                    {acceptRequest.length > 0 ? acceptRequest.map((item, index) => {
                                        return <tr key={item._id}>
                                            <td style={{ textAlign: "left" }}>
                                                <img src={item?.image} style={{ width: "32px", height: "30px", borderRadius: "50%" }} />
                                                <span className="cname" style={{fontSize:"15px"}}>
                                                {`${item.fristName} ${item.lastName}`} </span>
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                {item?.livecoacing?.map((item, index) => {
                                                    return <div key={index} style={{maxWidth:"203px", marginLeft:"auto",display:"flex"}}>
                                                        <span className="schedule-onge" style={{textAlign:"left"}}>
                                                            {moment(item.bookingOn).format("Do MMM")} - </span> <span className="sch_time"  style={{fontSize:"15px"}}>{item?.startTime} -
                                                        {item?.endTime} <br /></span></div>
                                                })}

                                                {/* <span className="schedule-onge">6 more meetings</span> */}
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span className="schedule-pink"  style={{fontSize:"15px"}}>14th feb- </span>16:00 -
                                                17:00
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <p style={{ justifyContent: "left" }}>
                                                    <img src={message} className="noti-msg" />
                                                    <img src={seen} className="noti-seen" />
                                                </p>
                                            </td>
                                        </tr>
                                    }) : <p style={{ textAlign: "center" }}>No Calls Found</p>}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}