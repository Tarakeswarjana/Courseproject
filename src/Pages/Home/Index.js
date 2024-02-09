import React, { useEffect } from "react";
import Slider from "react-slick";
// import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homebg from "../../asstes1/imagesHome/home-bg.png";
import star from "../../asstes1/imagesHome/Vector-star.png";
import apple from "../../asstes1/imagesHome/apple-black-logo-1.png";
import play from "../../asstes1/imagesHome/google-play-1.png";
import a from "../../asstes1/imagesHome/home-ban-img.png";
import ia from "../../asstes1/imagesHome/dashboard-short-img-1.png";
import ib from "../../asstes1/imagesHome/realtime.png";
import ic from "../../asstes1/imagesHome/courses.png";
import id from "../../asstes1/imagesHome/dashboard-short-img-5.png";
import ie from "../../asstes1/imagesHome/dashboard-short-img-6.png";
import ig from "../../asstes1/imagesHome/dashboard-short-img-4.png";
import dash from "../../asstes1/imagesHome/Dashboard-1.png";
import arrow from "../../asstes1/imagesHome/Vector-arrow.png";
import text from "../../asstes1/imagesHome/student-friendly-short-img-1.png";
import text1 from "../../asstes1/imagesHome/student-friendly-short-img-2.png";
import text2 from "../../asstes1/imagesHome/student-friendly-short-img-3 (2).png";
import abc from "../../asstes1/imagesHome/student-friendly-img-1.png";
import bc from "../../asstes1/imagesHome/student-friendly-img-2.png";
import bd from "../../asstes1/imagesHome/student-friendly-img-3.png";
import bg from "../../asstes1/imagesHome/Group-70024 (1).png";
import bl from "../../asstes1/imagesHome/customize-schedule-top-img.png";
import bm from "../../asstes1/imagesHome/customize-schedule-short-img-1.png";
import bn from "../../asstes1/imagesHome/customize-schedule-short-img-2.png";
import bi from "../../asstes1/imagesHome/customize-schedule-short-img-3.png";
import bf from "../../asstes1/imagesHome/customize-schedule-img.png";
import man from "../../asstes1/imagesHome/last-testimonial-img.png";
import video from "../../asstes1/imagesHome/testimonial-video-play.png";
import Header from "../../Component/HomeLayout/Header";
import Footer from "../../Component/HomeLayout/Footer";
import Plans from "./Plans";
import HomeTop from "./HomeTop";
import DashboardAndCoachingCall from "./DashboardAndCoachingCall";
import LiveChat from "./LiveChat";
import FullControl from "./FullControl";
import CoustomizeYourCoachingCall from "./CoustomizeYourCoachingCall";
import { useState } from "react";
// import a from "../../asstes1/imagesHome"

export default function Home() {
  const [isSticky, setIsticky] = useState(false);

//   useEffect(()=>{
//    console.log("hh");
//    window.addEventListener('scroll', (event) => {
//     console.log("event",event);
// },true);
function handleScroll () {

  // setSticky(true);
  if(window.scrollY>200){
    setIsticky(true);
  }
  else{
    setIsticky(false);
  }
  
};

window.addEventListener('scroll', handleScroll,true);

// Remove the event listener when the component unmounts
// return () => {
//   window.removeEventListener('scroll', handleScroll,true);
// };
//   },[isSticky])


  // const loop = [1, 2, 3, 4, 5];
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

//  const 
 console.log("isSticky",isSticky);


  return (
    <div>
      <Header clasStick={isSticky}/>


      <HomeTop />


      <DashboardAndCoachingCall />

      <LiveChat />

      <FullControl />

      <CoustomizeYourCoachingCall />
      {/* <div className="container">
        <section className="customize-schedule-part clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="customize-schedule-box-wrap">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                      <div className="customize-schedule-content-box">
                        <div className="customize-schedule-top-img-box">
                          <img src={bl} />
                        </div>
                        <h2>Coustomize Your Live Coaching Call Schedule</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis tempor cursus tincidunt nulla ac dolor
                          aliquet.
                        </p>
                        <div className="student-friendly-content-box-wrap">
                          <div className="student-friendly-content-img-box">
                            <img
                              src={bm}
                              style={{
                                boxShadow:
                                  "0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)",
                              }}
                            />
                          </div>
                          <div className="student-friendly-content-content-box">
                            <h5>Q &amp; A Suppourt</h5>
                            <p style={{ textAlign: "left" }}>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> adipiscing elit. Duis tempor cursus{" "}
                            </p>
                          </div>
                        </div>
                        <div className="student-friendly-content-box-wrap">
                          <div className="student-friendly-content-img-box">
                            <img
                              src={bn}
                              style={{
                                boxShadow:
                                  "0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)",
                              }}
                            />
                          </div>
                          <div className="student-friendly-content-content-box">
                            <h5>Q &amp; A Suppourt</h5>
                            <p style={{ textAlign: "left" }}>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> adipiscing elit. Duis tempor cursus{" "}
                            </p>
                          </div>
                        </div>
                        <div className="student-friendly-content-box-wrap">
                          <div className="student-friendly-content-img-box">
                            <img
                              src={bi}
                              style={{
                                boxShadow:
                                  "0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)",
                              }}
                            />
                          </div>
                          <div className="student-friendly-content-content-box">
                            <h5>Q &amp; A Suppourt</h5>
                            <p style={{ textAlign: "left" }}>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> adipiscing elit. Duis tempor cursus{" "}
                            </p>
                          </div>
                        </div>
                        <div className="customize-schedule-btn-box">
                          <a  className="btn customize-schedule-btn">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                      <div className="customize-schedule-img-box">
                        <div className="customize-schedule-sunday-btn-box">
                          <a
                            
                            className="btn customize-schedule-sunday-btn"
                          >
                            Sunday
                          </a>
                        </div>
                        <div className="customize-schedule-monday-btn-box">
                          <a
                            
                            className="btn customize-schedule-monday-btn"
                          >
                            Monday
                          </a>
                        </div>
                        <div className="customize-schedule-time-btn-box">
                          <a
                            
                            className="btn customize-schedule-time-btn"
                          >
                            14:00 -15:00
                          </a>
                        </div>
                        <img src={bf} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}



      <Plans />
      {/* <div className="container">
        <section className="testimonial-vedio-part clearfix">
          <Slider {...settings}>
            {loop.map((item) => {
              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="testimonial-box" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                      <div className="testimonial-video-box">
                        <img src={man} className="img-fluid" />
                        <div className="testimonial-video-play-box">
                          <img src={video} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                      <div className="testimonial-content-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate
                        </p>
                        <h3>Ron Henry</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>
      </div> */}
      <Footer />
    </div>
  );
}
