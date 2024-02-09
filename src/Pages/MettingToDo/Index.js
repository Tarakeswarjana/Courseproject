import React, { useEffect, useState } from "react";
import calendaredit from "../../asstes1/images/icon/calendar-edit.png";
import savvanth from "../../asstes1/images/icon/savvanth.png";
import message from "../../asstes1/images/icon/message.png";
import durationtime from "../../asstes1/images/icon/duration-time.png";
import SetAvailabilityModel from "../../Component/Models/SetAvaibilityModel";
import CancelMettingModel from "../../Component/Models/CancelMettingModel";
import MettingdetailSidePopup from "../../Component/Models/MettingDetailSidePopup";
import MeetingList from "./MeetingList";
import { async } from "@firebase/util";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer ,Zoom} from "react-toastify";
import moment from "moment";

export default function MettingToDo() {
const [day1,setDay1]= useState([])
const [day2,setDay2]= useState([])
const [day3,setDay3]= useState([])
const [day4,setDay4]= useState([])
const [day5,setDay5]= useState([])
const [day6,setDay6]= useState([])
const [day7,setDay7]= useState([])


    const showPupUP=()=>{
        document.querySelector("#metting_pupUp").style.display="block"
    }
 
  

    useEffect(()=>{
      fetchToDo()
    },[])
    const fetchToDo = async()=>{
      let result = await HttpClient.requestData("viewToDoList","GET")
      console.log("result",result);
      if(result&&result.status){

let day1= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="sunday")
let day2= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="monday")
let day3= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="tuesday")
let day4= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="wednesday")
let day5= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="thursday")
let day6= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="friday")
let day7= result.data.filter((item)=>item?.bookingDay?.toLowerCase()=="saturday")

setDay1(day1)
setDay2(day2)
setDay3(day3)
setDay4(day4)
setDay5(day5)
setDay6(day6)
setDay7(day7)

      }
    }

  return (
    <>
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
      />
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="d-flex align-items-center flex-wrap">

               

                <h1 className="meeting-title mr-2">Meeting To Do</h1>
                <div className="button-list-meeting">
                  <div className="button-list-item-meeting">
                    <select className="">
                      <option value="">{moment().format("Do")}- {moment().add(10, 'days').format("Do") }  {moment().format("MMM")}</option>
                     
                    </select>
                    <button type="button" onClick={showPupUP} className=" btn-avail">
                      <img src={calendaredit} />
                      Availability
                    </button>
                    <SetAvailabilityModel/>
                  </div>
                </div>
                </div>
                <div className="meeting-list">
                 {day1.length>0&& <MeetingList color="#0076FB" MeetingList={day1}/>}
                 {day2.length>0&& <MeetingList color="#0076FB" MeetingList={day2}/>}
                 {day3.length>0&& <MeetingList color="#0076FB" MeetingList={day3}/>}
                 {day4.length>0&&<MeetingList color="#0076FB" MeetingList={day4}/>}
                 {day5.length>0&&<MeetingList color="#0076FB" MeetingList={day5}/>}
                 {day6.length>0&& <MeetingList color="#0076FB" MeetingList={day6}/>}
                 {day7.length>0&& <MeetingList color="#0076FB" MeetingList={day7}/>}              
                </div>
                {/* <CancelMettingModel/> */}
                {/*-----Meeting Time SidePop Up------*/}
                {/*-----End Meeting Time SidePop Up------*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
