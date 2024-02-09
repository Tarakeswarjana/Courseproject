import React from "react";


import text from "../../asstes1/imagesHome/student-friendly-short-img-1.png";
import text1 from "../../asstes1/imagesHome/student-friendly-short-img-2.png";
import text2 from "../../asstes1/imagesHome/student-friendly-short-img-3 (2).png";
import abc from "../../asstes1/imagesHome/student-friendly-img-1.png";
import bc from "../../asstes1/imagesHome/student-friendly-img-2.png";
import bd from "../../asstes1/imagesHome/student-friendly-img-3.png";
import { Link } from "react-router-dom";



export default function LiveChat () {
    return (
      <div className="container">
        <section className="student-friendly-part clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="student-friendly-wrap">
                  <h2>An Interactive Learner Friendly Platform</h2>
                  <p>Chat one to one or in groups and much more </p>
                  <div className="student-friendly-box">
                    <ul className="nav nav-pills real-dashbord mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-chat-tab"
                          data-toggle="pill"
                          href="#pills-chat"
                          role="tab"
                          aria-controls="pills-chat"
                          aria-selected="true"
                        >
                          Live Chat
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-quiz-tab"
                          data-toggle="pill"
                          href="#pills-quiz"
                          role="tab"
                          aria-controls="pills-quiz"
                          aria-selected="false"
                        >
                          Intuitive Quizes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-support-tab"
                          data-toggle="pill"
                          href="#pills-support"
                          role="tab"
                          aria-controls="pills-support"
                          aria-selected="false"
                        >
                          Q&A Support
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-chat"
                        role="tabpanel"
                        aria-labelledby="pills-chat-tab"
                      >
                        <div className="row">
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Live Chat</h5>
                                <p style={{ textAlign: 'left' }}>Chat one to one or in groups</p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text1} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Intuitive Quizes</h5>
                                <p style={{ textAlign: 'left' }}>Engage and gamify</p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text2} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Q&A Support</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Multimedia enriched content delivery
                                  {/* <br /> */}
                                  {/* Enriched content delivery{' '} */}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-btn-box">
                              <Link to={'/register'} className="btn student-friendly-btn">
                                Get Started
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="student-friendly-img-box">
                              <img src={abc} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-quiz" role="tabpanel" aria-labelledby="pills-quiz-tab">
                        <div className="row">
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Live Chat</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text2} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Intuitive Quizes</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text2} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Q&A Support</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-btn-box">
                              <a className="btn student-friendly-btn">Get Started</a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="student-friendly-img-box">
                              <img src={bc} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-support"
                        role="tabpanel"
                        aria-labelledby="pills-support-tab"
                      >
                        <div className="row">
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Live Chat</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text1} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Intuitive Quizes</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-content-box-wrap">
                              <div className="student-friendly-content-img-box">
                                <img src={text2} />
                              </div>
                              <div className="student-friendly-content-content-box">
                                <h5>Q&A Support</h5>
                                <p style={{ textAlign: 'left' }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  <br /> adipiscing elit. Duis tempor cursus{' '}
                                </p>
                              </div>
                            </div>
                            <div className="student-friendly-btn-box">
                              <a className="btn student-friendly-btn">Get Started</a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-12 col-12">
                            <div className="student-friendly-img-box">
                              <img src={bd} />
                            </div>
                          </div>
                        </div>
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