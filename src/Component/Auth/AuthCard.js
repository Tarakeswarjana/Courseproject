import React, { useRef } from "react";
import sideimg from "../../asstes1/images/Group 70294.png";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import video from "../../asstes2/images/video/Intro-Short-Video-Edinboro-University.mp4";
// import crtnewlogo from "../../asstes2/images/crtnewlogo.png";
// import vdoply from "../../asstes2/images/vdoply.png";
import Own from "../../Component/Own";





function AuthCard({ children }) {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };





  // const playHandler = () => {
  //   setVdoplay(prev => !prev)
  // }
  // const getVdo = () => {
  //   let video = document.getElementById("ply");
  //   if (video.paused) {
  //     video.play();
  //     //DO SOMETING...
  //   } else {
  //     video.pause();
  //   }

  // };
  return (
    <div id="wrapper">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
      />
      <div
        id="content-wrapper"
        className="d-flex flex-column"
      // style={{ background: "#D9D9D9" }}
      >
        <div id="content">
          <div
            className="container"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <div className="_enrollment" style={{ marginLeft: 0, marginTop: 0, height: "100vh" }}>
              <div className="wrapper_own_main" >
                <div className="wrapper_own_main_wdth1">
                  {/* <div className="bg"> */}
                  <Slider {...settings}>
                    {/* <div className="video_area_main">
                   
                      <div className='video'>
                        <video muted style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          ref={videoRef}
                          id="educareVideo"
                        // autoPlay
                        >

                          <source
                            src={video}
                            type="video/mp4"
                          />
                        </video>
                        <div className="vdo_logo">
                          <img src={crtnewlogo} alt="" />
                        </div>
                        <div className="vdo_play" onClick={handlePlay}>
                          <img src={vdoply} alt="" />
                        </div>

                        <div className="vdo_course_main">
                          <p className="vdo_course_para1">
                            “Create your own courses and training programs”
                          </p>
                          <p className="vdo_course_para2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                        </div>
                      </div>

                    </div> */}


                   

                    {/* <div className="video_area_main">
                    
                      <div className='video'>
                        <video poster muted style={{ width: "100%", height: "100%", objectFit: "cover" }} id="ply" >
                          <source
                            src={video}
                            type="video/mp4"
                          />
                        </video>
                        <div className="vdo_logo">
                          <img src={crtnewlogo} alt="" />
                        </div>
                        <div className="vdo_play">
                          <img src={vdoply} alt="" />
                        </div>
                        <div className="vdo_course_main">
                          <p className="vdo_course_para1">
                            “Create your own courses and training programs”
                          </p>
                          <p className="vdo_course_para2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                        </div>
                      </div>

                    </div> */}


                    <Own trainingtag="Create your own courses and training programs" />
                    <Own trainingtag="Create your own courses and training programs" />
                    <Own trainingtag="Create your own courses and training programs" />
                    <Own trainingtag="Create your own courses and training programs" />
                    <Own trainingtag="Create your own courses and training programs" />
                    
               


                  </Slider>

                  {/* <img src={sideimg} className="img-fluid" alt="Image" /> */}

                  {/* <div className="video_area">
                      <iframe style={{ width: "100%", height: "100%", }} src="https://www.youtube.com/embed/9_WBQISVHnw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div> */}
                  {/* <div className="content_list">
                      <ul>
                        <li>Create your own courses and training programs</li>
                        <li>1-1 Coaching Call</li>
                        <li>Weekly Live Coaching Call</li>
                        <li>WEB & APP integrated real time discussions</li>
                        <li>Add video & guides on the fly</li>
                        <li>Easy Schedule Management</li>
                        <li>Analytics</li>
                        <li>Easy payment</li>
                        <li>Allocated different Coaches for a greater personalised Experience</li>
                      </ul>
                    </div> */}

                  {/* <div className="numberlist">
                      <ol>
                        <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            Create your own courses and training programs
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            1-1 Coaching Call
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            Weekly Live Coaching Call
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            WEB & APP integrated real time discussions
                          </a>
                        </li>
                      <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            Add video & guides on the fly
                          </a>
                        </li>
                         <li className="">
                          <a
                            href="#"
                            target=""
                          >
                            Easy Schedule Management
                          </a>
                        </li>
                      </ol>
                    </div> */}

                  {/* <div className="numberlist_new">

                      <div className="left_cnt_box">
                        <p>A</p>
                        <div className="tag-left" contenteditable>
                          <a href="#">Create your own courses and training programs</a>
                        </div>
                      </div>

                      <div className="right_cnt_box">
                        <p>B</p>
                        <div className="tag-right" contenteditable>
                          <a href="#">1-1 Coaching Call</a>
                        </div>
                      </div>

                      <div className="left_cnt_box">
                        <p>C</p>
                        <div className="tag-left" contenteditable>
                          <a href="#">Weekly Live Coaching Call</a>
                        </div>
                      </div>

                      <div className="right_cnt_box">
                        <p>D</p>
                        <div className="tag-right" contenteditable>
                          <a href="#">WEB & APP integrated real time discussions</a>
                        </div>
                      </div>

                      <div className="left_cnt_box">
                        <p>C</p>
                        <div className="tag-left" contenteditable>
                          <a href="#">Add video & guides on the fly</a>
                        </div>
                      </div>

                      <div className="right_cnt_box">
                        <p>D</p>
                        <div className="tag-right" contenteditable>
                          <a href="#">Easy Schedule Management</a>
                        </div>
                      </div>

                    </div> */}


                  {/* </div> */}
                </div>
                {/* <div className="wrapper_own_main_wdth1">
                  <Slider {...settings}>
                    <Basic_own basictrainingtag="1 - 1 coaching call" />
                    <Basic_own basictrainingtag="1 - 1 coaching call" />
                    <Basic_own basictrainingtag="1 - 1 coaching call" />
                    <Basic_own basictrainingtag="1 - 1 coaching call" />
                    <Basic_own basictrainingtag="1 - 1 coaching call" />
                  </Slider>
                </div> */}


                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
