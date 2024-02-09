import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import HttpClient from "../../../../utils/HttpClient";
import { toast } from "react-toastify";
import QuizQuestion from "../QuizQuestion/Index"
import { useNavigate,useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function EditQuiz() {
    const {courseId} = useOutletContext()
    const navigate = useNavigate()
    const [quizName,setquizName] = useState("")
    const [totalPoint,settotalPoint] = useState(0)
    const [showQuestion,setShowQuestion] = useState(false)
    const [quizId,setQuizId] = useState("")
    const [edit_enable,setEditEnable] = useState(false)
    const {id} = useParams()

    const AddQuiz =async(e)=>{
        e.preventDefault()
        if(quizName !="" && totalPoint !="" && courseId){
                let dataSend ={
                
                    quizName,
                    totalPoint
                }
                let result = await HttpClient.requestData("quiz/updatequizinfo/"+id,"PUT",dataSend)
                if(result && result.status){
                    navigate("/add_course/add-quiz/"+id)
                    toast.success("quiz section updated successfully")
    
                }
                else{
                    toast.warn("something error")
                }
            
          

           
        }else{
          toast.error("All fields are required")
        }
    }

    useEffect(()=>{
        fetchQuiz()
    },[])

    const fetchQuiz =async()=>{
        let result = await HttpClient.requestData("quiz/viewquizinfo/"+courseId,"GET")
        
        if(result && result.status && result.data.length>0){
            let quizData = result.data.filter((item)=>item._id===id)
            // console.log(quizData, 'gghghghghghh');
            if(quizData.length >0){
                 setquizName(result.quizData[0].quizName)
         settotalPoint(result.quizData[0].totalPoint)
            }  
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
                                        <h2 className="itemTitle">Edit Quiz</h2>
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
                                                    Edit
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