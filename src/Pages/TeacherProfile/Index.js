import React, { useEffect, useState } from "react";
import teacherprofilebg from '../../asstes1/images/teacher-profile-bg.png'
import teacher from '../../asstes1/images/teacher.png'
import userremove from '../../asstes1/images/icon/user-remove.png'
import useredit from '../../asstes1/images/icon/user-edit.png'
import studentuser from '../../asstes1/images/icon/studentuser.png'
import love from '../../asstes1/images/icon/love.png'
import design1 from '../../asstes1/images/design1.png'
import archivetick from '../../asstes1/images/icon/archive-tick.png'
import start from '../../asstes1/images/icon/start.png'
import hrs from '../../asstes1/images/icon/hrs.png'
import profiledetails from '../../asstes1/images/icon/profile-details.png'


import total_upload from '../../asstes1/images/total_upload.png';
import security_user from '../../asstes1/images/security-user.png';
import empty_User from '../../asstes1/images/empty-wallet.png';
import star_Dash from '../../asstes1/images/star_Dash.png';


import StudentsReviews from "./StudentsReview";
import UploadedCourses from "./UploadedCoursess";
import AboutMe from "./AboutMe";
import Experiences from "./Expriences";
import Certificates from "./Certificates";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { useNavigate } from "react-router-dom";
import CountCard from "../../Component/CoTeacher/CountCard";
import { toast, ToastContainer,Zoom } from "react-toastify";

export default function TeachersProfile() {
const {userData} = useSelector((state)=>state.User)
const navigate = useNavigate()
const {id}= useParams()
const [teacherDetails,setTeacherDetails] = useState(null)
const [permissions,setPermission] = useState([])
const [courses,setCourses] = useState(0)
const [coTeacherCourses,setCoTeacherCourses]= useState([])
const [totalStudent,setTotalStudent] = useState(0)
const [avgRating,setAvgRating] = useState(0)
const [reviewData,setReviewData] = useState([])

  

    useEffect(()=>{
fetchDetails()
fetchCountAll()
fetchTeacherCourses()
    },[])

    const fetchDetails =async()=>{
let result = await HttpClient.requestData("getcoteacherprofile/"+id,"GET")
if(result && result.status){
  setTeacherDetails(result.data[0])
  setPermission(result.data[0]?.permission)
  setReviewData(result.data[0]?.reviewData)
}
    }

    const Permission = async(e) => {
        console.log(e.target.checked);
        // console.log(permission);
        if (e.target.checked) {
          let dataSend = {
            permission: [...permissions, e.target.value],
          };
        //   console.log(dataSend);
          let result = await HttpClient.requestData("updateaccesscontrol/"+id,"PUT",dataSend)
        //   console.log(result);
          if(result && result.status){
            fetchDetails()
            //  toast.success("done") 
          }
        } else {
          let dataSend = {  permission: permissions.filter((item) => item != e.target.value)}
        //   console.log(dataSend);
          let result = await HttpClient.requestData("updateaccesscontrol/"+id,"PUT",dataSend)
        //   console.log(result);
          if(result && result.status){
            fetchDetails()
            //  toast.success("done") 
          }
        }
      };

      const fetchCountAll =async()=>{
        let result = await HttpClient.requestData("countAll/"+id,"GET")
        if(result && result.status){
          setCourses(result.data[0]?.courses[0]?.totalCourse??0)
          setTotalStudent(result.data[0].totalStudents)
          setAvgRating(result.data[0].avgRating??0)
          // setTeacherDetails(result.data[0])
          // setPermission(result.data[0]?.permission)
        }
      }

      const fetchTeacherCourses =async()=>{
        let result = await HttpClient.requestData("getAllCoTeacherCourses/"+id,"GET")
        if(result && result.status){
          setCoTeacherCourses(result.data)
        }
      }

      const removeTeacher = async()=>{
        let result = await HttpClient.requestData("removeCoTeacher/"+id,"PUT")
        console.log(result);
        if(result && result.status){
          toast.success("Remove successfully")
          // setCoTeacherCourses(result.data)
          navigate("/co_teachers")
        }
      }
    return (
        <>
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
            <div className="container-fluid pl-0 pr-0">
                <div className="_enrollment">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-12">
                            <div className="media media-container">
                              <div className="position-relative">
                                  <img
                                      src={teacherprofilebg}
                                      className=""
                                      style={{ width: "100%" }}
                                  />
                                  <button className="back_Btn" onClick={()=>navigate(-1)}>Back</button>
                                  <img src={teacherDetails?.image} className="teacher-profile" />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-title">{teacherDetails?.name}</h4>
                                    <p className="media-para">
                                      {/* {userData?.about}. */}
                                    </p>
                                    <button
                                        type="button"
                                        className=" btn-primary"
                                        style={{
                                            background: "#138BFB",
                                            borderRadius: 10,
                                            minHeight: 48,
                                            marginBottom: 20,
                                            maxWidth: "80%",
                                            textAlign: "center",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            lineHeight: "19px",
                                            color: "#FFFFFF",
                                            padding: "0 20px"
                                        }}
                                    >
                                        Book Individual Coaching Call
                                    </button>
                                </div>
                                <span className="border-line" />
                                <StudentsReviews teacherDetails={teacherDetails} reviewData={reviewData}/>
                    
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-9 col-12">
                            <div className="button-wrapper">
                                <div className="button-wrapper-item">
                                    <button type="button" className="btn btn-remove" onClick={removeTeacher} >
                                        <img src={userremove} />
                                        Remove Teacher
                                    </button>
                                    <div className="sort-table-teacher" style={{ display: "flex" }}>
                                        <ul>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    data-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                >
                                                    <img src={useredit} />
                                                    Access Control
                                                    <b className="caret" />
                                                </a>
                                                <ul className="dropdown-menu cutom-menu-sort">
                                                <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="uploadCourse"
                                onChange={(e) => Permission(e)}
                                checked={permissions.some(item=>item=="uploadCourse")}
                              />
                              Upload course
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="takeCoachingClasses"
                                onChange={(e) => Permission(e)}
                                checked={permissions.some(item=>item=="takeCoachingClasses")}
                              />
                              Can take coaching classes
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="addCoTeacher"
                                onChange={(e) => Permission(e)}
                                checked={permissions.some(item=>item=="addCoTeacher")}
                              />
                              Can add new teacher
                            </label>
                          </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="_masterclass_main_box_teacher">
                              <CountCard title="Total Uploaded courses" logo={total_upload} data={courses}/>
                              <CountCard title="Total Students" logo={studentuser} data={totalStudent}/>
                              <CountCard title="Total Individual Classes" logo={security_user} data="242"/>
                              <CountCard title="Charges Per Hour" logo={empty_User} data="60$"/>
                              <CountCard title="Rating" logo={star_Dash} data={avgRating}/>
                            </div>

                            <AboutMe about={teacherDetails?.about}/>
                           

                            <UploadedCourses courses={coTeacherCourses} />
                          

                          {/* <Experiences/> */}

                          <Certificates certificates={teacherDetails?.certification}/>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}