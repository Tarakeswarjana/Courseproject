import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Ellipse12 from '../../../../asstes2/images/Ellipse12.png'
import HttpClient from '../../../../utils/HttpClient'


function StudentQuestions({ list, courseId, fetchQuestionList }) {

  const [answer, setAnswer] = useState("")

  const [show, setShow] = useState(false)

  const submitAnswer = async () => {
    if (answer != "") {

      if (!list?.answer) {
        let dataSend = {
          questionId: list._id,
          answer
        }
        let result = await HttpClient.requestData("addAnswer", "POST", dataSend)
        if (result && result.status) {
          alert("Answer successfully")
          fetchQuestionList()
          setShow(false)
        }
        else {
          alert(result.message)
        }
      }
      else {
        let dataSend = {
          answerId: list.answer?._id,
          reply: answer,
          courseId: courseId
        }
        console.log("reply", dataSend);
        // return false
        let result = await HttpClient.requestData("addReply", "POST", dataSend)
        if (result && result.status) {
          alert("reply successfully")
          fetchQuestionList()
          setShow(false)
        }
        else {
          alert(result.message)
        }
      }

    } else {
      alert("please write some answer")
    }
  }
  return (
    <div className="mediaObjectPart ">
      <div className="media-part row">
        <div className="media col-lg-9 col-md-12 col-sm-12 col-12">
          <img src={list?.student?.image} className="mr-3" alt="..." height={50} width={50} style={{ borderRadius: "50%" }} />
          <div className="media-body">
            <h3>
              {list?.question}
            </h3>
            <p>
              {list?.answer?.answer ??
                <>{
                  !show &&
                  (<button className='btn btn-primary' onClick={() => setShow(true)}>Answer</button>)
                }</>}
            </p>
            <span> {moment(list?.createdOn).calendar()}</span>
            {list.answer && <a className="rply-text" onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
              REPLY
            </a>}
          </div>
        </div>
        <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
          {/* <div>
          <a href="#">
            <i className="fa fa-arrow-circle-up" aria-hidden="true" />
            <span>200</span>
          </a>
        </div> */}
          {list.answer && <div>
            <Link to={"all_reply/" + list._id} state={{ courseId: courseId }} >
              <i className="fa fa-commenting" aria-hidden="true" />
              <span>{list?.reply?.length}</span>
            </Link>
          </div>}
        </div>
      </div>
      {show && <div className="col-lg-9 col-md-12 col-sm-12 col-12 post-answer-part">
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Reply question"
            value={answer}
            onChange={(val) => setAnswer(val.target.value)}
          />
        </div>
        <div className="mt-2 mb-5">
          <button type="submit" className="btn btn1 mb-2" onClick={submitAnswer}>
            {list.answer ? "Post Reply" : " Post Answer"}
          </button>
          <button type="submit" className="btn btn2 mb-2" onClick={() => setShow(!show)} >
            Cancel
          </button>
        </div>
      </div>}
    </div>)
}

export default StudentQuestions