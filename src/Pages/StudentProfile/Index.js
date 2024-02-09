import React, { useEffect, useState } from "react";
import enrollmentstudentprofilebg from '../../asstes1/images/enrollment-student-profile-bg.png'
import studentimg from '../../asstes1/images/student-img.png'
import country from '../../asstes1/images/icon/country.png'
import calendar from '../../asstes1/images/icon/calendar-tick.png'
import EnrollementCourses from "./EnrollmentCourses";
import LiveCoachingCall from "./LiveCoachingCall";
import { useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import Spinner from "../../Component/FullPageLoader/Spinner";
import { useNavigate } from "react-router-dom";



export default function EnrolledStudentProfile() {
    const Navigate=useNavigate()
    const [data, setData] = useState(true)
    const [loading,setLoading] = useState(false)

    const [studentDetails,setStudentDetails] = useState(null)
    const setDataFalse = () => {
        setData(false)
    }
    const setDataTrue = () => {
        setData(true)
    }
    const {id} = useParams()
    useEffect(()=>{
        fetchStudentDetail()
    },[])
    const fetchStudentDetail =async ()=>{
        setLoading(true)
        let result = await HttpClient.requestData("studentEnrollCourse/"+id,"GET")
        if(result&&result.status){
            setStudentDetails(result.data[0])
        }
        setLoading(false)
    }


    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment ">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="profile-tab">
                                    <h1 className="entry-header-student-profile entry_header_stnd_prfl"
                                    style={{cursor:"pointer"}}
                                    onClick={()=>{
                                        Navigate(-1)
                                    }}
                                    >
                                        &lt; Student Profile
                                    </h1>
                                    <div className="profile-description-box bg-white">
                                        <img src={enrollmentstudentprofilebg} />
                                        <div className="content-list">
                                            <div className="content-item">
                                                {!loading?<img src={studentDetails?.image} alt="Profile" />
                                                :<Spinner/>}
                                                <p className="name">{`${studentDetails?.fristName} ${studentDetails?.lastName}`}</p>
                                            </div>
                                            <div className="content-item justify-content-end">
                                                <img src={country} className="media-icon" />
                                                <p className="name-title">Australia</p>
                                                <img
                                                    src={calendar}
                                                    className="media-icon"
                                                />
                                                <p className="name-title">15 Dec, 2022</p>
                                            </div>
                                        </div>
                                        <div className="_student_profile_nav">
                                            <ul className="nav nav-pills " id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active-tab"
                                                        id="pills-enrolled-course"
                                                        data-toggle="pill"
                                                        href="#pills-enrolled-course"
                                                        role="tab"
                                                        aria-controls="pills-enrolled-course"
                                                        aria-selected="false"
                                                        onClick={setDataTrue}
                                                    >
                                                        Enrolled Courses
                                                    </a>

                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="pills-coaching-tab"
                                                        data-toggle="pill"
                                                        href="#pills-coaching-tab"
                                                        role="tab"
                                                        aria-controls="pills-coaching-tab"
                                                        aria-selected="true"
                                                        onClick={setDataFalse}
                                                    >
                                                        Live Coaching Call
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data ? <EnrollementCourses courses={studentDetails?.coursesenroll??[]} /> : <LiveCoachingCall id={id} />}

        </>
    )
}