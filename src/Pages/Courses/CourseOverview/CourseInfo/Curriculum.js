import React, { useEffect, useState } from 'react'
import downarrow from '../../../../asstes2/images/downarrow.png'
import HttpClient from '../../../../utils/HttpClient'
import CurriculuSection from "../../../UploadNewCourse/Curriculum/Curriculum"

function Curriculum({courseId}) {
const [section,setSection] = useState([])
const [modalShow,setModalShow] = useState(false)

    useEffect(()=>{
        fetchCurriculum()
    },[])
    const fetchCurriculum =async()=>{
        let result = await HttpClient.requestData("viewsection/"+courseId,"GET")
        if(result&& result.status){
            setSection(result.data)
        }
    }

    const EditCurriculum =()=>{
      window.$('.bd-example-modal-lg').hide(); 
      // window.$('.bd-example-modal-lg').modal('hide'); 

      window.$('.modal-backdrop').remove();
  
    }
  return (
    <>
      <div className="row border-btm pb-30 pb_own_20">
        <div className="col-md-3 col-12">
          <div className="_masterclass_box_course">
            <p>Curriculum</p>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="_masterclass_box_course">
            <button
              className="btn  btn-sm rounded-0"
              type="button"
              // data-toggle="tooltip"
              data-placement="top"
              title="Edit"
              style={{ marginTop: 0 }}
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <i className="fa fa-edit" />
              Edit
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="_masterclass_box_course" id="accordionFlushExample1">
            {section.map((item, index) => (
              <div key={index}>
                <p
                  data-toggle="collapse"
                  data-bs-toggle="collapse"
                  data-bs-target={'#flush-collapse' + index}
                  aria-expanded="false"
                  aria-controls={'flush-collapse' + index}
                  style={{ cursor: 'pointer', fontSize: '16px' }}
                >
                  {item.secTitle}
                  <img src={downarrow} style={{ float: 'right' }} />
                </p>
                <h6 style={{ fontSize: '14px' }}>
                  <span className="para_curri"> video</span>
                  <span className="para_curri" style={{ margin: '0 10px' }}>
                    |
                  </span>
                  <span class="para_curri">1hr 20 mins</span>
                </h6>
                <div
                  id={'flush-collapse' + index}
                  aria-labelledby="flush-heading"
                  data-bs-parent="#accordionFlushExample1"
                  className="collapse faq-para"
                >
                  {item.desc}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CurriculuSection courseId={courseId} openQuiz={EditCurriculum} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Curriculum