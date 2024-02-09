import React, { useEffect, useState } from "react";
import studentuser from '../../asstes1/images/book-saved.png'
import emptywallet from '../../asstes1/images/empty-wallet.png'
import active_Calls from '../../asstes1/images/active_Calls.png'
import HttpClient from "../../utils/HttpClient";

export default function AnalyticsCard() {
    const [AnalyticsCardData,setAnalyticsCardData]=useState()
    const [totelActiveCall,setTotelActiveCall]=useState()

     useEffect(()=>{
        FetchTotalCall()
        fetchToatelActiveCall()
     },[])

    const FetchTotalCall=async()=>{
        const result=await HttpClient.requestData("totalCalls","GET")
        // console.log(result);
        if(result && result.status){
            setAnalyticsCardData(result.data[0])
        }
    }

    const fetchToatelActiveCall=async()=>{
        const result =await HttpClient.requestData("totalActiveCalls","GET")
        // console.log(result);
        if(result && result.status){
            setTotelActiveCall(result.data[0])
        }

    }
  return (
    <div className="analytics-wraper">
      <div className="analytics-item">
        <p>Total Calls</p>
        <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
          {AnalyticsCardData?.TotalCall ??"00"}
          <img src={studentuser} />
        </h2>
      </div>
      <div className="analytics-item">
        <p>Total Earnings</p>
        <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
          {AnalyticsCardData?.Earning?? "00"}
          <img src={emptywallet} />
        </h2>
      </div>
      <div className="analytics-item">
        <p>Total Active Calls</p>
        <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
          {totelActiveCall?.TotalActiveCall?? "00"}
          <img src={active_Calls} />
        </h2>
      </div>
    </div>
  );
}
