import React, { useEffect, useState } from "react";

import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import profile from '../../asstes1/images/icon/profile.png'
import calendartick from '../../asstes1/images/icon/calendar-tick.png'
import timer from '../../asstes1/images/icon/timer.png'
import sort from '../../asstes1/images/icon/sort.png'
import profileimg from '../../asstes1/images/icon/profileimg.png'
import message from '../../asstes1/images/icon/message.png'
import seen from '../../asstes1/images/icon/seen.png'
import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import people from '../../asstes1/images/icon/people.png'
import country from '../../asstes1/images/icon/country.png'
import bessie from '../../asstes1/images/icon/bessie.png'
import studentuser from '../../asstes1/images/book-saved.png'
import emptywallet from '../../asstes1/images/empty-wallet.png'
import active_Calls from '../../asstes1/images/active_Calls.png'
import { async } from "@firebase/util";
import HttpClient from "../../utils/HttpClient";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import AnalyticsCard from "./AnalyticsCard";





export default function Analytics() {
    const [liveCallHistory, setLivecalhistory] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        fetchAnalytics()
    }, [])

    const fetchAnalytics = async () => {
        let result = await HttpClient.requestData("LiveCoachingCallHistory", "GET")
        if (result && result.status) {
            setLivecalhistory(result.data)
        }
    }

    const MessageSend = async (id) => {
        // console.log(id);
        let dataSend = {
            receiverId: id,
            senderType: "teacher",
            receiverType: "student",
            message: ".",
            lastMsgBy: "teacher"
        }
        console.log(dataSend);
        let result = await HttpClient.requestData("createChat", "POST", dataSend)
        console.log(result);
        if (result && result.status) {
            navigate("/chat", { state: { id: result.data._id } })
            //  let res =   await setDoc(doc(db, "messages", result.data[0]._id), {
            //         // message: "Hii",

            //       },{merge:true});

            //     console.log(res);
        }
    }
    return (
      <>
        <div className="container-fluid ">
          <div className="p-3">
            <div className="_enrollment">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-12">
                  <h1 className="analyticsTitle">Analytics</h1>

                  <AnalyticsCard />
                  {/*-------Table-------*/}
                  <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-wrap">
                        <div className="table-studenttext">
                          <p className="table-header">Live Coaching Call History</p>
                        </div>
                      </div>
                      <div className="table-wrap">
                        <select>
                          <option value="monthly">This Month</option>
                          {/* <option value="monthly">This Month</option>
                                                <option value="monthly">This Month</option> */}
                        </select>
                      </div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                      <table className="table table-hover table-analytics table_coach_own_brdr">
                        <thead>
                          <tr>
                            <th style={{ textAlign: 'left' }}>
                              <img src={profile} />
                              <span className="prtnm" style={{ fontSize: '15px' }}>
                                {' '}
                                Participant
                              </span>
                            </th>
                            <th style={{ textAlign: 'left' }}>
                              <img src={calendartick} />
                              <span className="prtnm" style={{ fontSize: '15px' }}>
                                {' '}
                                Date
                              </span>
                            </th>
                            <th style={{ textAlign: 'left' }}>
                              <img src={country} />
                              <span className="prtnm" style={{ fontSize: '15px' }}>
                                {' '}
                                Time slot
                              </span>
                            </th>
                            <th>
                              <img src={sort} />
                              <span className="prtnm" style={{ fontSize: '15px' }}>
                                {' '}
                                Earnings
                              </span>
                            </th>
                            <th style={{ textAlign: 'left' }}>
                              <img src={sort} />
                              <span className="prtnm" style={{ fontSize: '15px' }}>
                                {' '}
                                Sort by
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {liveCallHistory.map((item, index) => {
                            return (
                              <tr key={item._id}>
                                <td style={{ textAlign: 'left' }}>
                                  <img
                                    src={item.student?.image ?? ''}
                                    style={{ height: '50px', width: '50px', borderRadius: '50%' }}
                                  />
                                  {item.student?.name ?? ''}
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                  {moment(item.bookingOn).format('D MMM YYYY') ?? ''}
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                  {item.startTime}-{item.endTime}
                                </td>
                                <td style={{ textAlign: 'center' }}>{item.Earning ?? ''}$</td>
                                <td style={{ textAlign: 'left' }}>
                                  <p style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                    <img
                                      src={message}
                                      className="noti-msg"
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => MessageSend(item.student._id)}
                                    />
                                    {/* <img src={seen} className="noti-seen" /> */}
                                  </p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*---End Table-------*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}