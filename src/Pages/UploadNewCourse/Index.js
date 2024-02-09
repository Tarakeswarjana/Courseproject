import React, { useEffect, useState } from "react";
import UploadCourseCurriculum from "./Curriculum/Curriculum";
import AddQuiz from "./Quiz/index";
import CoursseNameAndDescription from "./CourseDetails/CoursseNameAndDescription";
import StudentsWillLearn from "./CourseDetails/StudentsWillLearn";
import UploadFiles from "./CourseDetails/UploadFiles";
import FAQ from "./CourseDetails/FAQ";
import Books from "./CourseDetails/Books";
import { toast, ToastContainer, Zoom } from "react-toastify";
import HttpClient from "../../utils/HttpClient";
import { TiTickOutline } from "react-icons/ti";
import tickIcon from "../../asstes2/images/icon/tickicon.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function UploadNewCourse() {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [preference , setPreference] = useState("");
  const [slug, setSlug] = useState("")
  const [courseDesc, setCourseDesc] = useState("");
  const [duration, setDuration] = useState("")
  const [learnAbout, setLearnAbout] = useState([]);
  const [thumb_image, setThumb_image] = useState("");
  const [intro_video, setIntroVideo] = useState("");
  const [faq, setFAQ] = useState([]);
  const [books, setBooks] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [edit_enable, setEditEnable] = useState(false);
  const [quizSection, setQuizSection] = useState(false);
  const [detailSection, setDeatailSection] = useState(true);
  const [CurriculumSection, setCurriculumSection] = useState(false);
  const [publisShow, setPublishShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const [coursePrice, setCoursePrice] = useState("")


  const Alldays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const submitCourseDetails = async () => {
    // console.log("hfjdshjfhsdf", faq);
    setLoading(true)
    if (courseName === "") {
      // toast.warn("Please Add Course Name");
      toast.error("Please Add Course Name", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (courseDesc === '') {
      // toast.warn("Please Add Course Description");
      toast.error('Please Add Course Description', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else if (preference === '') {
      // toast.warn("Please Add Course Description");
      toast.error('Please Add Preference', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else if (duration === '' && duration < 1) {
      toast.error('Please Enter Course Duration');
    } else if (coursePrice === '' && coursePrice < 1) {
      toast.error('Please add Course Price');
    }
    // else if (learnAbout.length < 1) {
    //   // toast.warn("Please Add What will learn");
    //   toast.error("Please Add What will learn", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // }
    // else if (intro_video === "") {
    //   // toast.warn("Please Add IntroVideo");
    //   toast.error("Please Add IntroVideo", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // }
    else if (faq.length < 1) {
      // toast.warn("Please Add Faq section");
      toast.error('Please Add Faq section', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // } else if (books.length < 1) {
      //   toast.warn("Please Add Books");
      //   toast.error(result.message, {
      //     position: "top-center",
      //     autoClose: 3000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //     });
    } else {
      let data = {
        FAQ: faq,
        preference: preference,
        books,
        slug,
        courseName,
        courseDesc,
        learnAbout,
        thumb_image,
        video: intro_video,
        duration,
        price: coursePrice,
      };
      console.log('11111', data);
      // return false
      if (edit_enable) {
        let result = await HttpClient.requestData('updatecourses/' + courseId, 'PUT', data);
        // console.log("course", result);
        if (result && result.status) {
          // alert("hh")
          setCurriculumSection(true);
          setDeatailSection(false);
          setQuizSection(false);
          // toast.success("course detail updated successfully");
          toast.success('course detail updated successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setCourseId(result.data._id);
        }
      } else {
        let result = await HttpClient.requestData('add-course', 'POST', data);
        console.log('course', result);
        if (result && result.status) {
          toast.success('course added successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setCourseId(result.data._id);
          setCurriculumSection(true);
          setDeatailSection(false);
          setQuizSection(false);
        } else {
          // alert("hjghsjhgdfhgkdfgdsfgsdgsgdg")
          // toast.error(result.message)
          toast.error(result.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      }
    }
    setLoading(false)
  };

  const saveToDraft = async () => {
    // alert("jh")
    if (courseId != "") {
      let result = await HttpClient.requestData(
        "changedraftstatus/" + courseId,
        "PUT"
      );
      if (result && result.status) {
        // toast.success("Added to draft successfully");
        toast.success("Added to draft successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      // toast.warn("please fill up all course details");
      toast.error("please fill up all course details", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  };

  useEffect(() => {
    fetchDraft();
  }, []);

  const fetchDraft = async () => {
    let result = await HttpClient.requestData("getAllDraftedCourses", "GET");
    console.log("draft",result);
    if (result && result.status && result.data.length > 0) {
      let data = result.data[0];
      setCourseId(data._id);
      setCourseName(data.courseName);
      setCourseDesc(data.courseDesc);
      setFAQ(data.FAQ);
      setLearnAbout(data.learnAbout);
      setIntroVideo(data.video);
      setThumb_image(data.thumb_image);
      setBooks(data.books);
      setEditEnable(true);
      setDeatailSection(false);
      setCurriculumSection(true);
      setPublishShow(true);
    }
  };

  const openQuiz = () => {
    setDeatailSection(false);
    setCurriculumSection(false);
    setQuizSection(true);
  };

  const PublishCourse = async () => {
    let result = await HttpClient.requestData(
      "changepublishstatus/" + courseId,
      "PUT"
    );
    console.log(result);

    if (result && result.status) {
      // toast.success("Course Publish Successfully");
      toast.success("Course Publish Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/all-courses");
      }, 2000);
    }
  };
  return (
    <>
      <div className="container-fluid ">
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
          bodyStyle={{ borderRadius: 20 }}
        />

        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-11 col-12">
                <div className="_headeing_wrap">
                  <h4 className="text-dark font-weight-bold">Upload new course</h4>
                  <div className="d-flex">
                    {/* <div
                      className=" mr-3 btn btn-primary cancel_btn cancel_btn_own_cncl"
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate('/all-courses')}
                    >
                      Cancel
                    </div> */}
                    <div className=" mr-3 btn btn-success" onClick={saveToDraft}>
                      <i className="fa fa-file-text-o mr-3 " aria-hidden="true"></i>
                      Save as draft
                    </div>{' '}
                    {/* {courseId && (
                      <div className="button-33 mr-3" onClick={PublishCourse}>
                        <i className="fa fa-file-text-o mr-3" aria-hidden="true"></i>
                        Publish course
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-11 col-12">
                <div className="_page_tabwrap">
                  <ul
                    className="nav nav-pills mb-1 d-flex justify-content-between align-items-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item m-0">
                      <a
                        className={'bg-transparent active'}
                        onClick={() => {
                          setDeatailSection(true);
                          setCurriculumSection(false);
                          setQuizSection(false);
                        }}
                        style={{ background: '#4e73df' }}

                        // id="pills-home-tab"
                        // data-toggle="pill"
                        // href="#pills-home"
                        // role="tab"
                        // aria-controls="pills-home"
                        // aria-selected="true"
                      >
                        <h6 className="d-flex flex-column text-center text-dark " style={{ fontSize: 14 }}>
                          <span className="w-25 rounded-pill mb-2 mx-auto py-1">
                            {courseId != '' ? <img src={tickIcon} /> : '01'}
                          </span>
                          Course Details
                        </h6>
                      </a>
                    </li>
                    <li className="nav-item m-0">
                      <a
                        className={quizSection || courseId != '' ? ' bg-transparent active' : ' bg-transparent '}
                        onClick={() => {
                          if (courseId != '') {
                            setDeatailSection(false);
                            setCurriculumSection(true);
                            setQuizSection(false);
                          }
                        }}
                        id={courseId != '' ? 'pills-profile-tab' : ''}
                        data-toggle={courseId != '' ? 'pill' : ''}
                        href={courseId != '' ? '#pills-profile' : '#'}
                        role={courseId != '' ? 'tab' : ''}
                        aria-controls={courseId != '' ? 'pills-profile' : ''}
                        aria-selected="false"
                      >
                        <h6 className="d-flex flex-column text-center text-dark" style={{ fontSize: 14 }}>
                          <span
                            className="w-25 rounded-pill mb-2 mx-auto py-1 tabe3Quiz"
                            style={{ width: '29px !important' }}
                          >
                            {quizSection ? <img src={tickIcon} /> : '02'}
                          </span>
                          Course Section
                        </h6>
                      </a>
                    </li>
                    <li className="nav-item m-0">
                      <a
                        className={quizSection ? ' bg-transparent active' : ' bg-transparent '}
                        onClick={() => {
                          if (courseId != '') {
                            setDeatailSection(false);
                            setCurriculumSection(false);
                            setQuizSection(true);
                          }
                        }}
                        // id="pills-contact-tab"
                        // data-toggle="pill"
                        // href="#pills-contact"
                        // role="tab"
                        // aria-controls="pills-contact"
                        // aria-selected="false"
                      >
                        <h6
                          className="d-flex flex-column text-center text-dark"
                          style={{ fontSize: '14px', width: '28px !important' }}
                        >
                          <span
                            className="w-25 rounded-pill mb-2 mx-auto py-1 tabe3Quiz"
                            // style={{ width: "28px !important", height: "28px" }}
                          >
                            03
                          </span>
                          Quizes
                        </h6>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={detailSection ? 'tab-pane fade show active' : 'tab-pane fade '}
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="_page_contantstrt pt-1">
                        <CoursseNameAndDescription
                          courseName={courseName}
                          setCourseName={setCourseName}
                          preference={preference}
                          setPreference={setPreference}
                          courseDesc={courseDesc}
                          setCourseDesc={setCourseDesc}
                          duration={duration}
                          setDuration={setDuration}
                          slug={slug}
                          setSlug={setSlug}
                          coursePrice={coursePrice}
                          setCoursePrice={setCoursePrice}
                        />
                        <UploadFiles
                          image={thumb_image}
                          setImage={setThumb_image}
                          video={intro_video}
                          setVideo={setIntroVideo}
                        />

                        <StudentsWillLearn learnAbout={learnAbout} setLearnAbout={setLearnAbout} />

                        <FAQ faq={faq} setFAQ={setFAQ} />

                        {/* <Books books={books} setBooks={setBooks} /> */}

                        {/* <button
                          className="_next_btn mx-auto d-table mt-3 border-0 text-white px-4 py-2"
                          style={{ background: "#138BFB", borderRadius: 10 }}

                        >
                          Next
                        </button> */}
                        <br />
                        <div className="pricing_details">
                          <div className="pricing_txt">
                            <h5 className="font-weight-bold text-dark mb-2">Pricing Details</h5>
                            <p className="pricing_details_para" style={{ color: '#6D6D6D', fontSize: 13 }}>
                              List a course fee according to your course module
                            </p>
                          </div>
                          <div className="row">
                            <div className="pt-3 pt-lg-3 pt-sm-2 col-md-6">
                              <h5 className="font-weight-bold text-dark mb-2">Course Fee ($)</h5>

                              <input
                                type="number"
                                value={coursePrice}
                                onChange={val => {
                                  setCoursePrice(val.target.value);
                                }}
                                className="form-control"
                                style={{ borderRadius: '20px' }}
                              />
                            </div>
                            <div className="pt-3 pt-lg-3 pt-sm-2 col-md-6">
                              <h5 className="font-weight-bold text-dark mb-2">Discounted course fee ($)</h5>

                              <input
                                type="number"
                                // value={liveclass}
                                // onChange={(val) => {
                                //   setLiveClass(val.target.value)
                                // }}

                                className="form-control"
                                style={{ borderRadius: '20px' }}
                              />
                            </div>
                          </div>
                          {/* <div className="course_discounted_course">
                        <div className="cousre_count_fee">
                          <h5 className="font-weight-bold text-dark mb-2">
                            Course fee
                          </h5>
                          <div className="course_fee" >
                            <input type="number" className="crse"
                              id="number" style={{ padding: '15px 15px' }}></input>
                          </div>
                        </div>
                        <div className="cousre_count_fee">
                          <h5 className="font-weight-bold text-dark mb-2">
                            Discounted course fee
                          </h5>
                          <div className="course_fee">
                            <input style={{ padding: '15px 15px' }}
                              type="number" className="crse"
                              id="number"></input>
                          </div>
                        </div>
                        <div className="crt_coupon">
                          Do you want create a coupon then <a href="#" className="clckcrt">click here.</a>
                        </div>
                      </div> */}
                          {/* <div className="aval">
                        <h4 className="avaliblt">Availability/Time Slot</h4>
                        <button
                          className="btn btn-sm  btnedt"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                        >
                          <i className="fa fa-edit" />
                          Edit
                        </button>
                      </div> */}
                      {/* <h5 className="crttmshot" >
                        create a time slot for the course
                      </h5> */}
                      {/* <div className="pricing_day_all">
                        <div className="pricinig_day" >
                          {
                            Alldays.map((it, ind) => {
                              return (
                                <div style={{height:'50px',width:'120px',justifyContent:'center',alignItems:'center'}}>
                                <div className="dt_dy" key={ind} >
                                  <span className="dt_dm_main_flx"style={{justifyContent:'center'}} >
                                    <div className="dt_dm_main" >
                                      {it}
                                    </div>

                                  </span>
                                </div>
                                </div>
                              )
                            })
                          }

                        </div>
                        {
                          [1,2,3,4].map((it, ind) => {
                            return (
                              <div className="pricinig_day" key={ind}>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                                <div className="dt_dy_grn">
                                  <span className="dt_dm_main_flx_grn">
                                    
                                    <div className="dt_dm_nm_tm">
                                      <h5 className="dt_dm_nm_rnd_tm">15:00 - 16:00</h5>
                                    </div>
                                  </span>

                                </div>
                              </div>
                            )
                          }
                          )}
                       
                      </div> */}
                          <div className="btn_grp">
                            {/* <div className="btngrp_a">
                          <a href="#" className="btngrp_a_prvw">  Preview</a>
                        
                        </div> */}
                            {/* <div className="btngrp_a">
                            <a href="#" className="btngrp_a_save"> Save as draft</a>

                          </div> */}
                            {/* <div className="btngrp_a">
                          <a href="#" className="btngrp_a_svcnt"> Save & continue</a>
                         
                        </div> */}
                            <div className="btngrp_a" onClick={submitCourseDetails} disabled={loading}>
                              <a href="#" className="btngrp_a_svcnt">
                                Save & Next
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={CurriculumSection ? 'tab-pane fade show active' : 'tab-pane fade'}
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <UploadCourseCurriculum openQuiz={openQuiz} courseId={courseId} />
                    </div>
                    <div
                      className={quizSection ? 'tab-pane fade show active' : 'tab-pane fade'}
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <AddQuiz courseId={courseId} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
