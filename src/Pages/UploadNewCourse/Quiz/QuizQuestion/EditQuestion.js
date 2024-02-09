import React, { useState } from "react";
import { toast } from "react-toastify";
import dots4 from "../../../../asstes1/images/4dots.png";
import HttpClient from "../../../../utils/HttpClient";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditQuestion() {
    let {id} = useParams()
  const navigate = useNavigate();
  const [question, setquestion] = useState("");
  const [questionType, setquestionType] = useState("");
  const [choice, setchoice] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });
  const [answer, setanswer] = useState("");
  const [questionPoints, setquestionPoints] = useState("");
  const SubmitQuestion = async () => {
    if (question != "" && questionType != "" && questionPoints !=""   ) {
      let data = {
        // quizId,
        question,
        questionType,
        choice,
        answer,
        questionPoints,
      };
      console.log("data", data);
      let result = await HttpClient.requestData("updateQandA/"+id, "PUT", data);
      if (result && result.status) {
        toast.success("Question Updated successfully");
        // setShow("showQuestion");
        navigate("/add_course")
      } else{
        toast.warn(result.message)
      }
    }
  
    else {
      toast.warn("please fill up all the feilds");
    }
  };

  useEffect(()=>{
fetchQuestion()
  },[])
  const fetchQuestion =async()=>{
    let result = await HttpClient.requestData("question-fetch/"+ id ,"GET")
    // console.log(result)
    if(result && result.status && result.data.length>0){
        let data = result.data[0]
        setquestion(data.question)
        setquestionType(data.questionType)
        setquestionPoints(data.questionPoints)
        setanswer(data.answer)
    }
  }

  return (
    <>
      <div className="quiz-box-form">
        <div className="quiz-box-form-item">
          <div className="top-sec">
            <h2 className="itemTitle">Edit Question</h2>
            <h3
              className="cancelBoxQuiz"
              onClick={() => navigate("/add_course")}
            >
              Cancel
            </h3>
          </div>
          <form>
            <div className="form-group quiz-qstncreate">
              <label htmlFor="sel1">Question:</label>
              <input
                type="text"
                className="form-control"
                id="sel1"
                placeholder="Type the question here"
                value={question}
                onChange={(e) => setquestion(e.target.value)}
              />
              <label htmlFor="sel1">Question Type:</label>
              <select
                className="form-control"
                id="totalPoints"
                name="totalPoints"
                value={questionType}
                onChange={(e) => setquestionType(e.target.value)}
              >
                <option value="">Select Question Type</option>
                <option value="mcq">MCQ</option>
                <option value="written">Fill in the blanks</option>
              </select>
              <label htmlFor="sel1">Question Points:</label>
              <input
                type="number"
                className="form-control"
                id="sel1"
                placeholder=" question point"
                value={questionPoints}
                onChange={(e) => setquestionPoints(e.target.value)}
              />

            </div>
          </form>
        </div>
        <div className="answer-area">
          {questionType === "written" && (
            <div className="from-group">
              <label>Answer Explaination</label>
              <textarea
                placeholder="Describe your answer"
                value={answer}
                onChange={(e) => setanswer(e.target.value)}
              />
            </div>
          )}
          {questionType === "mcq" && (
            <>
              <div className="quiz-choicesLabel">
                <label htmlFor="sel1">Choices</label>
              </div>
              <div className="choicesQuiz" style={{ margin: 0 }}>
                <div className="choicesSection">
                  <p>
                    <img src={dots4} />
                    <input
                      type="text"
                      placeholder="Type option A"
                      className=""
                      value={choice.A}
                      onChange={(e) => {
                        let A = e.target.value;
                        setchoice((prev) => {
                          return { ...prev, A };
                        });
                      }}
                    />
                  </p>
                </div>
                <div className="choicesSection">
                  <p>
                    <img src={dots4} />
                    <input
                      type="text"
                      placeholder="Type option B"
                      className=""
                      value={choice.B}
                      onChange={(e) => {
                        let B = e.target.value;
                        setchoice((prev) => {
                          return { ...prev, B };
                        });
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="choicesQuiz">
                <div className="choicesSection">
                  <p>
                    <img src={dots4} />
                    <input
                      type="text"
                      placeholder="Type option C"
                      className=""
                      value={choice.C}
                      onChange={(e) => {
                        let C = e.target.value;
                        setchoice((prev) => {
                          return { ...prev, C };
                        });
                      }}
                    />
                  </p>
                </div>
                <div className="choicesSection">
                  <p>
                    <img src={dots4} />
                    <input
                      type="text"
                      placeholder="Type option D"
                      className=""
                      value={choice.D}
                      onChange={(e) => {
                        let D = e.target.value;
                        setchoice((prev) => {
                          return { ...prev, D };
                        });
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="boottmForm">
                <form>
                  <div className="form-group quiz-qstncreate">
                    <label htmlFor="sel1">Select Answer:</label>
                    <select
                      className="form-control answersELECT"
                      id="totalPoints"
                      name="totalPoints"
                      value={answer}
                      onChange={(val)=>setquestionPoints(val.target.value)}
                    >
                      <option value="">Select answer among 4 choices</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>

                    </select>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <button
          type="button"
          className="btn-save save__BTn"
          onClick={SubmitQuestion}
        >
          Edit
        </button>
      </div>
    </>
  );
}
