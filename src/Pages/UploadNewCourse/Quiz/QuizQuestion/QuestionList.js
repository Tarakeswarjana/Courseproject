import React from "react";
import edit2 from '../../../../asstes1/images/edit-2.png'
import { useNavigate } from "react-router-dom";

export default function QuizQuestionList({allQusetion,setShow}){
    const navigate = useNavigate()

    const editQuestion =(id)=>{
        setShow("addQuestion")
        navigate("/add_course/edit-question/"+id)
    }
    return(
        <>
       {allQusetion.map((item,index)=>{
           return <div className="questionList" key={index}>
           <div className="questionList_wrap">
               <div className="hamburgger">
                   <span />
                   <span />
                   <span />
               </div>
               <h6>{ index <10 &&"0"}{index +1}</h6>
               <p>{item.question}?</p>
           </div>
           <div className="questionList_wrap">
               <h5>{item.questionType}</h5>
               <button>
                   <img src={edit2} alt="edit button" onClick={()=>editQuestion(item._id)}/>
               </button>
           </div>
       </div>
       })}  
                              
                              
        </>
    )
}