import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DataTable from "react-data-table-component";
import HttpClient from "../../utils/HttpClient";
import a from "../../asstes1/images/design2.png";
import { CircularProgressbar } from "react-circular-progressbar";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { addEventBooth, updateEventBooth } from "../../Api/eventapi";
import ViewBooth from "./ViewBooth";
// import { toast, ToastContainer } from "react-toastify";

var body = {
  eventId: "",
  logo: [],
  companyName: "",
  companyDetails: "",
  bannerImage: [],
  ceoName: "",
  ceoDesignation: "",
  ceoImage: [],
  ceoDescription: "",
  introVideo: "",
};
const Boothadd = () => {
  const [boothData, setBoothData] = useState(body);
  const [editEnable, setEditEnable] = useState(false);
  const [uploading, setUploading] = useState(null);
  const childFunc = React.useRef(null);

  // console.log(useLocation());
  let id = useLocation()?.state?.id;
  console.log(id);

  const ImageHandle = async (file, fileType) => {
    // console.log(fileType);
    for (let index = 0; index < file.length; index++) {
      // const element = file[index];
      let form = new FormData();
      form.append("image", file[index]);
      let result = await HttpClient.fileUplode(
        "uploadEventImage",
        "POST",
        form
      );
      // console.log(result);
      if (result && result.status) {
        if (fileType === "logo")
          setBoothData({
            ...boothData,
            logo: [...boothData.logo, result.url],
          });
        else if (fileType === "bannerImage")
          setBoothData({
            ...boothData,
            bannerImage: [...boothData.bannerImage, result.url],
          });
        else if (fileType === "ceoImage")
          setBoothData({
            ...boothData,
            ceoImage: [...boothData.ceoImage, result.url],
          });
      }
    }
  };
  const VideoHandel = async (file) => {
    // let video=new FormData()
    // video.append("video",file[0])
    let result = await HttpClient.uploadFileRequest(
      "uploadBoothVideo",
      file[0],
      (data) => {
        console.log(data);
        setUploading(data);
      }
    );
    console.log(result);
    if (result && result.status) {
      setBoothData({
        ...boothData,
        introVideo: result.originalUrl,
      });
    }
  };

  const Submit = async () => {
    let data = {
      ...boothData,
      eventId: id,
    };
    if (
      boothData.logo.length >= 1 &&
      boothData.companyName !== "" &&
      boothData.companyDetails !== "" &&
      boothData.ceoName !== "" &&
      boothData.ceoDesignation !== "" &&
      boothData.ceoDescription !== "" &&
      boothData.introVideo !== "" &&
      boothData.bannerImage.length >= 1 &&
      boothData.ceoImage.length >= 1
    ) {
      if (editEnable) {
        console.log("edit",boothData._id,data);
        let res= await updateEventBooth(boothData._id,data)
        if(res && res.status){
          setBoothData(body);
          setUploading(null);
          setEditEnable(false)
          childFunc.current();
          toast.success(res.message);
        }
      } else {
       
        console.log("send Data", data);
        const result = await addEventBooth(data);
        console.log("result", result);
        if (result && result.status) {
          setBoothData(body);
          setUploading(null);
          childFunc.current();
          toast.success(result.message);
        }
      }
    } else {
      toast.warn("Required Fild ****");
    }
  };

  const handleEdit = (data) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("data", data);
    setBoothData(data);
    setEditEnable(true);
  };
  console.log("boothData", boothData);
  // console.log(boothData);


  const deleteImage=(item ,type)=>{
    if(type==="logo"){
      let deletedArr=boothData.logo.filter(e=>e!==item)
      setBoothData({
        ...boothData,
        logo:deletedArr
      })
    }
    else if(type==="bannerImage"){
      let deletedArr=boothData.bannerImage.filter(e=>e!==item)
      setBoothData({
        ...boothData,
        bannerImage:deletedArr
      })
    }
    else if(type==="ceoImage"){
      let deletedArr=boothData.ceoImage.filter(e=>e!==item)
      setBoothData({
        ...boothData,
        ceoImage:deletedArr
      })
    }
  }
  return (
    <>
      <div className="container-fluid ">
        <ToastContainer />
        <div className="p-3">
          <div className="_enrollment createevent_cnt_area">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="page-title-box d-flex flex-wrap align-items-center justify-content-between">
                  <h4 className="mb-0">BOOTH</h4>
                  <div className="page-title-right">
                    <nav className aria-label="breadcrumb">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/events">Booth</a>
                        </li>
                        <li
                          className="active breadcrumb-item"
                          aria-current="page"
                        >
                          Add &amp; Manage Booths
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="card_body_main card">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Company Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0">
                        <input
                          id="example-text-input"
                          type="text"
                          className="form-control form-control"
                          value={boothData.companyName}
                          onChange={(e) => {
                            setBoothData({
                              ...boothData,
                              companyName: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Logo<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0 uploadingPart">
                        <div className="d-flex imgRowUpload">
                          <label className="form_label btn-danger btn">
                            <input
                              type="file"
                              className="form-control"
                              id="uploadFile"
                              onChange={(e) => {
                                ImageHandle(e.target.files, "logo");
                              }}
                            />
                            + Add Logo
                          </label>
                          <div className="imageRow">
                            {boothData.logo.map((item, index) => {
                              // console.log(item);
                              return (
                                <div
                                  style={{ position: "relative" }}
                                  key={index}
                                >
                                  <img src={item} />
                                  <p className="dltIcon">
                                    <i
                                    style={{cursor:"pointer"}}
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                      onClick={()=>{
                                        deleteImage(item,"logo")
                                      }}
                                    ></i>
                                  </p>
                                </div>
                              );
                            })}

                            {/* <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div>
                            <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div> */}
                          </div>
                        </div>
                        <p style={{ color: "red", marginTop: "15px" }}>
                          [Image size should be in dimension 500 x 500 px]
                        </p>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Company Details<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0">
                        <input
                          id="example-text-input"
                          type="text"
                          className="form-control form-control"
                          placeholder="Enter your company details here..."
                          value={boothData.companyDetails}
                          onChange={(e) => {
                            setBoothData({
                              ...boothData,
                              companyDetails: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Banner Image<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0 uploadingPart">
                        <div className="d-flex imgRowUpload">
                          <label className="form_label btn-danger btn">
                            <input
                              type="file"
                              className="form-control"
                              id="uploadFile"
                              onChange={(e) => {
                                ImageHandle(e.target.files, "bannerImage");
                              }}
                            />
                            + Add Logo
                          </label>
                          <div className="imageRow">
                            {boothData?.bannerImage?.map((item, index) => {
                              return (
                                <div
                                  style={{ position: "relative" }}
                                  key={index}
                                >
                                  <img src={item} />
                                  <p className="dltIcon">
                                    <i
                                    style={{cursor:"pointer"}}
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                      onClick={()=>{
                                        deleteImage(item,"bannerImage")
                                      }}
                                    ></i>
                                  </p>
                                </div>
                              );
                            })}

                            {/* <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div>
                            <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div> */}
                          </div>
                        </div>
                        <p style={{ color: "red" }}>
                          [Image size should be in dimension 500 x 500 px]
                        </p>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        CEO Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0">
                        <input
                          id="example-text-input"
                          type="text"
                          className="form-control form-control"
                          value={boothData.ceoName}
                          onChange={(e) => {
                            setBoothData({
                              ...boothData,
                              ceoName: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        CEO Designation<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0">
                        <input
                          id="example-text-input"
                          type="text"
                          className="form-control form-control"
                          value={boothData.ceoDesignation}
                          onChange={(e) => {
                            setBoothData({
                              ...boothData,
                              ceoDesignation: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        CEO Image<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0 uploadingPart">
                        <div className="d-flex imgRowUpload">
                          <label className="form_label btn-danger btn">
                            <input
                              type="file"
                              className="form-control"
                              id="uploadFile"
                              onChange={(e) => {
                                ImageHandle(e.target.files, "ceoImage");
                              }}
                            />
                            + Add Logo
                          </label>
                          <div className="imageRow">
                            {boothData?.ceoImage?.map((item, index) => {
                              return (
                                <div
                                  style={{ position: "relative" }}
                                  key={index}
                                >
                                  <img src={item} />
                                  <p className="dltIcon">
                                    <i
                                    style={{cursor:"pointer"}}
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                      onClick={()=>{
                                        deleteImage(item,"ceoImage")
                                      }}
                                    ></i>
                                  </p>
                                </div>
                              );
                            })}

                            {/* <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div>
                            <div style={{ position: "relative" }}>
                              <img src={a} />
                              <p className="dltIcon">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </div> */}
                          </div>
                        </div>
                        <p style={{ color: "red" }}>
                          [Image size should be in dimension 500 x 500 px]
                        </p>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        CEO Description<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Enter your description here..."
                          style={{ height: "60px" }}
                          value={boothData.ceoDescription}
                          onChange={(e) => {
                            setBoothData({
                              ...boothData,
                              ceoDescription: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Intro Video<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-10 p-0 row">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              onChange={(e) => {
                                VideoHandel(e.target.files);
                              }}
                            />
                            {uploading && uploading < 100 && (
                              <span style={{ color: "#138BFB", fontSize: 13 }}>
                                {uploading && ` Uploading - ${uploading}%`}
                                <div
                                  style={{
                                    width: 25,
                                    height: 25,
                                    display: "inline-block",
                                  }}
                                >
                                  <CircularProgressbar value={uploading} />
                                </div>
                              </span>
                            )}{" "}
                            {uploading === 100 && (
                              <span style={{ color: "#00B670", fontSize: 13 }}>
                                completed
                                <i
                                  className="fa fa-check-circle ml-3"
                                  aria-hidden="true"
                                  style={{ fontSize: 20 }}
                                />
                              </span>
                            )}
                            <p style={{ color: "red" }}>
                              [video should be in dimensions 1080 * 720 px]
                            </p>
                          </div>
                          {/* <div style={{height:"100px",width:"100px",border:"1px solid"}} >
                    <CircularProgressbar value={uploading} />

                    </div> */}
                          <div className="col-md-6">
                            {" "}
                            <div className="video_box">
                              <ReactPlayer
                                url={boothData?.introVideo}
                                autoPlay={true}
                                controls={true}
                                playing={true}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row"></div>
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "5px",
                        WebkitTextAlign: "right",
                        textAlign: "right",
                      }}
                    >
                      [Note: Asterisk (<span style={{ color: "red" }}>*</span>)
                      denotes the mandatory field.]
                    </p>
                    <div className="mb-0 form-group">
                      <div className="button-items pt-4">
                        <button
                          type="button"
                          className="waves-effect waves-light mr-1 btn btn-primary"
                          onClick={Submit}
                        >
                          {editEnable ? "Update" : "Submit"}
                          <i className="ri-arrow-right-line align-middle ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ViewBooth id={id} childFunc={childFunc} handleEdit={handleEdit}/>
          </div>
        </div>
      </div>
      {/* <Viewsession id={eventId} childFunc={childFunc} handleEdit={handleEdit} /> */}
    </>
  );
};

export default Boothadd;
