import React, { useEffect, useState } from "react";
import QuizQuestionList from "./QuestionList";
import QuizQuestionForm from "./QuizQuestionBoxFrom";
import dots4 from '../../../../asstes1/images/4dots.png'
import { useNavigate, useParams } from "react-router-dom";
import HttpClient from "../../../../utils/HttpClient";

export default function QuizQuestion({quizId,ShowQuestion,setEditEnable}) {
    const {id} = useParams()
    const navigate = useNavigate()
    const [show,setShow]=useState('')

    const [allQusetion,setAllQuestion] = useState([])
    const [quizTitle,setQuizTitle] = useState("")
    const [quizPoint,setQuizPoint] = useState(null)

    const setAddQuestion=()=>{
        if(show!=="addQuestion"){
            setShow('addQuestion')
        }else{
            setShow('')
        }

    }

    const EditQuiz =()=>{
        // ShowQuestion(false)
        // setEditEnable(true)
        navigate("/add_course/edit-quiz/"+id,)
    }

    useEffect(()=>{
fetchQuestions()
    },[show])
    const fetchQuestions =async()=>{
        let result = await HttpClient.requestData("viewQandA/" +id,"GET")
        console.log(result)
        if(result && result.status){
            setQuizTitle(result.data[0].quizName)
            setQuizPoint(result.data[0].totalPoint)
                    setAllQuestion(result.data[0].question_details)

        }
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment" style={{marginLeft: "0"}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="quiz-question">
                                    <div className="skillItem">
                                        <h4>{quizTitle}</h4>
                                        <h6>Total points {quizPoint}</h6>
                                    </div>
                                    <div className="skillItem">
                                        <button type="button" className="editQuestion" onClick={EditQuiz}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <QuizQuestionList allQusetion={allQusetion} setShow={setShow} />

                           {allQusetion.length<1 && show===""  && <div className="add-questionquiz-btn">
                                    <button type="button" onClick={setAddQuestion} className="addQuestionBtn">
                                        Add Questions
                                    </button>
                                </div>} 
                                {show==="addQuestion"?
                                <QuizQuestionForm quizId={id} setShow={setShow} quizPoint={quizPoint}/>
                                :null}
                                 {allQusetion.length>0 &&<div className="buttonsQuizgrp">
                                 <button type="button" className="finish-button" onClick={()=>navigate("/add_course")}>
                                        Finish Quiz
                                    </button>
                                    <button type="button" className="question-button" onClick={()=>setShow("addQuestion")}>
                                        Add Question
                                    </button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}