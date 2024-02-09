import React from "react";
import { Outlet } from "react-router-dom";
import AllReply from "./AllReply";
import { useOutletContext } from "react-router-dom";


export default function QandA() {

  const { id } = useOutletContext();
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-qna"
        role="tabpanel"
        aria-labelledby="pills-qna-tab"
      >
        <div className="questions_answers_section">
         

    <Outlet context={{courseId:id}}/>
        </div>
      </div>
    </>
  );
}
