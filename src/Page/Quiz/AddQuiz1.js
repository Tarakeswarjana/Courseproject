import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
// import quizgrp from '../../../../asstes1/images/quizgrp.svg';
import edit2 from '../../asstes1/images/edit-2.png'
import quizgrp from '../../asstes1/images/quizgrp.svg'
// import QuizBox from '../QuizBox/Quizbox';
// import HttpClient from '../../../../utils/HttpClient';
import HttpClient from '../../utils/HttpClient';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AddQuiz1() {
  const { courseId } = useOutletContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [allQuiz, setAllQuiz] = useState([]);

  useEffect(() => {
    if (courseId != '') {
      fetchQuiz();
    }
  }, [courseId]);

  const fetchQuiz = async () => {
    let result = await HttpClient.requestData('quiz/viewquizinfo/' + courseId, 'GET');
    // console.log(result)
    if (result && result.status) {
      setAllQuiz(result.data);
    }
  };

  return (
    <>
      <div className="container-fluid " style={{ padding: 0 }}>
        <div className="p-3">
          <div className="_enrollment" style={{ marginLeft: 0 }}>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="_quizwrapp">
                  <div className="row">
                    <div className="col-md-5 col-12">
                      <div className="__quiz_info">
                        <h4 className="text-white font-weight-bold ">Want to add quiz for your course ?</h4>
                        <p
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: 11,
                          }}
                        >
                          Hello, please click on below button to add quiz
                        </p>
                        <br />
                        <button
                          className="text-white add_quiz_btn"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px dashed #FFFFFF',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: 12,
                            padding: '15px 30px',
                          }}
                          onClick={() => navigate('add-quiz')}
                        >
                          Add quiz1
                        </button>
                      </div>
                    </div>
                    <div className="col-md-7 col-12 position-relative">
                      <img className="__quiz_img" src={quizgrp} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
