import React, { useState } from "react";
import { toast } from "react-toastify";
import HttpClient from "../../../../utils/HttpClient";
import downarrow from "../../../../asstes2/images/downarrow.png";

function Faq({ courseDetails ,fetchCourseDetail}) {
  const [edit_enable, setEditEnable] = useState(false);
  const [FAQ, setFaq] = useState([]);
  const [question,setQuestion] = useState("")
  const [answer,setAnswer] = useState("")
  const [edit,setEdit] = useState(false)
  const [editIndex,setEditIndex] = useState(null)

  const EditFAQ = async () => {
    // setEditEnable(false);
    // return false;
    let dataSend = {
      FAQ,
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

  const changeFAQ =()=>{
    let data={
      question,
      answer
    }
      if(edit){
       
        const updatedFAQ= [...FAQ]
        updatedFAQ[editIndex]= data
        setFaq(updatedFAQ)
        setEdit(false)
        setEditIndex(null)
        setAnswer("")
        setQuestion("")

      }
      else{
          setFaq((prev)=>[...prev,data])
          setAnswer("")
          setQuestion("")   
           }
  }

  const DeleteFAQ = (i)=>{
    //   console.log(i);
      const updatedFAQ = [...FAQ]
      updatedFAQ.splice(i,1)
    //   console.log(updatedLearnAbout);
    //   return false
    setFaq(updatedFAQ)
  }
  return (
    <div className="row pb-30 pb_own_20">
      <div className="col-md-3 col-12">
        <div className="_masterclass_box_course">
          <p>FAQ</p>
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
                setFaq(courseDetails.FAQ);
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
              onClick={EditFAQ}
            >
              {/* <i className="fa fa-edit" /> */}
              Save
            </button>
          )}
        </div>
      </div>
      <div className="col-md-6 col-12">
        {!edit_enable ? (
          <div className="_masterclass_box_course">
            {courseDetails.FAQ?.map((item, index) => {
              return (
                <div key={index}>
                  <p data-toggle="collapse" data-target={'#demofa' + index}>
                    {item.question}
                    <img src={downarrow} style={{ float: 'right' }} />
                  </p>
                  <div id={'demofa' + index} className="collapse faq-para">
                    {item.answer}.
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="_masterclass_box_course">
            <input
              type="text"
              className="form-control"
              style={{ marginBottom: '10px' }}
              value={question}
              onChange={val => setQuestion(val.target.value)}
              placeholder="Question"
            />
            <input
              type="text"
              className="form-control"
              style={{ marginBottom: '10px' }}
              value={answer}
              onChange={val => setAnswer(val.target.value)}
              placeholder="answer"
            />
            <button onClick={changeFAQ} style={{ marginBottom: '10px' }}>
              {edit ? 'Edit' : 'Add'}
            </button>
            {FAQ?.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    data-toggle="collapse"
                    data-target={'#demofaq' + index}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <p>{item.question}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <span
                          className="badge  badge-pill"
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setEditIndex(index);
                            setEdit(!edit);
                            setAnswer(item.answer);
                            setQuestion(item.question);
                          }}
                        >
                          <i class="fa-solid fa-file-pen" style={{ fontSize: '20px', color: '#138BFB' }}></i>
                        </span>
                        <span
                          className="badge badge-primary badge-pill"
                          style={{ cursor: 'pointer', fontSize: '16px', backgroundColor: '#138BFB' }}
                          onClick={() => DeleteFAQ(index)}
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </span>
                      </div>
                      <img src={downarrow} style={{ float: 'right', pointerEvents: 'none' }} />
                    </div>
                  </div>
                  <div id={'demofaq' + index} className="collapse faq-para">
                    {item.answer}.
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq;
