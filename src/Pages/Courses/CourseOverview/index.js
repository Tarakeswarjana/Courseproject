import React, { useEffect, useState } from "react";
import studentuser from "../../../asstes1/images/icon/studentuser.png";
import emptyWallet from "../../../asstes1/images/icon/empty-wallet.png";
import teacher from "../../../asstes1/images/icon/teacher.png";
import people from "../../../asstes1/images/icon/people.png";
import profile from "../../../asstes1/images/icon/profile.png";
import sort from "../../../asstes1/images/icon/sort.png";
import calendartick from "../../../asstes1/images/icon/calendar-tick.png";
import country from "../../../asstes1/images/icon/country.png";
import CourseInfo from "./CourseInfo/CourseInfo";
import AllQuiz from "./Quiz/AllQuiz";
import QandA from "./Q&A/Q&A";
import Announcement from "./Announcement/Announcement";
import Notifications from "./Notifications/Notifications";
import profileimg from "../../../asstes1/images/icon/profileimg.png";
import message from "../../../asstes1/images/icon/message.png";
import seen from "../../../asstes1/images/icon/seen.png";
import darlene from "../../../asstes1/images/icon/darlene.png";
import kristin from "../../../asstes1/images/icon/kristin.png";
import janecooper from "../../../asstes1/images/icon/janecooper.png";
import leslie from "../../../asstes1/images/icon/leslie.png";
import diannerussel from "../../../asstes1/images/icon/diannerussel.png";
import bessie from "../../../asstes1/images/icon/bessie.png";
import book_course from "../../../asstes2/images/book_course.png";
import courseinfo_course from "../../../asstes2/images/courseinfo_course.png";
import quiz_course from "../../../asstes2/images/quiz_course.png";
import qanda_course from "../../../asstes2/images/qanda_course.png";
import Announcement_course from "../../../asstes2/images/announcement_course.png";
import notification_course from "../../../asstes2/images/notification-course.png"
import { Outlet, useParams, useNavigate } from "react-router-dom";
import HttpClient from "../../../utils/HttpClient";
import { Link } from "react-router-dom";

export default function CourseOverview() {
  const [id, setID] = useState("")
  const [courseData, setCourseData] = useState()
  const navigate = useNavigate()
  const { slug } = useParams()
  // const courseName="cdsac"
  // console.log("slug",slug);
  // const id="63b54a7c51466950123c2448"
  const [currentSection, setCurrentSection] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentSection(window.location.href)
    fetchCourseId()
  }, []);

  const fetchCourseId = async () => {
    let result = await HttpClient.requestData(`fetchSlugToId/${slug}`, "GET")
    // console.log("result",result);
    if (result && result.status) {
      setID(result.data?._id)
      let courseResult = await HttpClient.requestData(`viewParticularCourses/${result.data?._id}`, "GET")
      // console.log(courseResult.data[0]);
      if (courseResult && courseResult.status) {
        setCourseData(courseResult.data[0])
      }
    }
  }
  // console.log("courseData",courseData);
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <h3
              className="text-dark font-weight-bold pb-3"
              onClick={() => {
                navigate(-1);
              }}
              style={{ cursor: 'pointer' }}
            >
              <i className="fa fa-angle-left mr-3 mr-lg-4 mr-md-3 mr-sm-3" aria-hidden="true" />
              {courseData?.courseName}
            </h3>
            <div className="_overview_nav">
              <ul className="nav nav-pills " id="pills-tab" role="tablist" style={{ justifyContent: 'space-between' }}>
                <li className="nav-item">
                  <Link
                    to="overview"
                    // className={currentSection.includes("overview")?"nav-link":""}
                    className="nav-link active"
                    id="pills-tab"
                    data-toggle="pill"
                    href="#pills"
                    role="tab"
                    aria-controls="pills"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={book_course} alt="/" />
                    </div>
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="course_info"
                    className={currentSection.includes('course_info') ? 'nav-link active' : 'nav-link'}
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={courseinfo_course} alt="/" />
                    </div>
                    Course info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="quiz"
                    className={currentSection.includes('quiz') ? 'nav-link active' : 'nav-link'}
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={quiz_course} alt="/" />
                    </div>
                    Quiz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="Q&A"
                    className={currentSection.includes('Q&A') ? 'nav-link active' : 'nav-link'}
                    id="pills-qna-tab"
                    data-toggle="pill"
                    href="#pills-qna"
                    role="tab"
                    aria-controls="pills-qna"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={qanda_course} alt="/" />
                    </div>
                    Q&A
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="annoucement"
                    className={currentSection.includes('annoucement') ? 'nav-link active' : 'nav-link'}
                    id="pills-announcements-tab"
                    data-toggle="pill"
                    href="#pills-announcements"
                    role="tab"
                    aria-controls="pills-announcements"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={Announcement_course} alt="/" />
                    </div>
                    Announcement
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="notification"
                    className={currentSection.includes('notification') ? 'nav-link active' : 'nav-link'}
                    id="pills-notifications-tab"
                    data-toggle="pill"
                    href="#pills-notifications"
                    role="tab"
                    aria-controls="pills-notifications"
                    aria-selected="false"
                  >
                    <div className="courseimg">
                      <img src={notification_course} alt="/" />
                    </div>
                    Notification
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <Outlet context={{ id }} />
              {/* <CourseInfo />
                                   
                                    <AllQuiz/>
                                 
                                    <QandA/>
                                  
                                    <Announcement/>
                                  
                                    <Notifications/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
