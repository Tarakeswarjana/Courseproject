import React, { useEffect, useMemo, useState } from "react";
import { toast, ToastContainer ,Zoom} from "react-toastify";
import profilepic from "../../asstes1/images/profilepic.png";
import HttpClient from "../../utils/HttpClient";
import { Country, State, City } from "country-state-city";
import timezones from "timezones-list";
import {
  getTimezoneList,
  getTimezoneByCountry,
  getTimezoneGroupByCountryCode,
} from "country-timezone-list";

function ProfileCard({ profileData,fetchProfileData }) {
  const [username,setUserName] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [edit_enable, setEditEnable] = useState(false);
  const [countryList, setCoutryList] = useState(Country.getAllCountries());

  useEffect(() => {
    setName(profileData?.name ?? "");
    setEmail(profileData?.email??"")
    setImage(profileData?.image ?? "");
    setAbout(profileData?.about ?? "");
    setCountry(profileData?.country ?? "")
    setTimeZone(profileData?.timezone ?? "")
    setUserName(profileData?.username ?? "")
  }, [profileData]);

  const editPersonalDetail = async () => {
    if(name!=="" && username!=="" &&email!=="" && country!=="" &&about!=="" && about!==""){
       let dataSend = {
      name,
      about,
      image,
      country,
      timezone,
    };
    console.log(dataSend);
    // return false;
    let result = await HttpClient.requestData("update", "PUT", dataSend);
    // console.log(result);
    if (result && result.status) {
        fetchProfileData()
        setEditEnable(false)
      toast.success("Edited Successfully");
    } else {
    }
    }else{
      toast.warn("** Required Field")
    }
   
  };

  const timeZoneList = useMemo(() => {
    return getTimezoneByCountry(country);
  }, [country]);

  const changeImage = async(file)=>{
    let data = new FormData();
    data.append("image", file);
    let result = await HttpClient.fileUplode("upload/profile", "POST", data);
    console.log("logo", result);
    if (result && result.status) {
      setImage(result.url);
    }
  }
  return (
    <div className="card my-4">
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
        bodyStyle={{borderRadius:20,}}

      />
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="profile__InfoTitle">Personal Information</h4>
          {!edit_enable ? (
            <button
              className="btn edit__BTn"
              onClick={() => setEditEnable(!edit_enable)}
            >
              <i className="fa fa-pencil mr-1" aria-hidden="true" /> Edit
            </button>
          ) : (
            <button className="btn btn-primary " onClick={editPersonalDetail}>
              Save
            </button>
          )}
        </div>
        <div className="row profile__Field">
          <div className="col-md-8">
            <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">username</label>
                  <input
                    type="text"
                    className="form-control input"
                    // placeholder="Full Name"
                    value={username}
                    onChange={(val) => setUserName(val.target.value)}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    className="form-control input"
                    // placeholder="Full Name"
                    value={name}
                    onChange={(val) => setName(val.target.value)}
                    disabled={!edit_enable}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input
                    type="email"
                    className="form-control input"
                    placeholder="email"
                    value={email}
                    onChange={(val) => setEmail(val.target.value)}
                    disabled={!edit_enable}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Country</label>
                  {/* <input
                                type="text"
                                className="form-control input"
                                placeholder="Country"
                                value={country}
                                onChange={(val)=>setCountry(val.target.value)}
                            /> */}
                  <select
                    disabled={!edit_enable}
                    className="form-control input"
                    value={country}
                    onChange={(val) => setCountry(val.target.value)}
                  >
                    <option>Select Country</option>
                    {countryList.map((item, index) => {
                      return (
                        <option key={index} value={item.isoCode}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Time zone</label>
                  {/* <input
                                type="time"
                                className="form-control input"
                                placeholder="Time zone"
                                value={timezone}
                                onChange={(val)=>setTimeZone(val.target.value)}
                            /> */}
                  <select
                    className="form-control input"
                    value={timezone}
                    onChange={(val) => setTimeZone(val.target.value)}
                    disabled={!edit_enable}

                  >
                    <option>Select Timezone</option>
                    {timeZoneList.map((item, index) => {
                      return (
                        <option key={index} value={item.fullName}>
                          {item.fullName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor="">Log In Via</label>
                  <input
                    type="text"
                    className="form-control input"
                    placeholder="Log In Via"
                  />
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="">About Me</label>
                  <textarea
                    className="form-control input textarea_Input"
                    placeholder="About Me"
                    value={about}
                    onChange={(val) => setAbout(val.target.value)}
                    disabled={!edit_enable}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="image__Profile">
                <img src={image} alt="" className="img-fluid" />
              </div>

              {edit_enable && (
                <div className="upload-btn-wrapper mt-2">
                  <button className="btn change_ImageBTn">Change Image</button>
                  <input type="file" name="myfile" onChange={(val)=>changeImage(val.target.files[0])}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
