import React, { useEffect, useState } from "react";
import view from '../../../../asstes2/images/view.png'
import HttpClient from "../../../../utils/HttpClient";
import { useOutletContext } from "react-router-dom";
import QuizModel from "../../../../Component/Models/QuizModel";
import AddQuiz from "../../../UploadNewCourse/Quiz/AddQuiz/AddQuiz";
import AddQuiz1 from "../../../../Page/Quiz/AddQuiz1";

export default function AllQuiz() {
    const { id } = useOutletContext();
    const [showModel,setShowModel]=useState(false)
    const[quizName,setQuizName]=useState("")
    const[quizPoint,setQuizePoint]=useState("")
    const[totalStudent,setTotalStudent]=useState()

    const [allQuiz,setAllQuiz] = useState([])

    useEffect(()=>{
        fetchQuiz()
    },[id])

    const fetchQuiz=async()=>{
        let result = await HttpClient.requestData("quiz/viewquizinfo/"+id,"GET")
        console.log("quiz",result);
        if(result && result.data){
            setAllQuiz(result.data)
        }
    }
    return (
      <>
        {/* <AddQuiz1 courseId={id} /> */}
        <div
          className="tab-pane fade show active"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="mt-3 mb-3">
            {allQuiz.map(item => {
              return (
                <div className="quiz-box">
                  <div className="quiz-box1" />
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="quiz-box-wrapper">
                        <p style={{ fontWeight: 'bold', color: '#000' }}>{item.quizName}</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="quiz-box-wrapper">
                        <p>{item?.totalstudent[0]?.studentCount} students took this quiz</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-12">
                      <div className="quiz-box-wrapper">
                        <details>
                          <summary
                            onClick={() => {
                              setQuizName(item.quizName);
                              setQuizePoint(item.totalPoint);
                              setTotalStudent(item.totalstudent[0]);
                              setShowModel(true);
                            }}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                          >
                            <img src={view} alt="VIEW" style={{ marginRight: '0px' }} />
                            <h5 className="vw_dtl" style={{ fontSize: '14px', marginLeft: '4px', marginBottom: '0' }}>
                              VIEW DETAILS
                            </h5>
                          </summary>
                          {/* <p>
                                          If your browser supports this element, it should
                                          allow you to expand and collapse these details.
                                      </p> */}
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* <div className="quiz-box">
                        <div className="quiz-box2" />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="quiz-box-wrapper">
                                    <p style={{ fontWeight: "bold", color: "#000" }}>
                                        Quiz Number 02
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="quiz-box-wrapper">
                                    <p>25004 students took this quiz</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="quiz-box-wrapper">
                                    <details>
                                        <summary>
                                            <img
                                                src={view}
                                                alt="VIEW"
                                                style={{ marginRight: 10 }}
                                            />
                                            VIEW DETAILS
                                        </summary>
                                        <p>
                                            If your browser supports this element, it should
                                            allow you to expand and collapse these details.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-box">
                        <div className="quiz-box3" />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="quiz-box-wrapper">
                                    <p style={{ fontWeight: "bold", color: "#000" }}>
                                        Quiz Number 03
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="quiz-box-wrapper">
                                    <p>25004 students took this quiz</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="quiz-box-wrapper">
                                    <details>
                                        <summary>
                                            <img
                                                src={view}
                                                alt="VIEW"
                                                style={{ marginRight: 10 }}
                                            />
                                            VIEW DETAILS
                                        </summary>
                                        <p>
                                            If your browser supports this element, it should
                                            allow you to expand and collapse these details.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-box">
                        <div className="quiz-box4" />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="quiz-box-wrapper">
                                    <p style={{ fontWeight: "bold", color: "#000" }}>
                                        Quiz Number 04
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="quiz-box-wrapper">
                                    <p>25004 students took this quiz</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="quiz-box-wrapper">
                                    <details>
                                        <summary>
                                            <img
                                                src={view}
                                                alt="VIEW"
                                                style={{ marginRight: 10 }}
                                            />
                                            VIEW DETAILS
                                        </summary>
                                        <p>
                                            If your browser supports this element, it should
                                            allow you to expand and collapse these details.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-box">
                        <div className="quiz-box5" />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="quiz-box-wrapper">
                                    <p style={{ fontWeight: "bold", color: "#000" }}>
                                        Quiz Number 05
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="quiz-box-wrapper">
                                    <p>25004 students took this quiz</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="quiz-box-wrapper">
                                    <details>
                                        <summary>
                                            <img
                                                src={view}
                                                alt="VIEW"
                                                style={{ marginRight: 10 }}
                                            />
                                            VIEW DETAILS
                                        </summary>
                                        <p>
                                            If your browser supports this element, it should
                                            allow you to expand and collapse these details.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-box">
                        <div className="quiz-box6" />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="quiz-box-wrapper">
                                    <p style={{ fontWeight: "bold", color: "#000" }}>
                                        Quiz Number 06
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="quiz-box-wrapper">
                                    <p>25004 students took this quiz</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="quiz-box-wrapper">
                                    <details>
                                        <summary>
                                            <img
                                                src={view}
                                                alt="VIEW"
                                                style={{ marginRight: 10 }}
                                            />
                                            VIEW DETAILS
                                        </summary>
                                        <p>
                                            If your browser supports this element, it should
                                            allow you to expand and collapse these details.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
        {showModel && (
          <QuizModel
            show={showModel}
            handleClose={setShowModel}
            quizName={quizName}
            quizPoint={quizPoint}
            totalStudent={totalStudent}
          />
        )}
      </>
    );
}