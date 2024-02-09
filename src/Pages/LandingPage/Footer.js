import React, { useEffect, useState } from "react";
import Ellipse380 from "../../asstes1/images/Ellipse 380.jpg";
import zoom1Traced from "../../asstes1/images/zoom 1 (Traced).svg";
import facebook from "../../asstes1/images/facebook.png";
import twitter from "../../asstes1/images/twitter.png";
import googleplus from "../../asstes1/images/google-plus.png";
import { useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";


export default function Footer({ teacherData }) {

  return (
    <footer id="footer-section" className="Upg_spe_footer clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-12">
            <div className="footer___img">
              <img src={teacherData?.image} alt="image" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12">
            <div className="ftr_dspl_flx">
              <div className="footer___text_part">
                <h5>ABOUT ME</h5>
                <h2>{teacherData?.name}</h2>
                <h6>Speaker, Author, Writter</h6>
                <p>
                  {teacherData?.about}
                </p>
                <div className="footer_text_all_btn">
                  {/* <div className="Learn_More_btn mb-3 learn_more_own">
                  <a href="#" className="lrn" >
                    <img src={zoom1Traced} /> Learn More
                  </a>
                </div> */}
                  {/* <div className="Contact_me_btn mb-3 learn_more_own">
                  <a >Contact me</a>
                </div> */}
                  <div className='teacher_cntrl_btn'>
                    <a href="#" className="lrn" >
                      <img src={zoom1Traced} alt="/" />
                      <h4 className='rmvteacherbtn'>Learn More</h4>
                    </a>
                  </div>
                  <div className='teacher_cntrl_btn'>
                    <a href="#" className="lrn_me" >
                      <h4 className='rmvteacherbtn'>Contact me</h4>
                    </a>
                  </div>
                  <div className="socail_media__app  learn_more_own">
                    <a >
                      <img src={facebook} alt="facebook" />
                    </a>
                    <a >
                      <img src={twitter} alt="twitter" />
                    </a>
                    <a >
                      <img src={googleplus} alt="facebook" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
