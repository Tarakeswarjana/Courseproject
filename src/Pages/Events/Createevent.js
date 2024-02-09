import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DropDown from "../../customComponent/DropDown";
import ImagePicker from "../../customComponent/ImagePicker";
import TextArea from "../../customComponent/TextArea";
import TextBox from "../../customComponent/TextBox";
import AllCountryTimezone from "../../TimeZone";
import HttpClient from "../../utils/HttpClient";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { addEvent, updateEvent } from "../../Api/eventapi";
import UseAllTeacher from "../../customHooks/UseAllTeacher";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Select from "react-select";
import NetworkingModerator from "./NetworkModerator";
function Createevent() {
  // console.log("useLocation(", useLocation());
  const navigate = useNavigate();
  const [ownEvent, setownEvent] = useState("yes");
  const [eventName, seteventName] = useState("");
  const [timeZone, setTimeZone] = useState({});
  const [details, setdetails] = useState("");
  const [hostedBy, sethostedBy] = useState("");
  const [venue, setVenue] = useState("");
  const [priority, setpriority] = useState();
  const [color, setcolor] = useState("");
  const [images, setImages] = useState([]);
  const [date, setDate] = useState({ startDate: "", endDate: "" });
  const [time, setTime] = useState({ startTime: "", endTime: "" });
  const [eventType, seteventType] = useState("");
  const [seatPrice, setseatPrice] = useState(0);
  const [eventRoom, seteventRoom] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [numberOfSeat, setnumberOfSeat] = useState("");
  const [selectModerator, setselectModerator] = useState([]);
  const [selectUser, setselectUser] = useState([]);
  const [editEnable, setEditEnable] = useState(false);
  const [location, setLocation] = useState(useLocation().state);
  const [numberOfFloors, setnumberOfFloors] = useState();
  const [seatPerFloor, setseatPerFloor] = useState();
  const [enableModerator, setenableModerator] = useState("no");
  const [networkModerators, setNetworkModerators] = useState([]);

  const [arr, setArr] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  useEffect(() => {
    // console.log("location?.eventUrl", location?.eventUrl);
    console.log("location", location);
    if (location === null) {
      setEditEnable(false);
    } else {
      if (location.ownEvent === "no") {
        setEditEnable(true);
        setEventUrl(location?.eventUrl);
        setownEvent(location.ownEvent);
        setDate({ startDate: location.startDate, endDate: location.endDate });
        setVenue(location.venue);
        seteventName(location.eventName);
        setdetails(location.details);
        setTime({ startTime: location.startTime, endTime: location.endTime });
        sethostedBy(location.hostedBy);
        setcolor(location.color);
        setpriority(location.priority);
        setTimeZone(location.timeZone);
        setImages(location.images);
      }

      if (location.ownEvent === "yes") {
        setEditEnable(true);
        setownEvent(location?.ownEvent);
        setDate({ startDate: location.startDate, endDate: location.endDate });
        setVenue(location?.venue);
        seteventName(location.eventName);
        setTime({ startTime: location.startTime, endTime: location.endTime });
        sethostedBy(location?.hostedBy);
        setcolor(location?.color);
        setdetails(location?.details);
        setpriority(location?.priority);
        setImages(location?.images);
        setTimeZone(location?.timeZone);
        setnumberOfSeat(location?.numberOfSeat);
        seteventRoom(location?.eventRoom);
        setselectModerator(location?.selectModerator);
        seteventType(location?.eventType);
        setseatPrice(location?.seatPrice);
        setArr(location?.selectUser)
        setselectUser(location?.selectUser?.map((item)=>{
          if(item.name!==""){
             return{
              label:item?.name,
              value:item?.moderatorId
          }
          }
         
        }))
        setnumberOfFloors(location?.numberOfFloors)
        setseatPerFloor(location?.seatPerFloor)
        setselectModerator(location?.selectModerator)
      }
      // setEditEnable(true);
      // setEventUrl(location?.eventUrl);
      // setownEvent(location.ownEvent);
      // setDate({ startDate: location.startDate, endDate: location.endDate });
      // setVenue(location.venue);
      // seteventName(location.eventName);
      // setdetails(location.details);
      // setTime({ startTime: location.startTime, endTime: location.endTime });
      // sethostedBy(location.hostedBy);
      // setcolor(location.color);
      // setpriority(location.priority);
      // setTimeZone(location.timeZone);
    }
  }, []);

 

  const addUser = (index, id, name) => {
    let data = [...arr];
    data[index] = {
      name: name,
      moderatorId: id,
    };
    setArr(data);
    let ModeratorData = [...selectUser, { value: id, label: name }];
    setselectUser(ModeratorData);
  };

  const Submit = async (e) => {
    if (
      parseInt(time.startTime.slice(0, 2)) >
      parseInt(time?.endTime?.slice(0, 2))
    ) {
      alert("start time can not be greater than endtime");
      return;
    }
    if (moment(date.endDate).isBefore(date.startDate)) {
      alert("End date must be greater than start date");
      return;
    }
    // e.preventDefault();
    let dataSend = {
      ownEvent,
      eventName,
      timeZone,
      details,
      hostedBy,
      venue,
      priority,
      color,
      images,
      startDate: date.startDate,
      endDate: date.endDate,
      startTime: time.startTime,
      endTime: time.endTime,
    };

    // For ownEvent NO

    if (ownEvent === "no") {
      if (
        eventName != "" &&
        eventUrl != "" &&
        Object.keys(timeZone).length > 0 &&
        date.startDate != "" &&
        date.endDate != "" &&
        time.startTime != "" &&
        time.endTime != "" &&
        hostedBy != "" &&
        venue != "" &&
        priority != "" &&
        color != ""
      ) {
        if (editEnable) {
          let noEditdata = {
            ...dataSend,
            eventUrl,
          };
          let result = await updateEvent(location._id, noEditdata);
          // console.log("result", result);
          if (result && result.status) {
            toast.success(result.message);
            setTimeout(() => {
              navigate("/showevents");
            }, 1500);
          }
        } else {
          let data = { ...dataSend, eventUrl };
          // console.log("sendData",data);
          let result = await addEvent(data);
          // console.log(result);
          if (result && result.status) {
            clearState()
            toast.success(result.message);
          }
        }
      } else {
        toast.warning("All feilds are required");
      }

      // For ownEvent YES
    }
    if (ownEvent === "yes") {
      if (
        eventName != "" &&
        Object.keys(timeZone).length > 0 &&
        date.startDate != "" &&
        date.endDate != "" &&
        time.startTime != "" &&
        time.endTime != "" &&
        details != "" &&
        hostedBy != "" &&
        venue != "" &&
        priority != "" &&
        color != "" &&
        eventType != "" &&
        eventRoom != ""
      ) {
        if (editEnable) {
          let data={
            ownEvent,
            eventName,
            timeZone,
            details,
            hostedBy,
            venue,
            priority,
            color,
            images,
            startDate: date.startDate,
            endDate: date.endDate,
            startTime: time.startTime,
            endTime: time.endTime,
            numberOfSeat,
            selectModerator,
            eventRoom,
            eventType,
            seatPrice,
            selectUser: arr,
            seatPerFloor: seatPerFloor,

          }
          // console.log("data",data);
          let result= await updateEvent(location._id,data)
          // console.log(result);
          if (result && result.status) {
            toast.success(result.message);
            setTimeout(() => {
              navigate("/showevents");
            }, 1500);
          }
        } else {
          if (eventRoom === "yoga room") {
            let YogaData = {
              ...dataSend,
              numberOfSeat,
              selectModerator,
              eventRoom,
              eventType,
              seatPrice,
            };
            console.log("YogaData", YogaData);
            let result = await addEvent(YogaData);
            console.log("yogaResult", result);
            if (result && result.status) {
              toast.success(result.message);
              clearState()
            }
          }

          if (eventRoom === "conference room") {
            let conferenceData = {
              ...dataSend,
              selectUser: arr,
              eventRoom,
              selectModerator,
              eventType,
              seatPrice,
            };
            // console.log("conferenceData", conferenceData);
            let result = await addEvent(conferenceData);
            // console.log(result);
            if (result && result.status) {
              clearState()
              toast.success(result.message);
            }
          }

          if (eventRoom === "movie room") {
            let movieData = {
              ...dataSend,
              numberOfSeat,
              eventRoom,
              eventType,
              seatPrice,
            };
            // console.log("movieData",movieData);
            let result = await addEvent(movieData);
            // console.log(result);
            if (result && result.status) {
              clearState()
              toast.success(result.message);
            }
          }

          if (eventRoom === "table networking room") {
            let networkingData = {
              ...dataSend,
              eventRoom,
              numberOfFloors,
              seatPerFloor: seatPerFloor,
              selectModerator,
              eventType,
              seatPrice,
            };
            // console.log("networkingData",networkingData);
            let result = await addEvent(networkingData);
            // console.log("result",result);
            if (result && result.status) {
              clearState()
              toast.success(result.message);
            }
          }
        }
      } else {
        toast.warning("All feilds are required");
      }
    }
  };

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
      setImages((prev) => [...prev, result.url]);
    }
  };
  // console.log("date", date);
  // console.log("selectMod",selectModerator);
  const conferenceModerator = (val) => {
    // console.log("val",val);
    setselectModerator([{ name: val?.label, moderatorId: val?.value }]);
  };
  // console.log("image", arr);  

   function clearState (){
    console.log("daddadad");
    setownEvent("yes")
    seteventName("")
    setTimeZone({})
    setdetails("")
    sethostedBy("")
    setVenue("")
    setpriority()
    setcolor("")
    setImages([])
    setDate({ startDate: "", endDate: "" })
    setTime({ startTime: "", endTime: "" })
    seteventType("")
    setseatPrice("")
    seteventRoom("")
    setEventUrl("")
    setnumberOfSeat("")
    setselectModerator([])
    setselectUser([])
    setEditEnable(false)
    // setLocation(useLocation().state)
    setnumberOfFloors()
    setseatPerFloor()
    setenableModerator("no")
  }
  return (
    <>
      <ToastContainer />
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment createevent_cnt_area">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="page-title-box d-flex flex-wrap align-items-center justify-content-between">
                  <h4 className="mb-0">Create Events</h4>
                  <div className="page-title-right">
                    <nav className aria-label="breadcrumb">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/events">Events</a>
                        </li>
                        <li className="active breadcrumb-item" aria-current="page">
                          Add &amp; Create Events
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
                    <DropDown
                      title="Want to run an event using Educare Virtual Events?"
                      data={['Yes', 'No']}
                      value={ownEvent}
                      onSelect={val => setownEvent(val)}
                    />
                    {ownEvent == 'no' && (
                      <TextBox title="Event URL" value={eventUrl} onChange={val => setEventUrl(val)} />
                    )}
                    <TextBox title="Event Name" value={eventName} onChange={val => seteventName(val)} />
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="col-md-2 col-form-label">
                        Time Zone<span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <AllCountryTimezone value={timeZone.value} onChange={val => setTimeZone(val)} />
                      </div>
                    </div>
                    <div className="row">
                      <TextBox
                        title="Start Date"
                        className="col-md-6"
                        type="date"
                        min={moment().format('YYYY-MM-DD')}
                        value={date.startDate}
                        onChange={val => {
                          console.log('val', val);
                          setDate(prev => {
                            return { ...prev, startDate: val };
                          });
                        }}
                      />
                      <TextBox
                        title="End Date"
                        className="col-md-6"
                        type="date"
                        min={moment().format('YYYY-MM-DD')}
                        value={date.endDate}
                        onChange={val =>
                          setDate(prev => {
                            return { ...prev, endDate: val };
                          })
                        }
                      />
                    </div>
                    <div className="row">
                      <TextBox
                        title="Start Time"
                        className="col-md-6"
                        type="time"
                        value={time.startTime}
                        onChange={val =>
                          setTime(prev => {
                            return { ...prev, startTime: val };
                          })
                        }
                      />
                      <TextBox
                        title="End Time"
                        className="col-md-6"
                        type="time"
                        value={time.endTime}
                        onChange={val => {
                          if (val > time.startTime) {
                            setTime(prev => {
                              return { ...prev, endTime: val };
                            });
                          }
                        }}
                      />
                    </div>
                    <TextArea title="Details" value={details} onChange={val => setdetails(val)} />
                    <TextBox title="Hosted By" value={hostedBy} onChange={val => sethostedBy(val)} />

                    {ownEvent == 'yes' && (
                      <>
                        {' '}
                        <div className="row">
                          <DropDown
                            className="col-md-6"
                            title="Event Type"
                            data={['free', 'paid']}
                            onSelect={val => {
                              seteventType(val);
                              if (val == 'free') {
                                setseatPrice(0);
                              }
                            }}
                          />
                          <TextBox
                            title="Seat Price(in USD)"
                            className="col-md-6"
                            value={seatPrice}
                            disabled={eventType == 'free' ? true : false}
                            onChange={val => setseatPrice(val)}
                          />
                        </div>
                        <DropDown
                          title="Event Room"
                          data={['yoga room', 'conference room', 'movie room', 'table networking room']}
                          value={eventRoom}
                          onSelect={val => seteventRoom(val)}
                        />
                      </>
                    )}
                    {/* for yoga Room  start */}

                    {eventRoom == 'yoga room' && (
                      <div className="row">
                        <TextBox
                          className="col-md-6"
                          title="Number Of Seats"
                          type="number"
                          value={numberOfSeat}
                          onChange={val => setnumberOfSeat(val)}
                        />
                        <UseAllTeacher
                          title="Select Moderator"
                          onSelect={(id, name, value) => {
                            console.log(value);
                            setselectModerator([{ name: value.name, moderatorId: value._id }]);
                          }}
                          className="col-md-6"
                          value={selectModerator[0]?.moderatorId}
                        />
                      </div>
                    )}
                    {/* for yoga Room  end */}

                    {eventRoom == 'conference room' && (
                      <>
                        {' '}
                        <div className="row">
                          {/* <TextBox
                            className="col-md-12"
                            title="Number Of Seats"
                            type="number"
                            value={numberOfSeat}
                            onChange={(val) => setnumberOfSeat(val)}
                          /> */}

                          {/* {console.log("arr", arr)} */}
                          {arr?.map((it, ind) => {
                            return (
                              <UseAllTeacher
                                key={ind}
                                title={`Select Users ${ind + 1} `}
                                onSelect={(id, name) => addUser(ind, id, name)}
                                className="col-md-12"
                                value={arr[ind]?.moderatorId}
                              />
                            );
                          })}
                          <label style={{ fontWeight: 'bold', color: 'black' }}> Select Moderator</label>

                          <Select
                            className="form-control border-0"
                            options={selectUser}
                            onChange={e => {
                              conferenceModerator(e);
                            }}
                            value={{ value: selectModerator[0]?.moderatorId, label: selectModerator[0]?.name }}
                          />
                        </div>
                      </>
                    )}
                    {eventRoom === 'movie room' && (
                      <>
                        <TextBox
                          className="col-md-12"
                          title="Number Of Seats"
                          type="number"
                          value={numberOfSeat}
                          onChange={val => setnumberOfSeat(val)}
                        />
                      </>
                    )}
                    {eventRoom === 'table networking room' && (
                      <>
                        <div className="row">
                          <TextBox
                            className="col-md-6"
                            type="number"
                            title="Number Of Floors"
                            value={numberOfFloors}
                            onChange={val => setnumberOfFloors(val)}
                          />
                          <TextBox
                            className="col-md-6"
                            type="number"
                            title="Seats Per Floor"
                            value={seatPerFloor}
                            onChange={val => setseatPerFloor(val)}
                          />
                        </div>
                        <DropDown
                          title="Enable Moderator"
                          data={['yes', 'no']}
                          value={enableModerator}
                          onSelect={val => setenableModerator(val)}
                        />
                        {/* {console.log(enableModerator)} */}
                        {enableModerator === 'yes' ? (
                          <>
                            {/* {console.log("networkModerators",networkModerators)} */}
                            <NetworkingModerator
                              numberOfFloors={numberOfFloors}
                              seatPerFloor={seatPerFloor}
                              networkModerators={selectModerator}
                              setNetworkModerators={setselectModerator}
                            />
                          </>
                        ) : null}
                      </>
                    )}
                    <TextBox className="mt-5" title="Venue" value={venue} onChange={val => setVenue(val)} />

                    <div className="row align-items-center">
                      <TextBox
                        className="col-md-6"
                        type="number"
                        title="Priority"
                        value={priority}
                        onChange={val => setpriority(val)}
                      />
                      <TextBox
                        className="col-md-6"
                        type="color"
                        title="Color"
                        value={color}
                        onChange={val => setcolor(val)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="example-text-input" className="col-md-2 col-form-label">
                        Images<span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className="col-md-12 p-0">
                        <label htmlFor="m1" className="w-100" style={{ pointerEvents: 'unset', cursor: 'pointer' }}>
                          <div className="dropzone">
                            <div className="dz-message needsclick mt-2" tabIndex={0}>
                              <input
                                accept="image/*"
                                type="file"
                                autoComplete="off"
                                tabIndex={-1}
                                id="m1"
                                className="message_Imagehandle"
                                multiple={true}
                                // style={{ display: "none" }}
                                onChange={e => ImageHandle(e.target.files)}
                              />
                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-line" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        </label>
                        <p style={{ color: 'red' }}>[image should be in dimensions 1280 * 960 px]</p>
                      </div>
                    </div>
                    {images.map((item, index) => {
                      return (
                        <img
                          key={index}
                          src={item}
                          style={{
                            height: '100px',
                            width: '100px',
                            margin: '5px',
                          }}
                          className="img-fluid"
                        />
                      );
                    })}
                    <p
                      style={{
                        marginTop: '5px',
                        WebkitTextAlign: 'right',
                        textAlign: 'right',
                      }}
                    >
                      [Note: Asterisk (<span style={{ color: 'red' }}>*</span>) denotes the mandatory fields.]
                    </p>
                    <div className="mb-0 form-group">
                      <div className="button-items pt-4">
                        <button
                          type="button"
                          className="waves-effect waves-light mr-1 btn btn-primary"
                          onClick={() => {
                            Submit();
                          }}
                        >
                          {editEnable ? 'Update' : 'Submit'}
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
    </>
  );
}

export default Createevent;
