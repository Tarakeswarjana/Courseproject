import React from "react";
import star from "../../asstes1/imagesHome/Vector-star.png";
import apple from "../../asstes1/imagesHome/apple-black-logo-1.png";
import play from "../../asstes1/imagesHome/google-play-1.png";
import a from "../../asstes1/imagesHome/home-ban-img.png";
import ia from "../../asstes1/imagesHome/dashboard-short-img-1.png";
import ib from "../../asstes1/imagesHome/realtimes.jpg";

import ic from "../../asstes1/imagesHome/courses.png";
import id from "../../asstes1/imagesHome/dashboard-short-img-5.png";
import ie from "../../asstes1/imagesHome/dashboard-short-img-6.png";
import ig from "../../asstes1/imagesHome/dashboard-short-img-4.png";
import dash from "../../asstes1/imagesHome/dashboard.jpg";
import arrow from "../../asstes1/imagesHome/Vector-arrow.png";
import { Link } from "react-router-dom";


export default function DashboardAndCoachingCall() {
  return (
    <div className="container">
      <section className="real-dashbord-part clearfix">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="real-dashbord-box">
                <div className="dashboard-short-wrap">
                  <div className="dashboard-short-box">
                    <img className="img-1" src={ia} />
                    <img className="img-2" src={ib} />
                    <img className="img-3" src={ic} />
                  </div>
                  <div className="dashboard-short-box">
                    <img className="img-4" src={id} />
                    <img className="img-5" src={ie} />
                    <img className="img-6" src={ig} />
                  </div>
                </div>
                <ul className="nav nav-pills real-dashbord mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Live Coaching Calls
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-contact"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Courses
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="real-dashboard-in">
                      <h2>
                        See How Are You Doing
                        <br /> in Real Time
                      </h2>
                      <img src={dash} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="real-dashboard-in">
                      <h2>
                        See How Are You Doing
                        <br /> in Real Time
                      </h2>
                      <img src={ib} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="real-dashboard-in">
                      <h2>
                        See How Are You Doing
                        <br /> in Real Time
                      </h2>
                      <img src={ic} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
          <div className="dashboard-get-btn-box">
            <Link to={'/register'} className="btn dashboard-get-btn">
              Get started
              <img src={arrow} style={{ paddingLeft: 10 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
