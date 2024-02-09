import React, { useEffect, useState } from "react";

import HttpClient from "../../../utils/HttpClient";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";

export default function Index({ courseId }) {




  const PublishCourse =async()=>{
let result = await HttpClient.requestData("changepublishstatus/"+courseId ,"PUT")
console.log(result)

if(result && result.status){
    toast.success("Course Published Successfully")
}
  }

  return (
    <>
    <Outlet context={{courseId}}/>
       {/* <button
        className="_next_btn mx-auto d-table mt-5 border-0 text-white px-4 py-2"
        style={{ background: "#138BFB", borderRadius: 10 }}
        onClick={PublishCourse}
      >
        Publish
      </button> */}
    </>
  );
}
