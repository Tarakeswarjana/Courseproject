import React, { useEffect, useState } from "react";
import documentsicon from "../../../asstes1/images/documentsicon.png";
import globeicon from "../../../asstes1/images/globeicon.png";
import HttpClient from "../../../utils/HttpClient";
import AddSection from "./AddSection";
import CurriculumContent from "./CurriculumContent";
export default function UploadCourseCurriculum({ courseId ,openQuiz}) {
  const [section, setSection] = useState([]);
  const sectionFecth = async () => {
    if (courseId != "") {
      let result = await HttpClient.requestData(
        "viewsection/" + courseId,
        "GET"
      );
      console.log("allsection",result)
      if (result && result.status) {
        setSection(result.data);
      }
    }
  };
  useEffect(() => {
    sectionFecth();
  }, [courseId]);
  return (
    <>
    
        <div className="_tab_twomain bg-white w-100">
          <div className="row">
            <AddSection
              section={section}
              setSection={setSection}
              courseId={courseId}
              sectionFecth={sectionFecth}
            />
            <div className="col-md-8 col-12">
              <div className="tab-content" id="v-pills-tabContent">
                {section.map((item, index) => {
                  return (
                    <CurriculumContent
                      key={item._id}
                      index={index}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button
          className="_next_btn mx-auto d-table"
          style={{ background: "#138BFB", borderRadius: 10 }}
          // id="pills-contact-tab"
          // data-toggle="pill" 
          // href="#pills-contact"
          // role="tab"
          // aria-controls="pills-contact"
          // aria-selected="false"
          onClick={()=>openQuiz()}
        >
         Save & Next
        </button>
    </>
  );
}
