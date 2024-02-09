import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../../Component/Layout/header";
import Sidebar from "../../../Component/Layout/sidebar";
import courseboximg from "../../../asstes1/images/courseboximg.png";
import MaskGroup from "../../../asstes1/images/MaskGroup.png";
import calender from "../../../asstes1/images/icon/calender.png";
import user2 from "../../../asstes2/images/user2.png";
import HttpClient from "../../../utils/HttpClient";
import { useState } from "react";
import CourseCard from "../../../Component/Courses/CourseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Stick from "../../../Component/FullPageLoader/Stick";
import CourseCardSkeleton from "../../../Component/skeleton/CourseCardSkeleton";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
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
export default function AllCourses() {
  const [AllCourses, setAllCourses] = useState([]);
  const [searchname, setsearchname] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllCourses();
    fetchAllCourses1();
  }, []);

  const fetchAllCourses1 = async () => {
    // setLoading(true)
    let result = await HttpClient.requestData("activecourse", "GET");
    console.log("fetchAllCoursesActive",result);
    // if (result && result.status) {
    //   setAllCourses(result.data);
    // }
    // setLoading(false)
  };

  const fetchAllCourses = async () => {
    setLoading(true);
    let result = await HttpClient.requestData('viewcourses', 'GET');
    console.log('viewcourses', result);
    if (result && result.status) {
      setAllCourses(result.data);
    }
    setLoading(false)
  };

  const SearchCourse = async val => {
    let result = await HttpClient.requestData('searchcourse', 'POST', {
      searchname: val,
    });
    // console.log("",result);
    if (result && result.status) {
      setAllCourses(result.data);
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="_engage">
              <div className="row">
                <div className="col-md-7 col-12">
                  <div className="__engage_info">
                    <h4>Launch your course in a few clicks</h4>
                    <p>You can edit and change real time </p>
                    <Link to={'/add_course'}>
                      <button
                        className="text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px dashed #FFFFFF',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          borderRadius: 12,
                          padding: '15px 30px',
                        }}
                      >
                        Upload Course
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-5 col-12 _engage_dspl_own">
                  <img className="__engage_img" src={MaskGroup} />
                </div>
              </div>
            </div>
            <div className="_active_courseswrap d-flex">
              {/* <h3><b style={{color:"black",marginRight:"10px"}}></b></h3> */}
              <select className="all_crs_act_own">
                <option>All Courses</option>
                <option>Active Courses</option>
                <option>Inactive Courses</option>
              </select>

              <div
                className="px-3  py-1 active-course"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E2EA;',
                  borderRadius: 12,
                  width: '100%',
                  maxWidth: '50%',
                  height: '50px',
                }}
              >
                <i className="fa fa-search mr-2 " aria-hidden="true" style={{ fontSize: '17px', color: '#64646B' }} />
                <input
                  className="border-0 search_course"
                  type="text"
                  name=""
                  placeholder="Search course"
                  style={{ fontSize: 12 }}
                  onChange={val => SearchCourse(val.target.value)}
                />
              </div>
            </div>
            <p className="seventotal">{AllCourses.length} in total</p>
            <div className="_courses_boxwrap">
              {loading && <CourseCardSkeleton />}
              <Slider {...settings} className="item-slider">
                {AllCourses.map((item, index) => {
                  return <CourseCard data={item} key={index} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
