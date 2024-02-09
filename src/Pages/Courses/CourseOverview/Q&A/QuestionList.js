import React, { useEffect, useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom';
import HttpClient from '../../../../utils/HttpClient';
import StudentQuestions from "./StudentQuestions";


function QuestionList() {

  const { courseId } = useOutletContext()

  const [questions, setQuestions] = useState([])
  const [sort, setSort] = useState("")


  const fetchQuestionList = async () => {
    let result = await HttpClient.requestData("viewQuestionAnswerList/" + courseId, "GET")
    console.log(result);
    if (result && result.status) {
      setQuestions(result.data)
    }
  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  // console.log(
  //   questions.sort((a,b)=>{return new Date(b.createdOn) - new Date(a.createdOn)})
  // );

  let sortQuestion = (e) => {
    if (e === "NewestFirst") {
      questions.sort((a, b) => { return new Date(b.createdOn) - new Date(a.createdOn) })
    }
    if (e === "oldestFirst") {
      questions.sort((a, b) => { return new Date(a.createdOn) - new Date(b.createdOn) })
    }
    if (e === "Name") {
      questions.sort((a, b) => {
        const nameA = a.question.toUpperCase();
        const nameB = b.question.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-6 col-12">
          <form className="form-inline my-2 my-lg-0">
            <i className="fa fa-search" aria-hidden="true" />
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Questions"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 srtbyraw">
          {/* <div style={{ borderRadius: "10px", background: "#fff", display: "flex", alignItems: "center",height:"45px"}} className='srtbyrwd'>
                        <button className="btn">Sort By: </button>
                        <select
                          onChange={(e) => {
                            setSort(e.target.value)
                            sortQuestion(e.target.value)
                          }}
                          style={{marginRight: "14px", padding: "2px 2px", border:"none"}}
                        >
                          <option value="NewestFirst">Not Answered</option>
                          <option value="Name">Answered</option>
                          <option value="oldestFirst">Answered</option>
                          
                        </select>
                      </div> */}
          <div className="srtby">
            <button className="btn">Sort By: </button>
            <select
              onChange={(e) => {
                setSort(e.target.value)
                sortQuestion(e.target.value)
              }}
              style={{ marginRight: "14px", padding: "2px 2px", border: "none" }}
            >
              <option value="NewestFirst">Not Answered</option>
              <option value="Name">Answered</option>
              <option value="oldestFirst">Answered</option>

            </select>
          </div>
        </div>
      </div>
      {questions.map((item, index) => {
        return <StudentQuestions list={item} courseId={courseId} key={index} fetchQuestionList={fetchQuestionList} />;
      })}
    </>
  )
}

export default QuestionList