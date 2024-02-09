import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddContentBox from "../../../Component/Curriculum/AddContentBox";
import UploadingArea from "../../../Component/Curriculum/UploadingArea";
import HttpClient from "../../../utils/HttpClient";
import Allcontent from "./Allcontent";

function CurriculumContent({ index, item }) {
  const [boxShow, setBoxShow] = useState(false);
  const [uploadArea, setUploadArea] = useState(false);

  const [contentName, setcontentName] = useState("");
  const [contentType, setcontentType] = useState("");
  const [contentUrl, setcontentUrl] = useState("");
  const [loading, setLoading] = useState(null);
  const [contentId, setContentId] = useState("");

  const contentResult = async (data) => {
    // console.log("video", data);

    if (data) {
      
      setcontentName(data.name)
      setcontentType(data.type)
      setcontentUrl(data.url)
      // alert("n")
      // let dataSend = {
      //   sectionId: item._id,
      //   contentName: data.name,
      //   contentType: data.type,
      //   contentUrl: data.url,
      // };
      // console.log(dataSend);
      // let result = await HttpClient.requestData("addcontent", "POST", dataSend);
      // console.log("content Added", result);
      // if (result && result.status) {
      //   setContentId(result.data._id);
      // }
    }
  };


  useEffect(() => {
    
  }, []);

  
  return (
    <div
      className="tab-pane fade"
      id={`v-pills-${index}`}
      role="tabpanel"
      aria-labelledby={`v-pills-${index}-tab`}
    >
      {contentName === "" ? (
        <>
          {boxShow ? (
            <AddContentBox
              setName={setcontentName}
              setLoading={setLoading}
              contentResult={contentResult}
              setBoxShow={setBoxShow}
              id={item._id}
              setType={setcontentType}
              hideContainer={setBoxShow}
            />
          ) : (
            <div className="_Add_Content d-flex flex-column">
              <Allcontent id={item._id} />

              <div className="d-flex flex-column justify-content-center h-100">
                <button
                  className="border-0 px-3 py-2 text-white"
                  style={{
                    background: "#138BFB",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  onClick={() => setBoxShow(!boxShow)}
                >
                  Add Content
                </button>
                {/* <button
                  className="border-0 bg-transparent mt-2"
                  style={{ fontSize: 12 }}
                >
                  <i className="fa fa-pencil mr-2" aria-hidden="true" />
                  Edit Section
                </button> */}
              </div>
            </div>
          )}
        </>
      ) : (
        <UploadingArea
          contentId={contentId}
          contentName={contentName}
          loading={loading}
          setcontentName={setcontentName}
          contentType={contentType}
          contentUrl={contentUrl}
          sectionId ={item._id}
          setLoad={setLoading}
        />
      )}
    </div>
  );
}

export default CurriculumContent;
