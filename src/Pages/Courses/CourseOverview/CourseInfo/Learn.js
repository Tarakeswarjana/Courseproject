import React, { useState } from "react";
import { toast } from "react-toastify";
import HttpClient from "../../../../utils/HttpClient";

function Learn({ courseDetails, fetchCourseDetail }) {
  const [edit_enable, setEditEnable] = useState(false);
  const [learnAbout, setLearnAbout] = useState([]);
  const [learnText,setLearnText] = useState("")
  const [edit,setEdit] = useState(false)
  const [editIndex,setEditIndex] = useState(null)

  const EditLearnAbout = async () => {
    // setEditEnable(false);
    // return false;
    let dataSend = {
      learnAbout,
    };
    let result = await HttpClient.requestData(
      "updatecourses/" + courseDetails._id,
      "PUT",
      dataSend
    );

    if (result && result.status) {
      fetchCourseDetail();
      toast.success("Edited Successfully");
      setEditEnable(false);
    } else {
      toast.warn(result.message);
      setEditEnable(false);
    }
  };

  const changeLearnAbout =()=>{
      if(edit){
        const updatedLearnAbout= [...learnAbout]
        updatedLearnAbout[editIndex]= learnText
        setLearnAbout(updatedLearnAbout)
        setEdit(false)
        setEditIndex(null)
        setLearnText("")

      }
      else{
          setLearnAbout((prev)=>[...prev,learnText])
          setLearnText("")
      }
  }

  const DeleteLearnAbout = (i)=>{
    //   console.log(i);
      const updatedLearnAbout = [...learnAbout]
      updatedLearnAbout.splice(i,1)
    //   console.log(updatedLearnAbout);
    //   return false
    setLearnAbout(updatedLearnAbout)
  }
  return ( 
    <div className="row border-btm pb-30 pb_own_20">
      <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
          <p>What You Will Learn</p>
        </div>
      </div>
      <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
          {!edit_enable ? (
            <button
              className="btn  btn-sm rounded-0"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Edit"
              onClick={() => {
                setEditEnable(true);
                setLearnAbout(courseDetails.learnAbout);
              }}
            >
              <i className="fa fa-edit" />
              Edit
            </button>
          ) : (
            <button
              className="btn  btn-sm rounded-0"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Edit"
              onClick={EditLearnAbout}
            >
              {/* <i className="fa fa-edit" /> */}
              Save
            </button>
          )}
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className="_masterclass_box_course">
          {!edit_enable ? (
            <ul role="list">
              {courseDetails.learnAbout?.map((item, index) => {
                return <li key={index}>{item}.</li>;
              })}
            </ul>
          ) : (
              <>
              <input type="text" className="form-control" style={{float:"left", width:"75%",  marginRight:"5%"}}value={learnText} onChange={(val)=>setLearnText(val.target.value)}/>
              <button className="btn" style={{display:"inline-block", width:"20%"}} onClick={changeLearnAbout}> {edit?"Edit":"Add"}</button>
            <ul className="list-group list-group-flush" style={{marginTop:"14px"}}>
              {learnAbout.map((item, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    {item}
                    <div>
                    <span className="badge  badge-pill" style={{cursor:"pointer"}} onClick={()=>{
                        setEditIndex(index)
                        setEdit(!edit)
                        setLearnText(item)}}>
                      
 

<i class="fa-solid fa-file-pen" style={{fontSize:"20px", color:"#138BFB"}}></i>
                    </span>
                    <span className="badge badge-primary badge-pill" style={{cursor:"pointer",fontSize:"16px", backgroundColor:"#138BFB"}} onClick={()=>DeleteLearnAbout(index)}>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                    </div>

                  </li>
                );
              })}
            </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Learn;
