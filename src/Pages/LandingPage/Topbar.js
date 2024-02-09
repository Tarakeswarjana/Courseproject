import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";



export default function Topbar ({editStatus,setEditStatus,landingDec,shortDec,longDesc,userName,fetchTecharData}){
  const [enableEdit, setEnableEdit] = useState(false);

  let updateData=async()=>{
    let data={
      username:userName,
      landingPageTitle:landingDec,
      teacherSubTitle:shortDec,
      longDesc:longDesc
    }
    console.log(data);
    let result=await HttpClient.requestData(`add-landing-page`,"POST",data)
    // console.log(result);
  }


    const Navigate=useNavigate()
    return(
        <div className="landing_page___top">
        <div className="container-fluid">
          {enableEdit ? (
            <div
              className="d-flex justify-content-between"
              style={{ alignItems: "center", flexWrap: "wrap" }}
            >
              <div className="landing_page_edit_head">
                <h2>You are in edit mode</h2>
              </div>
              <div className="Edit__page_btn" onClick={()=>{
                setEditStatus(false)
                Navigate("/profile_landing_page")
                setEnableEdit(false)
                updateData()
                fetchTecharData()
                }}
                style={{cursor:"pointer"}}
                >
                  
                <a style={{backgroundColor:"#138BFB" ,color:"white"}}>
                  <span>Save</span>
                </a>
              </div>
            </div>
          ) : (
            <div
              className="d-flex justify-content-between"
              style={{ alignItems: "center", flexWrap: "wrap" }}
            >
              <div className="landing_page_edit_head">
                <h2>Your Landing Page Look Like This</h2>
              </div>
              <div className="Edit__page_btn" onClick={()=>{
                  setEnableEdit(true)
                  setEditStatus(true)
              }}>
                <a >
                  <span style={{color:"white"}}>edit</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}