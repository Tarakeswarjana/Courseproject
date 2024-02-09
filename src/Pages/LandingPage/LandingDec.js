import React, { useState } from "react";

export default function LandingDec({ editStatus, setEditStatus,setLandingDec,landingDec }) {
  const [finalEdit, setFinalEdit] = useState(false);


  return (
    <>
      <div className="position-relative">
        {
            finalEdit && editStatus ?<div className="textbox_FIeld">
          <textarea value={landingDec} className="inputElement" 
          onChange={(e)=>{
            setLandingDec(e.target.value)
          }}
          ></textarea>
          <div className="text-right pt-2">
            <button className="saveBTn" onClick={()=>setFinalEdit(false)}>Save</button>
            <button className="cancelBTn" onClick={()=>setFinalEdit(false)}>Cancel</button>
          </div>
        </div>:
        <h2 onDoubleClick={()=>setFinalEdit(true)}>
          {landingDec}
        </h2>
        }
        
        
      </div>
    </>
  );
}
