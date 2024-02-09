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
import Loader from '../../Component/FullPageLoader/DotLoading'


export default function RejectedMeetings() {
    const [acceptRequest, setacceptRequest] = useState([])
    const [loader,setLoader]= useState(false)


    useEffect(() => {
        fetchAcceptRequest()
    }, [])

    const fetchAcceptRequest = async () => {
        setLoader(true)
        let result = await HttpClient.requestData("cancelRequest", "GET")
        console.log(result);
        if (result && result.status) {
            setacceptRequest(result.data)
        }
        setLoader(false)
    }



    return (
        <>

            <div className="_enrollment mt-0" style={{ marginLeft: "0" }}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="table-responsive m-0" style={{ background: "transparent" }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <img src={profile} />
                                            Client
                                        </th>
                                        <th style={{ textAlign: "right" }}>
                                            <img src={calendartick} />
                                            Schedule
                                        </th>
                                        {/* <th style={{ textAlign: "center" }}>
                                            <img src={timer} />
                                            Next Meeting
                                        </th> */}
                                        <th style={{ textAlign: "center" }}>
                                            <img src={sort} />
                                            sort by
                                        </th>
                                    </tr>
                                </thead>
                           {loader?<div style={{position:"absolute",textAlign:"center",width:"90%"}}><Loader/></div>:     <tbody>

                                    {acceptRequest.length>0?acceptRequest.map((item, index) => {
                                        return <tr key={item._id}>
                                            <td style={{ textAlign: "left" }}>
                                                <img src={item?.image} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                                {`${item.fristName} ${item.lastName}`}
                                            </td>
                                            <td>
                                                {item?.livecoacing?.map((item) => {
                                                    return <><span className="schedule-onge">{moment(item.bookingOn).format("Do MMM")} - </span>{item?.startTime} -
                                                        {item?.endTime} <br /></>
                                                })}

                                                {/* <span className="schedule-onge">6 more meetings</span> */}
                                            </td>
                                            {/* <td style={{ textAlign: "center" }}>
                                                <span className="schedule-pink">14th feb- </span>16:00 -
                                                17:00
                                            </td> */}
                                            <td>
                                                <p style={{ justifyContent: "center" }}>
                                                    {/* <img src={message} className="noti-msg" /> */}
                                                    <img src={seen} className="noti-seen" />
                                                </p>
                                            </td>
                                        </tr>
                                    }):<p style={{textAlign:"center"}}>No Calls Found</p>}

                                </tbody>}
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}