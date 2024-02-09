import React, { useEffect, useState } from "react";

import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import profile from '../../asstes1/images/icon/profile.png'
import timer from '../../asstes1/images/icon/timer.png'
import sort from '../../asstes1/images/icon/sort.png'
import profileimg from '../../asstes1/images/icon/profileimg.png'
import seen from '../../asstes1/images/icon/seen.png'
import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import MaskGroup from '../../asstes1/images/MaskGroup.png'
import { Link } from "react-router-dom";
import AddTeacherModal from "./AddTeacherModal";
import HttpClient from "../../utils/HttpClient";
import Coteacherlist from "../../Component/CoTeacher/Coteacherlist";

export default function CoTeacher() {
    const [addTeacher,setAddTeacher]=useState(false)
    const [coTeachers,setCoTeachers]= useState([])
    const SetAddTeacherTrue=()=>{
        setAddTeacher(true)
    }
    const SetAddTeacherFalse=()=>{
        setAddTeacher(false)
    }

    useEffect(()=>{
        fetchCoTeacher()
    },[])

    const fetchCoTeacher =async()=>{
        let result = await HttpClient.requestData("coTeacherFullDetails","GET")
        console.log(result);
        if(result && result.status){
            setCoTeachers(result.data)
        }
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="_engage">
                                    <div className="row">
                                        <div className="col-md-5 col-12">
                                            <div className="__engage_info">
                                                <h4 className="text-white font-weight-bold ">
                                                    Want To Add New Instructors or Influencer?
                                                </h4>
                                                <p
                                                    style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 11 }}
                                                >
                                                    Hello this is a line of text will go here
                                                </p>
                                                <button
                                                onClick={SetAddTeacherTrue}
                                                    className="text-white add-invitation"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        border: "1px dashed #FFFFFF",
                                                        backdropFilter: "blur(10px)",
                                                        WebkitBackdropFilter: "blur(10px)",
                                                        borderRadius: 12,
                                                        padding: "15px 30px"
                                                    }}
                                                >
                                                    Add Teacher
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-12 position-relative">
                                            <img className="__engage_img" src={MaskGroup} />
                                        </div>
                                    </div>
                                </div>
                                {/*-------Modal Invitation-----*/}
                                {addTeacher?<AddTeacherModal SetAddTeacherFalse={SetAddTeacherFalse}/> :null}
                               
                                {/*---End Modal Invitation-----*/}
                               <Coteacherlist coTeachers={coTeachers} fetchCoTeacher={fetchCoTeacher}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}