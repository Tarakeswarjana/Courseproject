import React from "react";

import bl from "../../asstes1/imagesHome/customize-schedule-top-img.png";
import bm from "../../asstes1/imagesHome/customize-schedule-short-img-1.png";
import bn from "../../asstes1/imagesHome/customize-schedule-short-img-2.png";
import bi from "../../asstes1/imagesHome/customize-schedule-short-img-3.png";
import bf from "../../asstes1/imagesHome/customize-schedule-img.png";
import { Link } from "react-router-dom";

export default function CoustomizeYourCoachingCall() {
  return (
    <div className="container">
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
                      <h2>Customise & Schedule Live Coaching Calls</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor cursus tincidunt nulla ac
                        dolor aliquet.
                      </p>
                      <div className="student-friendly-content-box-wrap">
                        <div className="student-friendly-content-img-box">
                          <img
                            src={bm}
                            style={{
                              boxShadow: '0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)',
                            }}
                          />
                        </div>
                        <div className="student-friendly-content-content-box">
                          <h5>Q&A Support</h5>
                          {/* <h5>Q &amp; A Suppourt</h5> */}
                          <p style={{ textAlign: 'left' }}>
                            Lorem ipsum dolor sit amet, consectetur
                            <br /> adipiscing elit. Duis tempor cursus{' '}
                          </p>
                        </div>
                      </div>
                      <div className="student-friendly-content-box-wrap">
                        <div className="student-friendly-content-img-box">
                          <img
                            src={bn}
                            style={{
                              boxShadow: '0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)',
                            }}
                          />
                        </div>
                        <div className="student-friendly-content-content-box">
                          <h5>Q&A Support</h5>
                          <p style={{ textAlign: 'left' }}>
                            Lorem ipsum dolor sit amet, consectetur
                            <br /> adipiscing elit. Duis tempor cursus{' '}
                          </p>
                        </div>
                      </div>
                      <div className="student-friendly-content-box-wrap">
                        <div className="student-friendly-content-img-box">
                          <img
                            src={bi}
                            style={{
                              boxShadow: '0px 3.65133px 18.2566px 4.56416px rgb(255 218 234 / 43%)',
                            }}
                          />
                        </div>
                        <div className="student-friendly-content-content-box">
                          <h5>Q&A Support</h5>
                          <p style={{ textAlign: 'left' }}>
                            Lorem ipsum dolor sit amet, consectetur
                            <br /> adipiscing elit. Duis tempor cursus{' '}
                          </p>
                        </div>
                      </div>
                      <div className="customize-schedule-btn-box">
                        <Link to={'/register'} className="btn customize-schedule-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-12">
                    <div className="customize-schedule-img-box">
                      <div className="customize-schedule-sunday-btn-box">
                        <a className="btn customize-schedule-sunday-btn">Sunday</a>
                      </div>
                      <div className="customize-schedule-monday-btn-box">
                        <a className="btn customize-schedule-monday-btn">Monday</a>
                      </div>
                      <div className="customize-schedule-time-btn-box">
                        <a className="btn customize-schedule-time-btn">14:00 -15:00</a>
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
    </div>
  );
}
