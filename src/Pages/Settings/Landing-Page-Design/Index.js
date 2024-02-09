import React, { useEffect, useState } from "react";
import arrow_profileprev from "../../../asstes1/images/icon/arrow_profileprev.png";
import edit from "../../../asstes1/images/edit-2.png";
import educarelogo from "../../../asstes1/images/educare-logo.png";
import Polygon1 from "../../../asstes1/images/Polygon 1.png";
import Ellipse143 from "../../../asstes1/images/Ellipse 143.jpg";
import Ellipse144 from "../../../asstes1/images/Ellipse 144.jpg";
import Ellipse145 from "../../../asstes1/images/Ellipse 145.jpg";
import Ellipse146 from "../../../asstes1/images/Ellipse 146.jpg";
import Ellipse147 from "../../../asstes1/images/Ellipse 147.jpg";
import Ellipse148 from "../../../asstes1/images/Ellipse 148.jpg";
import Ellipse380 from "../../../asstes1/images/Ellipse 380.jpg";
import zoom1Traced from "../../../asstes1/images/zoom 1 (Traced).svg";
import facebook from "../../../asstes1/images/facebook.png";
import twitter from "../../../asstes1/images/twitter.png";
import googleplus from "../../../asstes1/images/google-plus.png";
import { useNavigate } from "react-router-dom";
import AllCourses from "../../../Component/LandingPage/AllCourse";
import TotalStudent from "../../../Component/LandingPage/TotalStudent";
import Footer from "../../LandingPage/Footer";
import HttpClient from "../../../utils/HttpClient";
import Landingheader from "../../../Component/LandingPage/LandingHeader";

export default function ProfileLandingPage() {
  const [teacherData, setTeacherData] = useState();
  const [allTeacherData, setAllTeacherData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    fetchTecharData();
  }, []);

  const fetchTecharData = async () => {
    let result = await HttpClient.requestData("get-profile", "GET");
    console.log(result);
    if (result && result.status) {
      setTeacherData(result.data);
      if (result.data) {
        let newResult = await HttpClient.requestData(
          `view-landing-page/${result?.data?.username}`
        );
        // console.log(newResult);
        setAllTeacherData(newResult.data[0]);
      }
    }
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            {/*------top part btn----*/}
            <section className="Your_Landing_Page clearfix">
              <div className="container pb-2" style={{ padding: "0" }}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <div className="Your_Landing_Page_head d-flex">
                      <div className="Your_Landing_Page_text">
                        <h2>Your Landing Page Look Like This</h2>
                      </div>
                      <div className="Your_Landing_Page_btn d-flex">
                        <div className="Edit__Info_btn mr-3">
                          <a
                            type="button"
                            onClick={() => {
                              Navigate("/edit_landing_page");
                            }}
                          >
                            <img src={edit} className="Edit__Info_icon" />
                            <span style={{color:"white"}}>Edit Page</span>
                          </a>
                        </div>
                        <div className="Go_to_landing_btn">
                          <a  type="button" href={`https://${teacherData?.username}.mylearnr.app/`}>
                            <span style={{color:"white"}}>Go to landing page</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*-------------*/}
              <main className="landing_page__total">
                <div className="container" style={{ padding: "0" }}>
                  <Landingheader
                  allTeacherData={allTeacherData}
                   />
                  <section className="Upgrade_speaking clearfix">
                    <div className="container">
                      <div className="landing_profile_flx_main">
                        <div className="landing_profile_flx_main1">
                          <h2>
                            {/* {allTeacherData?.landingPageTitle} */}
                            Upgrade your speaking skills that will make you one level up
                          </h2>
                          <div className="Upgrade_speak_all_btn d-flex">
                            <div className="Explore_Courses_btn">
                              <a style={{color:"white"}}>Explore Courses</a>
                            </div>
                            {/* <div className="Instructor_btn">
                              <a  className="Ins_play_btn">
                                <img src={Polygon1} />
                              </a>
                              <a  className="Ins_text_btn">
                                What Instructor’s Say
                              </a>
                            </div> */}
                          </div>
                          {/* <TotalStudent /> */}
                        </div>
                        <div className="landing_profile_flx_main2">
                          <div className="teacher__identity">
                            <div className="teach__iden_img" style={{height: '238px'}}>
                              <img
                                src={teacherData?.image}
                                alt="image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="teach__iden_name">
                              <h3>{teacherData?.name}</h3>
                              <p>{allTeacherData?.teacherSubTitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*-----slide section------*/}
                  <AllCourses coursesData={allTeacherData?.coursesData} />
                  {/*-----*/}
                  <section className="Why__Take clearfix px-md-5 mx-md-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                          <div className="why__take_head">
                            <h2>Why Take These Courses</h2>
                            <p>
                              {allTeacherData?.longDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Footer teacherData={teacherData} />
                </div>
              </main>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
