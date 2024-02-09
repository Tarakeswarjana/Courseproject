import React,{useState} from "react";

export default function ShortDec({editStatus,shortDec,setShortDec}) {
  const [finalEdit, setFinalEdit] = useState(false);

  return (
    <div className="position-relative">
        {
            editStatus && finalEdit?<div className="textbox_FIeld">
        <textarea
          value={shortDec}
          onChange={(e)=>{
            setShortDec(e.target.value)
          }}
          className="inputElementspeaker"
        ></textarea>
        <div className="text-right pt-2">
          <button className="saveBTn" onClick={()=>setFinalEdit(false)}>Save</button>
          <button className="cancelBTn" onClick={()=>setFinalEdit(false)}>Cancel</button>
        </div>
      </div>:<p onDoubleClick={()=>setFinalEdit(true)}>{shortDec}</p>
        }
      
      
    </div>
  );
}
