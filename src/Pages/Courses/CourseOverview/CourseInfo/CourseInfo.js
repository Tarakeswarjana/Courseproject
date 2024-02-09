import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import downarrow from "../../../../asstes2/images/downarrow.png";
import HttpClient from "../../../../utils/HttpClient";
import Curriculum from "./Curriculum";
import Description from "./Description";
import Faq from "./Faq";
import Learn from "./Learn";
import Name from "./Name";

export default function CourseInfo() {
  const { id } = useOutletContext();

  const [courseDetails, setCourseDetails] = useState({});
  useEffect(() => {
    fetchCourseDetail();
  }, [id]);

  const fetchCourseDetail = async () => {
    let result = await HttpClient.requestData(
      "viewParticularCourses/" + id,
      "GET"
    );
    console.log(result);
    if (result && result.status && result.data.length > 0) {
      setCourseDetails(result.data[0]);
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className="tab-pane fade show active"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <div className="mt-2 mb-2">
          <div className="tab-item-wrapper">
            <Name
              courseDetails={courseDetails}
              fetchCourseDetail={fetchCourseDetail}
            />
            <Description
              courseDetails={courseDetails}
              fetchCourseDetail={fetchCourseDetail}
            />
            <Learn courseDetails={courseDetails} 
            fetchCourseDetail={fetchCourseDetail}
            />
            <Curriculum courseId={id} />
            <Faq courseDetails={courseDetails}
                        fetchCourseDetail={fetchCourseDetail}
                        />
          </div>
        </div>
      </div>
    </>
  );
}
