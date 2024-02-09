import React, { useEffect, useState } from "react";
import noti from "../../../../asstes2/images/noti.png";
import lcc from "../../../../asstes2/images/lcc.png";
import oe from "../../../../asstes2/images/oe.png";
import ghr from "../../../../asstes2/images/ghr.png";
import pch from "../../../../asstes2/images/pch.png";
import { async } from "@firebase/util";
import HttpClient from "../../../../utils/HttpClient";
import { useOutletContext } from "react-router-dom";
import moment from "moment";
export default function Notifications() {
  const { id } = useOutletContext();
  const [allNotifications, setAllNotification] = useState([]);

  useEffect(() => {
    fetchNotification();
  }, [id]);

  const fetchNotification = async () => {
    let response = await HttpClient.requestData(
      "particularCourseNotification/" + id,
      "GET"
    );
    // console.log("noti", response);
    if (response && response.status) {
      setAllNotification(response.data);
    }
  };
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-notifications"
        role="tabpanel"
        aria-labelledby="pills-notifications-tab"
      >
        <div className="mt-3 mb-3">
          <div className="notifications-item-wrapper">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="noti-title-wrapper">
                  <h3 className="noti-title">Notifications</h3>
                  <p className="mark-read-text">Mark as all read</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-12">
                <div className="border-wrapper border_wrapper_own">
                  <span />
                  <button>Today</button>
                </div>
                <div className="_notifications_box_course">
                  {allNotifications.map((item, index) => {
                    return (
                      <div>
                        <div className="media">
                          <img className="mr-30" src={noti} alt="image" style={{}} />
                          <div className="media-body">
                            <div className="notification-box-wrapper">
                              <h6 className="mt-0 text-dark font-weight-bold" style={{ fontSize: 18 }}>
                                {item.title}
                              </h6>
                              <span className="circle" />
                              <p
                                className=""
                                style={{
                                  color: '#92929D',
                                  fontSize: '14px line-height:19px',
                                }}
                              >
                                {/* 11 months ago */}
                                {moment(item.createdOn).startOf('hour').fromNow()}
                              </p>
                            </div>
                            <h6
                              className=""
                              style={{
                                fontSize: 15,
                                color: '#44444F',
                                fontWeight: 500,
                                lineHeight: '23px',
                              }}
                            >
                              {item.desc}.
                            </h6>
                          </div>
                        </div>
                        <div
                          className="border-btm mt-3 mb-3"
                          style={index == allNotifications.length - 1 ? { border: 'none' } : {}}
                        />
                      </div>
                    );
                  })}
                  {/* <div className="media">
                                        <img
                                            className="mr-30"
                                            src={lcc}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    Live Coaching Call
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                    lineHeight: "23px"
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Facilisis penatibus viverra eget ornare sit.
                                                Tincidunt sem felis, orci, nec. Tincidunt sed
                                                faucibus fusce tincidunt. Feugiat mattis eget
                                                massa purus. Aliquam volutpat elit potenti donec
                                                odio tincidunt sed. Ac consectetur pulvinar
                                                posuere rhoncus purus et. Purus pellentesque .
                                            </h6>
                                        </div>
                                    </div> */}
                </div>
                {/* <div className="mt-5 mb-5 border-wrapper">
                                    <span />
                                    <button>Yesterday</button>
                                </div>
                                <div className="_notifications_box_course">
                                    <div className="media">
                                        <img
                                            className="mr-30"
                                            src={oe}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    Online Event
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                    lineHeight: "23px"
                                                }}
                                            >
                                                Akash, I ave explained it in next lectures. you
                                                can watch linked list creation videos. in this
                                                lecture just focus on Display. if you continue
                                                lectures in same order it will be better.
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="border-btm mt-5 mb-5" />
                                    <div className="media">
                                        <img
                                            className="mr-30"
                                            src={ghr}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    Guy Hawkins replied to your comment
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                    lineHeight: "23px"
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Facilisis penatibus viverra eget ornare sit.
                                                Tincidunt sem felis, orci, nec. Tincidunt sed
                                                faucibus fusce tincidunt. Feugiat mattis eget
                                                massa purus. Aliquam volutpat elit potenti donec
                                                odio tincidunt sed. Ac consectetur pulvinar
                                                posuere rhoncus purus et. Purus pellentesque.
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="border-btm mt-5 mb-5" />
                                    <div className="media">
                                        <img
                                            className="mr-30"
                                            src={pch}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    Python course have a new quiz for you
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                    lineHeight: "23px"
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Facilisis penatibus viverra eget ornare sit.
                                                Tincidunt sem felis, orci, nec. Tincidunt sed
                                                faucibus fusce tincidunt. Feugiat mattis eget
                                                massa purus. Aliquam volutpat elit potenti donec
                                                odio tincidunt sed. Ac consectetur pulvinar
                                                posuere rhoncus purus et. Purus pellentesque.
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 mb-5 border-wrapper">
                                    <span />
                                    <button>2 days ago</button>
                                </div>
                                <div className="_notifications_box_course">
                                    <div className="media">
                                        <img
                                            className="mr-30"
                                            src={noti}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    New Course AI Course Just launched
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                    lineHeight: "23px"
                                                }}
                                            >
                                                Akash, I ave explained it in next lectures. you
                                                can watch linked list creation videos. in this
                                                lecture just focus on Display. if you continue
                                                lectures in same order it will be better.
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="border-btm mt-5 mb-5" />
                                    <div className="media">
                                        <img
                                            className="mr-30"
                                            src={lcc}
                                            alt="image"
                                            style={{}}
                                        />
                                        <div className="media-body">
                                            <div className="notification-box-wrapper">
                                                <h6
                                                    className="mt-0 text-dark font-weight-bold"
                                                    style={{ fontSize: 18 }}
                                                >
                                                    Live Coaching Call
                                                </h6>
                                                <span className="circle" />
                                                <p
                                                    className=""
                                                    style={{
                                                        color: "#92929D",
                                                        fontSize: "14px line-height:19px"
                                                    }}
                                                >
                                                    11 months ago
                                                </p>
                                            </div>
                                            <h6
                                                className=""
                                                style={{
                                                    fontSize: 15,
                                                    color: "#44444F",
                                                    fontWeight: 500,
                                                     lineHeight: "23px"
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Facilisis penatibus viverra eget ornare sit.
                                                Tincidunt sem felis, orci, nec. Tincidunt sed
                                                faucibus fusce tincidunt. Feugiat mattis eget
                                                massa purus. Aliquam volutpat elit potenti donec
                                                odio tincidunt sed. Ac consectetur pulvinar
                                                posuere rhoncus purus et. Purus pellentesque .
                                            </h6>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
