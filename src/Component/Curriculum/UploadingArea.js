import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import AddContentBox from "./AddContentBox";
import HttpClient from "../../utils/HttpClient";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function UploadingArea({
  contentName,
  loading,
  contentId,
  setcontentName,
  contentType,
  contentUrl,
  sectionId,
  setLoad
}) {
  const [uploadArea, setUploadArea] = useState(false);
  const [name, setName] = useState("");
  const [Rloading, setLoading] = useState(null);
  const [Resources, setResource] = useState([]);

  const AddResources = () => {
    setUploadArea(true);
  };

  const contentResult = async (data) => {
    // console.log("video",data)
    setUploadArea(false);
    if (data) {
      let AddRes = {
        resourceName: data.name,
        resourceType: data.type,
        resourceUrl: data.url,
      };
      setResource((prev) => [...prev, AddRes]);
    }
  };

  const cancelRequest = () => {
    setcontentName("");
    setLoad(null)
  };

  const SaveContent = async () => {
    if (contentName != "" && contentType != "" && contentUrl != "") {
      let dataSend = {
        sectionId,
        contentName,
        contentType,
        contentUrl,
        resource: Resources,
      };
      // console.log(dataSend)
      let result = await HttpClient.requestData("addcontent", "POST", dataSend);
      console.log(result);
      if (result && result.status) {
        setcontentName("");
        toast.success("content added successfully");
      }
    }
  };
  return (
    <Fragment>
      {!uploadArea ? (
        <div className="_Add_ContentBox" style={{ display: "block" }}>
          <h6
            className="d-flex justify-content-between pb-2"
            style={{ color: "#138BFB", fontSize: 14 }}
          >
            Add Content
            <span style={{ color: "#92929D" }} onClick={cancelRequest}>
              Cancel
            </span>
          </h6>
          <div className="_upload_wrp" style={{ display: "block" }}>
            <div className="_uploading_box">
              <h6 className="text-dark mb-0 font-weight-bold justify-content-between d-flex flex-column flex-lg-row flex-md-column flex-sm-column">
                {contentName}
                {loading && loading < 100 && (
                  <span style={{ color: "#138BFB", fontSize: 13 }}>
                    {loading && ` Uploading - ${loading}%`}
                    <div style={{ width: 25, height: 25 ,display:"inline-block"}} >
                      <CircularProgressbar value={loading} />
                    </div>
                  </span>
                )} {loading===100 && (
                  <span style={{ color: "#00B670", fontSize: 13 }}>
                    completed
                    <i
                      className="fa fa-check-circle ml-3"
                      aria-hidden="true"
                      style={{ fontSize: 20 }}
                    />
                  </span>
                )}
              </h6>
            </div>
            <h6 className="text-dark font-weight-bold py-3">Resources</h6>
            {Resources.map((item, index) => {
              return (
                <div className="_uploading_box" key={index}>
                  <h6 className="text-dark mb-0 font-weight-bold justify-content-between d-flex flex-column flex-lg-row flex-md-column flex-sm-column">
                    {item.resourceName}
                    <span style={{ color: "#00B670", fontSize: 13 }}>
                      completed
                      <i
                        className="fa fa-check-circle ml-3"
                        aria-hidden="true"
                        style={{ fontSize: 20 }}
                      />
                    </span>
                  </h6>
                </div>
              );
            })}
            {Rloading && Rloading < 100 && (
              <div className="_uploading_box">
                <h6 className="text-dark mb-0 font-weight-bold justify-content-between d-flex flex-column flex-lg-row flex-md-column flex-sm-column">
                  {name}
                  <span style={{ color: "#138BFB", fontSize: 13 }}>
                    {Rloading && ` Uploading - ${Rloading}%`}
                    <div style={{ width: 25, height: 25 ,display:"inline-block"}} >
                      <CircularProgressbar value={Rloading} />
                    </div>
                  </span>
                  {/* <span style={{ color: "#00B670", fontSize: 13 }}>
                  completed
                  <i
                    className="fa fa-check-circle ml-3"
                    aria-hidden="true"
                    style={{ fontSize: 20 }}
                  />
                </span> */}
                </h6>
              </div>
            )}
            <div className="mt-3 d-flex flex-column flex-lg-row flex-md-row flex-sm-column justify-content-between">
              <button
                className="px-3 py-2"
                style={{
                  border: "1px solid #BDBDBD",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              >
                <i className="fa fa-check-circle-o mr-2" aria-hidden="true" />
                Make Video Public
              </button>
              <div className="mt-3 mt-lg-0 mt-md-3 mt-sm-3">
                <button
                  className="px-3 py-2 mr-2 resourcesBtn"
                  style={{
                    background: "rgba(19, 139, 251, 0.05)",
                    border: "1px solid #138BFB",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#138BFB",
                  }}
                  onClick={AddResources}
                >
                  Add Resources
                </button>
                <button
                  className="px-3 py-2 border-0 text-white"
                  style={{
                    background: "#00B670",
                    borderRadius: 8,
                    fontSize: 13,
                  }}
                  onClick={SaveContent}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AddContentBox
          setBoxShow={setUploadArea}
          contentResult={contentResult}
          setName={setName}
          setLoading={setLoading}
          hideContainer={setUploadArea}
        />
      )}
    </Fragment>
  );
}

export default UploadingArea;
