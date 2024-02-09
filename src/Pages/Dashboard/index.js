import React, { useEffect, useState } from "react";
import gifImage from "../../asstes1/handshake.gif";
import gifImage2 from "../../asstes1/WhatsApp_Image_2023-01-11_at_15.38.49-removebg-preview.png"
import banner from "../../asstes1/New Project (3).png"
import darlene from "../../asstes1/images/icon/darlene.png";
import kristin from "../../asstes1/images/icon/kristin.png";
import janecooper from "../../asstes1/images/icon/janecooper.png";
import leslie from "../../asstes1/images/icon/leslie.png";
import profile from "../../asstes1/images/icon/profile.png";
import calendartick from "../../asstes1/images/icon/calendar-tick.png";
import timer from "../../asstes1/images/icon/timer.png";
import sort from "../../asstes1/images/icon/sort.png";
import profileimg from "../../asstes1/images/icon/profileimg.png";
import message from "../../asstes1/images/icon/message.png";
import seen from "../../asstes1/images/icon/seen.png";
import diannerussel from "../../asstes1/images/icon/diannerussel.png";
import people from "../../asstes1/images/icon/people.png";
import country from "../../asstes1/images/icon/country.png";
import bessie from "../../asstes1/images/icon/bessie.png";
import { Link } from "react-router-dom";
import leftimage from "../../asstes1/right.580566c313338413232b.gif";
import TotalEngagement from "./TotalEngagemant";
import ActiveCourses from "./ActiveCourses";
import Notifications from "./Notifications";
import IndividualLiveCoachingCall from "./IndividualLiveCoachingCall";
import StudentEngagement from "./StudentEngagemant";
import NewRequests from "../Request/NewRequest";
import EarningsChat from "./EarningsChat";
import { useLocation } from "react-router-dom";
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import QuizTaken from "./QuizTaken";

export default function Dashboard() {
  const [wlcMessage, setWlcMessage] = useState(true);
  // const { width, height } = useWindowSize()
  let location = useLocation();
  console.log(location);
  const { userData } = useSelector((state) => state.User);
  console.log('userData',userData);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location?.state?.prvPath === "upload_certification") {
      setWlcMessage(true);
    }else{
      setWlcMessage(false);
    }
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="dashbrd_style_lft">
                  <h1 className="dashboardTitle">Dashboard</h1>
                  <div style={{ paddingBottom: '5px' }} className="dash_clck_stl">
                    <p className="dashboard_txt">Let’s help you to set up your first course - </p>
                    <a href="/add_course"> Click Here</a>
                  </div>
                </div>

                <TotalEngagement />

                <div className="course-notifications">
                  <ActiveCourses />
                  <Notifications />
                </div>
                {/*---Quiz Taken---------*/}

                <QuizTaken />
                {/*---Live Coaching Event Table---------*/}
                <IndividualLiveCoachingCall />
                {/* <NewRequests/> */}
                {/*------Live Coaching Call Event End Table------*/}

                {/*--Student Engagement Table--------*/}
                <StudentEngagement />
                {/*---Student Eng. Tab End------------*/}

                {/* Earnings From Coaching Call */}

                <EarningsChat />
                {/* Earnings From Coaching Call */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {wlcMessage &&
       (
          <div
            className="dashboard-modal"
            style={{
              backgroundImage: `url('${banner}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Confetti
              drawShape={ctx => {
                ctx.beginPath();
                for (let i = 0; i < 22; i++) {
                  const angle = 0.35 * i;
                  const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                  const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                  ctx.lineTo(x, y);
                }
                ctx.stroke();
                ctx.closePath();
              }}
            />
            <div style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right' }}>
              <div className="congratulate-modal-wrapper text-center">
                <h2>Welcome, {userData?.name} to your dashboard</h2>
                <p>
                  {/* Hii! <strong> {userData?.name} </strong> */}
                  <span
                    onClick={() => {
                      setWlcMessage(false);
                    }}
                  >
                    {' '}
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                </p>
                <div className="welImg">
                  <img src={gifImage2} className="img-fluid" />
                </div>
                <p>Teacher Dashboard</p>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
