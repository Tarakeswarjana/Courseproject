import React, { useEffect, useState, useMemo } from "react";
import weekly_banner from "../../asstes1/images/weekly_banner.png";
import calender_weekly from "../../asstes1/images/icon/calender_weekly.png";
import time_weekly from "../../asstes1/images/icon/time_weekly.png";
import emergency from "../../asstes1/images/emergency.png";
import MettingDetail from "./MettingDetail";
import AddMetting from "./AddMetting";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
import { Link } from "react-router-dom";
import g10 from "../../asstes1/images/g10.png";
import crd_own from "../../asstes1/images/crd_own.png"
import calender_own from "../../asstes1/images/calender_own.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeeklycardSkeleton from "../../Component/skeleton/WeeklycardSkeleton";
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const settings_own = {
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function WeeklyChoachingCall() {
  const [meetings, setMeetings] = useState([]);
  const [meeting_id, setMeetingId] = useState("");
  const [Courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchAllMeeting();
    fetchCourse();
  }, []);
  const fetchAllMeeting = async () => {
    setLoading(true);
    let result = await HttpClient.requestData("viewweeklymeeting", "GET");
    console.log("fetch", result);
    if (result && result.status) {
      setMeetings(result.data);
    }
    setLoading(false);
  };
  const fetchCourse = async () => {
    let result = await HttpClient.requestData("activecourse", "GET");
    console.log(result);
    if (result && result.status) {
      setCourses(result.data);
    }
  };

  const fileterWeeklyCoaching = useMemo(() => {
    return findCourse(meetings);
  }, [sort, meetings]);
  function findCourse(activeCourses) {
    if (sort == "monthly") {
      let todayMonth = moment().month();
      // setActiveCourses()
      // console.log(todayMonth);
      // console.log(activeCourses);
      let filterData = activeCourses.filter(
        (item) => moment(item.created_on).month() == todayMonth
      );
      // console.log(filterData);
      return filterData;
    }
    if (sort == "week") {
      let todayWeek = moment().week();
      // setActiveCourses()
      let filterData = activeCourses.filter(
        (item) => moment(item.created_on).week() == todayWeek
      );
      // setActiveCourses(filterData)
      // console.log("filterData",filterData);
      return filterData;
    } else {
      return activeCourses;
    }
  }
  // console.log(sort);
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="day-list mb_own_10">
                  <h1 className="title-schedule title_schedule_own_txt">Your Schedule for weekly coaching call</h1>

                  <div className="_masterclass_box_course master_class_own_edt">
                    {/* <button
                      className="btn  btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                    >
                      <i className="fa fa-edit" />
                      Edit
                    </button> */}
                  </div>
                </div>
                {/* <div className="_quizwrapp">
                  <div className="row">
                    
                    <div className="col-md-6 col-12">
                      <div className="__quiz_info">
                        <h4 className="text-white font-weight-bold mb-4">
                          Create Weekly Live Coaching Call
                        </h4>
                        <button
                          className="text-white add_quiz_btn"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "1px dashed #FFFFFF",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            borderRadius: 12,
                            padding: "15px 30px",
                          }}
                          data-toggle="modal"
                          data-target="#exampleModal2"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 position-relative text-center">
                      <img className="__weekly_live_img" src={weekly_banner} />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="_engage">
                <div className="col-md-12 col-12 row">
                  <div className="col-md-7 col-12">
                    <div className="__engage_info">
                      <h4>Create weekly Coaching Call</h4>
                      <Link to={''}>
                        <button
                          className="text-white btn_started_own"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px dashed #FFFFFF',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: 12,
                            padding: '10px 38px',
                            marginTop: '30px',
                          }}
                          data-toggle="modal"
                          data-target="#exampleModal2"
                        >
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 col-12 _engage_dspl_own">
                    <img className="__engage_img" src={g10} />
                  </div>
                </div>
              </div>
            </div>

            <div className="weekly__CUstom">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-12">
                  <div className="skill-wrap_New">
                    <div className="skill-txt">
                      <p className="upcoming__TEXts mb-3">Weekly Live Coaching Call</p>
                      {/* <p className="joinn_Liver">
                        Join live call to talk with instructor and guests
                        directly and enrich your knowleadge.
                      </p> */}
                      <div className="upcoming_txt">
                        <h4>Upcoming Weekly Live Coaching Call</h4>
                        <p>Join live call to talk with students directly</p>
                      </div>
                    </div>

                    <div className="skill-edit">
                      {/* <div className="dropdown custom_Dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sort by: <span className="date__TExt">Date</span>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div> */}
                      <select value={sort} onChange={val => setSort(val.target.value)}>
                        <option value="all">All time</option>
                        <option value="monthly">This Month</option>
                        <option value="week">This Week</option>
                        {/* <option value="year">This Year</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex align-items-center justify-content-end">
                                <i
                                    className="fa fa-chevron-left arroWs left__Icons"
                                    aria-hidden="true"
                                />
                                <i
                                    className="fa fa-chevron-right arroWs right__Icons"
                                    aria-hidden="true"
                                />
                            </div> */}

              {fileterWeeklyCoaching.length > 0 ? (
                <div className="_courses_boxwrap">
                  <Slider {...settings}>
                    {fileterWeeklyCoaching.map(item => {
                      return (
                        <div className="row">
                          <div className="col-lg-12" key={item._id}>
                            <div className="card cUstom_Card mt-3">
                              <div className="card-body">
                                <div
                                  className="d-flex flex-wrap align-items-center justify-content-center green_BackWeekly"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  onClick={() => setMeetingId(item._id)}
                                  style={{ flexDirection: 'column' }}
                                >
                                  <div className="d-flex align-items-center justify-content-start">
                                    <img src={calender_weekly} alt="" className="img-fluid mr-2" />
                                    <span className="date__Month">{moment(item.date).format('Do MMMM')}</span>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-start">
                                    <img src={time_weekly} alt="" className="img-fluid mr-2" />
                                    <span className="date__Month">
                                      {item.startTime} ({item.timeZone})
                                    </span>
                                  </div>
                                </div>
                                <div className="course__FOrm mt-4">
                                  <p className="course__FOrm_Weekly">From Course</p>
                                  <div className="media">
                                    <div className="media__Image mr-3">
                                      <img src={item.courseDatails?.thumb_image} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-body">
                                      <p className="para__Course">{item.courseDatails?.courseName}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              ) : (
                <div className="row" style={{ marginLeft: '2px' }}>
                  No meeting found
                </div>
              )}

              <div className="upcomng_live_coach_cell">
                <div className="upcoming_txt upcoming_txt_own">
                  <h4>All Weekly Live Cooching Call</h4>

                  <p>Join live call to talk with student directly</p>
                </div>
                <div className="_courses_boxwrap">
                  <Slider {...settings_own}>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_courses_boxwrap_slider_crd">
                      <div className="_courses_crd">
                        <div className="_course_crd_dt_tm">
                          <div className="_course_crd_dspl">
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">13th December</p>
                            </div>
                            <div className="course_dt_tm">
                              <img src={calender_own} alt="" />
                              <p className="calender_date">22:00 (BST)</p>
                            </div>
                          </div>
                        </div>
                        <div className="_course_crd_frm_crse">
                          <h4 className="course_txt_frm">From Course</h4>
                          <div className="_course_crd_frm_crse_pic_txt">
                            <div className="_course_crd_frm_crse_pic">
                              <img src={crd_own} alt="/" />
                            </div>
                            <p className="_course_crd_frm_crse_txt">
                              Product Design in Blender : 3D modelling, rendering and sculpting
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="row">{loading && [1, 2].map((item, index) => <WeeklycardSkeleton key={index} />)}</div>
            </div>
          </div>
        </div>
      </div>
      <MettingDetail Courses={Courses} meeting_id={meeting_id} fetchAllMeeting={fetchAllMeeting} />

      <AddMetting Courses={Courses} fetchAllMeeting={fetchAllMeeting} />
    </>
  );
}
