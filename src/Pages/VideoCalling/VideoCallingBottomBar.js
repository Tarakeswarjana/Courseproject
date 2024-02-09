import React from "react";

export default function VideoCallingBottomBar({offCamera,videoToggle ,offMic,audioToggle,endCall}) {
  
  return (
    <>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-12 p-0">
          <div className="video__chating_bottom_icon">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="firstbtn d-flex flex-wrap mb-3">
                {/* <a  className="attachment_btn icons_CAll">
                  <i className="fa-solid fa-link" />
                </a>
                <a  className="settings_btn icons_CAll">
                  <i className="fa-solid fa-gear" />
                </a> */}
              </div>
              <div className="secondbtn d-flex flex-wrap mb-3">
              {audioToggle ? <a className="microphone icons_CAll" onClick={() => {
                  offMic()
                }}>
                   <i className="fa-solid fa-microphone" />
                  

                </a> :
                  <a className="microphone icons_CAll" onClick={() => {
                    offMic()
                  }}>
                    <i className="fa fa-microphone-slash" aria-hidden="true" />

                  </a>
                }
                {
                  videoToggle?
                  <a onClick={()=>{
                    offCamera()
                  }}  className="video icons_CAll">
                    <i className="fa-solid fa-video" />
                  </a> :
                  <a onClick={()=>{
                    offCamera()
                  }}  className="video icons_CAll">
                    <i className="fa-solid fa-video-slash"></i>
                  </a>
                }
                
                {/* <a  className="captioning icons_CAll">
                  <i className="fa-solid fa-closed-captioning" />
                </a>
                <a  className="arrow-up icons_CAll">
                  <i className="fa-solid fa-circle-arrow-up" />
                </a>
                <a  className="list-icon icons_CAll">
                  <i className="fa-solid fa-ellipsis-vertical" />
                </a> */}
                <a  className="call-end icons_CAll" onClick={endCall} style={{cursor:"pointer"}}>
                  <i className="fa-solid fa-phone" />
                </a>
              </div>
              <div className="lastbtn d-flex flex-wrap mb-3">
                {/* <a  className="info icons_CAll">
                  <i className="fa fa-info" aria-hidden="true" />
                </a>
                <a  className="comment icons_CAll">
                  <i className="fa fa-comment" aria-hidden="true" />
                </a>
                <a  className="group icons_CAll">
                  <i className="fa fa-users" aria-hidden="true" />
                </a> */}
                  {/* <a  className="time ">
                    12:36
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
