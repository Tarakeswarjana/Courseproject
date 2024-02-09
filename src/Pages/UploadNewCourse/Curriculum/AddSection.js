import React, { useState } from "react";
import HttpClient from "../../../utils/HttpClient";

export default function AddSection({
  section,
  setSection,
  courseId,
  sectionFecth,
}) {
  const [secTitle, setSectionTitle] = useState("");
  const [inputShow, setInputShow] = useState(false);

  const SubmitSection = async () => {
    if (secTitle != "" && courseId != "") {
      // alert("km")
      let dataSend = {
        courseId,
        secTitle,
      };
      let result = await HttpClient.requestData("addsection", "POST", dataSend);
      console.log("section",result);
      if (result && result.status) {
        sectionFecth();
      }
      // setSection((prev)=>[...prev,secTitle])
      setInputShow(!inputShow);
    }
  };
  return (
    <div className="col-lg-4 col-md-12 col-12">
      <div className="_add_sectionwrp">
        <div
          className="nav flex-column nav-pills"
          style={{position: "relative", maxWidth: "100%"}}
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {section.map((item, index) => {
            return (
              <a
                className="nav-link"
                style={{marginRight: 0}}
                id={`v-pills-${index}-tab`}
                data-toggle="pill"
                href={`#v-pills-${index}`}
                role="tab"
                aria-controls={`v-pills-${index}`}
                aria-selected="false"
                key={item._id}
              >
                {" "}
                <p className="section_text">
                  Section {index + 1}:{item.secTitle}
                </p>
              </a>
            );
          })}
        </div>
        {inputShow ? (
          <div className="_add_area mt-3" style={{ display: "block" }}>
            <input
              className="px-3 py-2 w-100"
              id="addselectioninput"
              type="text"
              name=""
              placeholder="Build Your Dreams"
              style={{
                background: "#FDFDFD",
                border: "1px solid #E2E2EA",
                borderRadius: 8,
              }}
              value={secTitle}
              onChange={(val) => setSectionTitle(val.target.value)}
            />
            <button
              className="btn_section mt-2 "
              id=""
              style={{ fontSize: "14", }}
              onClick={SubmitSection}
            >
              Add Section
            </button>
          </div>
        ) : (
          <button
            className="border-0 bg-transparent p-0 mt-2 "
            id="addselectionbtn"
            style={{ color: "#138BFB", fontSize: 14 }}
            onClick={() => setInputShow(!inputShow)}
          >
            + Add Section
          </button>
        )}
      </div>
    </div>
  );
}
