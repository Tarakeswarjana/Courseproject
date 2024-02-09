import React, { useState } from 'react'
import { toast } from 'react-toastify'
import HttpClient from '../../../../utils/HttpClient'

function Name({courseDetails,fetchCourseDetail}) {
    const [edit_enable,setEditEnable] = useState(false)
    const [courseName,setCourseName] = useState("")

    const EditCourseName =async()=>{
        let dataSend={
            courseName
        }
let result = await HttpClient.requestData("updatecourses/"+courseDetails._id,"PUT",dataSend)

if(result && result.status){
    fetchCourseDetail()
    toast.success("Edited Successfully")
    setEditEnable(false)
}
else{
    toast.warn(result.message)
    setEditEnable(false)

}
    }
  return (
    <div className="row border-btm pb-30 pb_own_20">
    <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
            <p>Course Name</p>
        </div>
    </div>
    <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
         {!edit_enable?   <button
                className="btn  btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
                onClick={()=>{setEditEnable(true)
                setCourseName(courseDetails.courseName)
                }}
            >
                <i className="fa fa-edit" />
                Edit
            </button>:
            <button
                className="btn  btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
                onClick={EditCourseName}

            >
                {/* <i className="fa fa-edit" /> */}
                Save
            </button>}
        </div>
    </div>
    <div className="col-md-6 col-12">
        <div className="_masterclass_box_course">
          {!edit_enable?  <p style={{ fontWeight: "normal" }}>
              {courseDetails.courseName}
            </p>:
            <input type="text" className='form-control' value={courseName} onChange={(val)=>setCourseName(val.target.value)}/>}
        </div>
    </div>
</div>  )
}

export default Name