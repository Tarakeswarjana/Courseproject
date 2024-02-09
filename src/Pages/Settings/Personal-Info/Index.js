import React, { useEffect, useState } from "react";
import CertificateCard from "../../../Component/Personal/CertificateCard";

import ProfileCard from "../../../Component/Personal/ProfileCard";
import HttpClient from "../../../utils/HttpClient";
import { useDispatch } from "react-redux";
import { setuser } from "../../../Redux/reducer/User";

export default function Personal_Info() {
const [profileData,setProfileData] = useState(null)
const dispatch=useDispatch()

    useEffect(()=>{
fetchProfileData()
    },[])

    const fetchProfileData=async()=>{
        let result = await HttpClient.requestData("get-profile","GET")
        console.log(result);
        if(result && result.status){
            setProfileData(result.data)
            dispatch(setuser(result.data))
        }
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <section className="profile__INformation">
                  <ProfileCard profileData={profileData} fetchProfileData={fetchProfileData}/>
                           <CertificateCard certificates={profileData?.certification}/>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}