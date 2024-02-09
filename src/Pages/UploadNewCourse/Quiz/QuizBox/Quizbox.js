import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HttpClient from "../../../../utils/HttpClient";
import { toast } from "react-toastify";
import QuizQuestion from "../QuizQuestion/Index"
import { useNavigate,useOutletContext } from "react-router-dom";

export default function QuizBox() {
    const {courseId} = useOutletContext()
    const navigate = useNavigate()
    const [quizName,setquizName] = useState("")
    const [totalPoint,settotalPoint] = useState(0)
    const [showQuestion,setShowQuestion] = useState(false)
    const [quizId,setQuizId] = useState("")
    const [edit_enable,setEditEnable] = useState(false)

    const AddQuiz =async(e)=>{
        e.preventDefault()
        if(quizName !="" && totalPoint !="" && courseId){
            if(edit_enable){
                let dataSend ={
                
                    quizName,
                    totalPoint
                }
                let result = await HttpClient.requestData("updatequizinfo/"+courseId,"PUT",dataSend)
                if(result && result.status){
                    setEditEnable(false)
                    setShowQuestion(true)
                    // setQuizId(result.data._id)
                    toast.success("quiz section added successfully")
    
                }
                else{
                    toast.warn("something error")
                }
            }
            else{
                let dataSend = {
                    courseId,
                    quizName,
                    totalPoint
                }
                let result = await HttpClient.requestData("quiz/addquizinfo","POST",dataSend)
                if(result && result.status){
                    navigate("/add_course/add-quiz/"+result.data._id)
                    setShowQuestion(true)
                    setQuizId(result.data._id)
                    toast.success("quiz section added successfully")
    
                }
                else{
                    toast.warn("something error")
                }
            }

           
        }else{
          toast.error("All fields are required")
        }
    }
    return (
        <>
        <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment" style={{marginLeft: "0"}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="quiz-box-form">
                                    <div className="quiz-box-form-item">
                                        <h2 className="itemTitle">Add Quiz</h2>
                                        <form>
                                            <div className="form-group quiz-create">
                                                <label htmlFor="sel1">Quiz Name:</label>
                                                <input type="text"
                                                className="form-control"
                                                id="quizName"
                                                name="quizname"
                                                value={quizName}
                                                onChange={(e)=>setquizName(e.target.value)}/>
                                             
                                                <label htmlFor="sel1">Total Points</label>
                                                <input type="number"
                                                className="form-control"
                                           
                                                value={totalPoint}
                                                onChange={(e)=>settotalPoint(e.target.value)}/>
                                               
                                                {/* <Link to={"/quiz_question"}> */}
                                                <button  className="quiz-nextatep" onClick={AddQuiz}>
                                                    Next
                                                </button>
                                                {/* </Link> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </>
    )
}