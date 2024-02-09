import { useState } from "react";
import React from "react";

export default function LongDesc({ longDesc, setLongDesc, editStatus }) {
  const [finalEdit, setFinalEdit] = useState(false);

  return (
    <section className="Why__Take clearfix px-md-5 mx-md-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="position-relative">
              <div className="why__take_head">
                <h2>Why Take These Courses</h2>

                {editStatus && finalEdit ? (
                  <div className="textbox_FIeld">
                    <textarea
                      value={longDesc}
                      onChange={(e)=>{
                        setLongDesc(e.target.value)
                      }}
                      className="inputElementspeaker"
                    ></textarea>
                    <div className="text-right pt-2">
                      <button className="saveBTn" onClick={()=>setFinalEdit(false)}>Save</button>
                      <button className="cancelBTn mr-2" onClick={()=>setFinalEdit(false)}>Cancel</button>
                      {/* <button className="delBTN">Delete</button> */}
                    </div>
                  </div>
                 
                ) : (
                    <p onDoubleClick={()=>setFinalEdit(true)}>
                    {longDesc}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
