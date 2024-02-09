import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addEventSession, updateSession } from "../../Api/eventapi";
import DataTable from "react-data-table-component";
import HttpClient from "../../utils/HttpClient";
import Viewsession from "./Viewsession";
import TextBox from "../../customComponent/TextBox";
import moment from "moment";
const body = {
  name: "",
  details: "",
  date: "",
  startTime: "",
  endTime: "",
  priority: "",
  images: [],
  eventId: "",
};
function Sessionsnormalevent() {
  console.log("useLocation()", useLocation());
  const [eventId, setEventId] = useState(useLocation().state.id);
  const [eventData, setEventData] = useState(useLocation().state.item);
  const [sessionData, setSessionData] = useState(body);
  const [checkTime, setCheckTime] = useState(false);
  const [editEnable, setEditEnable] = useState(false);
  const childFunc = React.useRef(null);
  // console.log("sessionData", eventData?.startDate?.slice(8, 10));
  // console.log("sessionData.startTime", sessionData.startTime);
  // console.log("sessionData.date", sessionData?.date);
  const ImageHandle = async (file) => {
    // console.log(file);
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

      setSessionData({
        ...sessionData,
        images: [...sessionData.images, result.url],
      });
    }
  };

  const submit = async () => {
      let data = { ...sessionData, eventId: eventId };
      // console.log("data", data);

      let { name, details, date, startTime, endTime, priority } = data;
      if (
        name !== "" &&
        details !== "" &&
        date !== "" &&
        startTime !== "" &&
        endTime !== "" &&
        priority !== "" &&
        data.images.length !== 0 &&
        data.eventId !== ""
      ) {
        if (editEnable) {
          let res = await updateSession(sessionData._id, data);
          if (res && res.status) {
            setEditEnable(false);
            toast.success(res.message);
            childFunc.current();
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 0,
              behavior: "smooth",
            });
            setSessionData(body)
          } else {
            toast.error(res.message);
          }
        } else {
          let res = await addEventSession(data);
          // console.log("rse", res);
          if (res && res.status) {
            setSessionData(body);
            childFunc.current();
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        }
      } else {
        toast.warning("All feilds are required");
      }
  };


  const deleteSession = (item) => {
    let arr = sessionData.images.filter((it) => it !== item);
    setSessionData({ ...sessionData, images: arr });
  };
  const handleEdit = (data) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("data", data);
    setSessionData(data);
    setEditEnable(true);
  };
  // console.log("sessionData", sessionData.date === eventData.endDate);
  // console.log("eventData", eventData);
  const startTimechecking = async (e) => {
    if (sessionData?.date !== "") {
      if (eventData?.startDate === sessionData?.date) {
        if (
          parseInt(eventData.startTime.slice(0, 2)) * 60 +
            parseInt(eventData?.startTime?.slice(3, 5)) <=
          parseInt(e.slice(0, 2)) * 60 + parseInt(e.slice(3, 5))
        ) {
          setSessionData({
            ...sessionData,
            startTime: e,
          });
        } else {
          toast.warn("Please Select A valid Time");
        }
      }else{
        setSessionData({
          ...sessionData,
          startTime: e,
        });
      }
    } else {
      toast.warn("Please Select A Date");
    }
  };

  const endTimeChecking = async (e) => {
    if (sessionData?.date !== "") {
      if (eventData.endDate === sessionData?.date) {
        if (
          parseInt(eventData.endTime.slice(0, 2)) * 60 +
            parseInt(eventData?.endTime?.slice(3, 5)) >=
          parseInt(e.slice(0, 2)) * 60 + parseInt(e.slice(3, 5))
        ) {
          setSessionData({
            ...sessionData,
            endTime: e,
          });
        } else {
          toast.warn("Please Select A valid Time");
        }
      }else{
        setSessionData({
          ...sessionData,
          endTime: e,
        });
      }
    } else {
      toast.warn("Please Select A Date");
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <ToastContainer />
        <div className="p-3">
          <div className="_enrollment createevent_cnt_area">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">SESSIONS - NORMAL EVENT</h4>
                  <div className="page-title-right">
                    <nav className aria-label="breadcrumb">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/events">Sessions - normal event</a>
                        </li>
                        <li
                          className="active breadcrumb-item"
                          aria-current="page"
                        >
                          Add &amp; Manage Sessions
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
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <input
                          id="example-text-input"
                          type="text"
                          className="form-control form-control"
                          value={sessionData.name}
                          onChange={(e) => {
                            setSessionData({
                              ...sessionData,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Details<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <textarea
                          id="example-text-input"
                          className="form-control form-control"
                          value={sessionData.details}
                          onChange={(e) => {
                            setSessionData({
                              ...sessionData,
                              details: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <TextBox
                        title="Date"
                        className="col-md-6"
                        type="date"
                        min={moment(eventData.startDate).format("YYYY-MM-DD")}
                        max={moment(eventData.endDate).format("YYYY-MM-DD")}
                        value={sessionData.date}
                        onChange={(e) => {
                          setSessionData({
                            ...sessionData,
                            date: e,
                          });
                        }}
                      />
                    </div>
                    <div className="row">
                      <TextBox
                        title="Start Time"
                        className="col-md-6"
                        type="time"
                        value={sessionData.startTime}
                        onChange={(e) => {
                          // setSessionData({
                          //   ...sessionData,
                          //   startTime: e,
                          // });
                          startTimechecking(e);
                        }}
                      />
                      <TextBox
                        title="End Time"
                        className="col-md-6"
                        type="time"
                        value={sessionData.endTime}
                        onChange={(e) => {
                            // setSessionData({
                            //   ...sessionData,
                            //   endTime: e,
                            // });
                          endTimeChecking(e);
                        }}
                      />
                    </div>
                    {/* <div className="row">
                      <div className="col-md-6 form-group">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          Start Time<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="col-md-12 p-0">
                          <input
                            type="time"
                            class="form-control"
                            value={sessionData.startTime}
                            onChange={(e) => {
                              console.log("e", e);
                              setSessionData({
                                ...sessionData,
                                startTime: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-12 col-form-label"
                        >
                          End Time<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="col-md-12 p-0">
                          <input
                            type="time"
                            class="form-control"
                            value={sessionData.endTime}
                            onChange={(e) => {
                              setSessionData({
                                ...sessionData,
                                endTime: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Priority<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <input
                          id="example-text-input"
                          min="1"
                          type="number"
                          className="form-control form-control"
                          value={sessionData.priority}
                          onChange={(e) => {
                            setSessionData({
                              ...sessionData,
                              priority: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="col-md-2 col-form-label"
                      >
                        Images<span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <label
                          htmlFor="m1"
                          className="w-100"
                          style={{ pointerEvents: "unset", cursor: "pointer" }}
                        >
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick mt-2"
                              tabIndex={0}
                            >
                              <input
                                accept="image/*"
                                type="file"
                                autoComplete="off"
                                tabIndex={-1}
                                id="m1"
                                className="message_Imagehandle"
                                // style={{ display: "none" }}
                                onChange={(e) => ImageHandle(e.target.files)}
                              />
                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-line" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        </label>
                        <p style={{ color: "red" }}>
                          [image should be in dimensions 1280 * 960 px]
                        </p>
                        <div className="d-flex align-items-center flex-wrap">
                          {sessionData.images.map((item) => {
                            return (
                              <>
                                <img
                                  src={item}
                                  style={{
                                    height: "100px",
                                    width: "100px",
                                    margin: "5px",
                                  }}
                                  className="img-fluid"
                                />
                                <div
                                  className="dropzone-previews trashicons mt-3"
                                  id="file-previews"
                                  onClick={() => deleteSession(item)}
                                >
                                  <i class="fa-solid fa-trash"></i>
                                </div>
                              </>
                            );
                          })}
                        </div>
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
                          onClick={submit}
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
          </div>
        </div>
      </div>
      <Viewsession id={eventId} childFunc={childFunc} handleEdit={handleEdit} />
    </>
  );
}

export default Sessionsnormalevent;
