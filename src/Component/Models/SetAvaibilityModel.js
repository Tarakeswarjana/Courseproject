import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import months from "../../JsonData/months.json"
import date from "../../JsonData/date.json"
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
import HttpClient from "../../utils/HttpClient";



export default function SetAvailabilityModel() {
  const [fromDate,setFromDate]= useState({year:"",month:"",date:""})
  const [todate,setTodate] = useState({year:"",month:"",date:""})
  const [unavailableReason,setUnavailableReason] = useState("")
  const [unavailableMsg,setUnavailableMsg] = useState("")

    const closePopup=()=>{
        document.querySelector("#metting_pupUp").style.display="none"
    }

    const getYear = ()=>{
      var year = (new Date()).getFullYear();
      var current = year;
      year -= 3;
      let years=[]
      for (var i = 0; i < 6; i++) {
        years.push(year+i)
    
    }
    return years
    }

    const submit = async(e)=>{
      e.preventDefault()
      if(fromDate.year !="" && fromDate.month!="" && fromDate.date!="" && todate.year!="" && todate.month!="" && todate.date!=""  ){

        let dataSend = {
          from :moment(`${fromDate.month}/${fromDate.date}/${fromDate.year}`).format(),
          to :moment(`${todate.month}/${todate.date}/${todate.year}`).format(),
          unavailableMsg,
          unavailableReason
        }
        console.log(dataSend);
        let result = await HttpClient.requestData("teacherUnavailable","POST",dataSend)
        if(result&&result.status){
          document.querySelector("#metting_pupUp").style.display="none"
          toast.success("All meeting cancel successfully")
        }else{
          toast.error(result.message)
        }

      }else{
        toast.warn("from date and to date both are required")
      }
    }
  return (
    <>
      <div className="set-avaibility-pop-up" id="metting_pupUp">
        <div className="set-avaibility-pop-up-wrapper">
          <div className="setAvailabilityText">
            <h2 className="popUpText" style={{ float: "none" }}>
              Set your availability
            </h2>
            <p className="setPopUppara">
              When unavailable, you won’t receive new class notification
            </p>
          </div>
          <div className="set-avaibility-closeBtn" onClick={closePopup}>
            X
          </div>
          <h4 className="dateText">Unavailable from</h4>
          <div className="selectBoxDate">
            <select value={fromDate.month} onChange={(val)=>setFromDate((prev)=>{return{...prev,month:val.target.value}})}>
              {months.map((item)=>{
                return <option key={item.value} value={item.value}>{item.abbreviation}</option>

              })}
            </select>
             
            <select value={fromDate.date} onChange={(val)=>setFromDate((prev)=>{return {...prev,date:val.target.value}})}>
            {date.map((item)=>{
              return  <option  key={item} value={item}>{item}</option>
            })} 
            </select>
            <select value={fromDate.year} onChange={(val)=>setFromDate((prev)=>{return {...prev,year:val.target.value}})}>
             {getYear().map((item)=>{
             return <option value={item} key={item}>{item}</option>
             })} 
            </select>
          </div>
          <h4 className="dateText" style={{ marginTop: "12px" }}>
            To( Including)
          </h4>
          <div className="selectBoxDate">
          <select value={todate.month} onChange={(val)=>setTodate((prev)=>{return{...prev,month:val.target.value}})}>
              {months.map((item)=>{
                return <option key={item.value} value={item.value}>{item.abbreviation}</option>

              })}
            </select>
            <select value={todate.date} onChange={(val)=>setTodate((prev)=>{return {...prev,date:val.target.value}})}>
            {date.map((item)=>{
              return  <option key={item} value={item}>{item}</option>
            })} 
            </select>
            <select value={todate.year} onChange={(val)=>setTodate((prev)=>{return {...prev,year:val.target.value}})}>
             {getYear().map((item)=>{ 
             return <option value={item} key={item}>{item}</option>
             })} 
            </select>
          </div>
          <h4 className="dateText" style={{ marginTop: "12px" }}>
            You’re unavailable because (Optional)
          </h4>
          <div className="selectBoxDate">
            <select style={{ width: "95%" }} value={unavailableReason} onChange={(val)=>setUnavailableReason(val.target.value)}>
              <option value="I’m overbooked">I’m overbooked</option>
              <option value="Personal Reason">Personal Reason</option>
            </select>
          </div>
          <label className="addMessage">
            Add a message <span className="optional">(Optional)</span>
          </label>
          <textarea
            name=""
            rows={4}
            cols={50}
            placeholder="Hey , I’m currently a little busy, but I’ll be free within some months. Thank you."
            style={{
              height: 105,
              width: "95%",
              border: "1px solid #CCCCCC",
              borderRadius: 8,
              resize: "none",
              padding: 10,
            }}
            value={unavailableMsg}
            onChange={(val)=>setUnavailableMsg(val.target.value)}
          />
          <div className="cancel-Btn" style={{ marginRight: 20 }}>
            <input
              onClick={closePopup}
              type="button"
              defaultValue="Cancel"
              className="btn btn-primary btn-cancel"
            />
            <input
            onClick={submit}
              type="submit"
              defaultValue="Save"
              className="btn btn-primary btnSettings"
            />
          </div>
        </div>
      </div>
    </>
  );
}
