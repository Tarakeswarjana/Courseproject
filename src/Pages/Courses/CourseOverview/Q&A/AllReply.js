import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Ellipse12 from "../../../../asstes2/images/Ellipse12.png";
import HttpClient from "../../../../utils/HttpClient";
import { useOutletContext } from "react-router-dom";

function AllReply() {
  const [show, setShow] = useState(false);
  // const { id } = useParams();
  const {id}=useOutletContext()

  const [reply, setReply] = useState("");

  const { state } = useLocation();
  const [question, setQuestion] = useState({});
  // console.log("sns",useLocation());

  const submitAnswer = async () => {
    if (reply != "") {
      let dataSend = {
        questionId: question?._id,
        reply: reply,
        courseId: state.courseId,
      };
      // console.log("reply",dataSend);
      // return false
      let result = await HttpClient.requestData("addReply", "POST", dataSend);
      if (result && result.status) {
        alert("reply successfully");
        fetchReplys();
        setShow(false);
      } else {
        alert(result.message);
      }
    } else {
      alert("please write some reply");
    }
  };

  useEffect(() => {
    fetchReplys();
  }, []);

  const fetchReplys = async () => {
    let result = await HttpClient.requestData(
      "viewQuestionAnswerReplyList/" + id,
      "GET"
    );
    console.log(result);
    if (result && result.status) {
      setQuestion(result.data[0]);
    }
  };
  return (
    <div
      className="mediaObjectPart mediaobjectpart_again mediaobjectpart_again_wrap"
      style={{ height: "auto" }}
    >
      <div className="media-part row">
        <div className="media col-lg-9  col-md-12 col-sm-12 col-12">
          <img
            src={question?.student?.image}
            className="mr-3"
            alt="..."
            height={50}
            width={50}
            style={{ borderRadius: "50%" }}
          />
          <div className="media-body">
            <h3>{question?.question}</h3>
            <p>{question?.answer?.answer}</p>
            <span className="adam-text">Adam, 11 months ago</span>
            <a className="rply-text" onClick={() => setShow(!show)}>
              Reply
            </a>
          </div>
        </div>
        {show && (
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 post-answer-part">
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Reply question"
                value={reply}
                onChange={(val) => setReply(val.target.value)}
              />
            </div>
            <div className="mt-2 mb-5">
              <button
                type="submit"
                className="btn btn1 mb-2"
                onClick={submitAnswer}
              >
                Post Reply
              </button>
              <button
                type="submit"
                className="btn btn2 mb-2"
                onClick={() => setShow(!show)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div className="row col-lg-3 col-md-12 col-sm-12 col-12  media-icon-part">
          <div>
            <a href="#">
              <i className="fa fa-arrow-circle-up" aria-hidden="true" />
              <span>200</span>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-commenting" aria-hidden="true" />
              <span>200</span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 40px" }} className="reply-part-area">
        <h4 className="reply-text">
          Showing {question?.reply?.length} replies
        </h4>
        {question?.reply?.map((item, index) => {
          return (
            <div
              className="media col-lg-9 col-md-12 col-sm-12 col-12"
              key={index}
            >
              <img
                src={item.userData?.image}
                className="mr-3"
                alt="..."
                style={{ width: 50, borderRadius: "50%", height: 50 }}
              />
              <div className="media-body">
                <p>{item.reply}.</p>
                <a
                  href="#"
                  className="rply-text"
                  style={{ fontSize: 14, textDecoration: "underline" }}
                >
                  Replied By Instructor
                </a>
                <span className="adam-text">Adam, 11 months ago</span>
              </div>
            </div>
          );
        })}
        {/* <div
                className="media col-lg-9 col-md-12 col-sm-12 col-12"
                style={{ marginTop: 30 }}
              >
                <img
                  src={Ellipse12}
                  className="mr-3"
                  alt="..."
                  style={{ width: 50 }}
                />
                <div className="media-body">
                  <p>
                    Akash, I ave explained it in next lectures. you can watch linked
                    list creation videos. in this lecture just focus on Display. if you
                    continue lectures in same order it will be better.
                  </p>
                  <a
                    href="#"
                    className="rply-text"
                    style={{ fontSize: 14, textDecoration: "underline" }}
                  >
                    Replied By Instructor
                  </a>
                  <span className="adam-text">Adam, 11 months ago</span>
                </div>
              </div> */}
      </div>
    </div>
  );
}

export default AllReply;
