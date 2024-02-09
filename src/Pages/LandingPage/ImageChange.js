import React from "react";

export default function ImageChange({teacherData,editStatus}) {
  return (
    <>
      <div className="teach__iden_img">
        <img src={teacherData?.image} alt="image" className="img-fluid" />
      </div>
      {/* {
        editStatus &&<div className="text-center">
        <label className="uploadBTNN">
          Upload
          <input type="file" className="form-control" id="uploadFile" />
        </label>
      </div>
      } */}
      
    </>
  );
}
