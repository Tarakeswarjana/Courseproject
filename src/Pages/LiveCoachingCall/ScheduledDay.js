import React, { useEffect, useState } from "react";
import DayCard from "../../Component/Schedule/DayCard";
import HttpClient from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import g10 from "../../asstes1/images/g10.png";
import crd_own from "../../asstes1/images/crd_own.png"
import calender_own from "../../asstes1/images/calender_own.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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


export default function ScheduleDay() {
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    fetchSchedule()
  }, [])
  const fetchSchedule = async () => {
    let result = await HttpClient.requestData("viewschedule", "GET")
    if (result && result.status) {
      setSchedule(result.data)
    }
  }

  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="day-list mb_own_10">
                  <h1 className="title-schedule title_schedule_own_txt">
                    {' '}
                    Create Your Schedule for live coaching call
                  </h1>

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
              </div>
              {/* <div className="day-list">
                  <DayCard color="#FFB59B" day="Sunday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="sunday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#44C979" day="Monday"  scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="monday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#0F4F43" day="Tuesday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="tuesday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#7573E2" day="Wednesday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="wednesday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#EC6ED0" day="Thursday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="thursday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#B6CB34" day="Friday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="friday")} fetchSchedule={fetchSchedule} />
                  <DayCard color="#896AE1" day="Saturday" scheduleData={schedule.filter(item=>item.weeklyDay.toLowerCase()=="saturday")}  fetchSchedule={fetchSchedule} />
                </div> */}
              <div className="_engage">
                <div className="col-md-12 col-12 row">
                  <div className="col-md-7 col-12">
                    <div className="__engage_info">
                      <h4>Create Live Coaching Call</h4>
                      <Link to={'/Daylist'}>
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
            <div className="upcomng_live_coach_cell">
              <div className="upcoming_txt upcoming_txt_own">
                <h4>Upcoming Weekly Live Coaching Call</h4>

                <p>Join live call to talk with students directly</p>
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
          </div>
        </div>
      </div>
    </>
  );
}
