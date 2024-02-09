import React ,{useState}from 'react'
import { toast } from 'react-toastify'
import HttpClient from '../../../../utils/HttpClient'

function Description({courseDetails,fetchCourseDetail}) {
    const [edit_enable,setEditEnable] = useState(false)
    const [courseDesc,setCourseDesc] = useState("")

    const EditDescription =async()=>{
        let dataSend={
            courseDesc
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
            <p>Description</p>
        </div>
    </div>
    <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
           {
               !edit_enable?
               <button
               className="btn  btn-sm rounded-0"
               type="button"
               data-toggle="tooltip"
               data-placement="top"
               title="Edit"
               onClick={()=>{setEditEnable(true)
                setCourseDesc(courseDetails.courseDesc)
                }}
           >
               <i className="fa fa-edit" />
               Edit
           </button>: <button
                className="btn  btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
                onClick={EditDescription}
            >
                {/* <i className="fa fa-edit" /> */}
                Save
            </button>
           }
           
        </div>
    </div>
    <div className="col-md-6 col-12">
        <div className="_masterclass_box_course">
           {
               !edit_enable?
               <p style={{ fontWeight: "normal" }}
               dangerouslySetInnerHTML={{
                 __html: courseDetails?.courseDesc,
               }}>
   
         </p>:
         <textarea value={courseDesc} onChange={(val)=>setCourseDesc(val.target.value)}  cols={50}>

         </textarea>

           } 
        
        </div>
    </div>
</div>  )
}

export default Description