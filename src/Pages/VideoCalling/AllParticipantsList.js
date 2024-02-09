import React from "react";
import video1 from "../../asstes1/images/Rectangle 1886.jpg";
import video2 from "../../asstes1/images/Rectangle 1887.jpg";
import video3 from "../../asstes1/images/Rectangle 1888.jpg";
import video4 from "../../asstes1/images/Rectangle 1889.jpg";
import video5 from "../../asstes1/images/pin.png";
import video6 from "../../asstes1/images/Rectangle 1893.jpg";
import imo1 from "../../asstes1/images/emoji.png";

export default function AllParticipantsList() {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12 col-12 pr-lg-0">
        <div className="video__chating_popap">
          <div className="video__chating_headbtn d-flex justify-content-between align-items-center bg-white p-3">
            <h2 className="participant_Text">participant</h2>
            <a href="#" className="crosS_BTN">
              <i className="fa fa-times" aria-hidden="true" />
            </a>
          </div>
          <p>8 Attendes</p>
          <div className="chat_scroll-part">
            <div className="Nolan_Botoshbtn mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="Nolan_Botoshbtn_id d-flex">
                  <div className="Nolan_Botoshbtn_img">
                    <img src={video6} alt="img" />
                  </div>
                  <div className="Nolan_Botoshbtn_name">
                    <h5>Nolan Botosh</h5>
                  </div>
                </div>
                <div className="Nolan_Botoshbtn_acces d-flex">
                  <div className="bar_chat_btn1">
                    <a href="#">
                      <i className="fa-solid fa-chart-simple" />
                    </a>
                  </div>
                  <div className="bar_chat_btn2">
                    <a href="#">
                      <i className="fa fa-comment" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex" style={{ flexWrap: "wrap" }}>
                <div className="Add_talk_later_btn mb-2">
                  <a href="#">Add to talk later</a>
                </div>
                <div className="Report_Abuse_btn mb-2">
                  <a href="#">! Report Abuse</a>
                </div>
              </div>
            </div>
            {
              [1,1,1,1,1,1,1].map((item,index)=>{
                return(
                  <div className="Nolan_Botoshbtn mb-4"key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="Nolan_Botoshbtn_id d-flex">
                  <div className="Nolan_Botoshbtn_img">
                    <img src={video6} alt="img" />
                  </div>
                  <div className="Nolan_Botoshbtn_name">
                    <h5>Jakob Arcand</h5>
                  </div>
                </div>
                <div className="Nolan_Botoshbtn_acces d-flex">
                  <div className="bar_chat_btn1">
                    <a href="#">
                      <i className="fa-solid fa-chart-simple" />
                    </a>
                  </div>
                  <div className="bar_chat_btn2">
                    <a href="#">
                      <i className="fa fa-comment" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            }
            
              {/* <div className="Nolan_Botoshbtn mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="Nolan_Botoshbtn_id d-flex">
                    <div className="Nolan_Botoshbtn_img">
                      <img src={video6} alt="img" />
                    </div>
                    <div className="Nolan_Botoshbtn_name">
                      <h5>Marley Donin</h5>
                    </div>
                  </div>
                  <div className="Nolan_Botoshbtn_acces d-flex">
                    <div className="bar_chat_btn1">
                      <a href="#">
                        <i className="fa-solid fa-chart-simple" />
                      </a>
                    </div>
                    <div className="bar_chat_btn2">
                      <a href="#">
                        <i className="fa fa-comment" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Nolan_Botoshbtn mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="Nolan_Botoshbtn_id d-flex">
                    <div className="Nolan_Botoshbtn_img">
                      <img src={video6} alt="img" />
                    </div>
                    <div className="Nolan_Botoshbtn_name">
                      <h5>Phillip Vetrovs</h5>
                    </div>
                  </div>
                  <div className="Nolan_Botoshbtn_acces d-flex">
                    <div className="bar_chat_btn1">
                      <a href="#">
                        <i className="fa-solid fa-chart-simple" />
                      </a>
                    </div>
                    <div className="bar_chat_btn2">
                      <a href="#">
                        <i className="fa fa-comment" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Nolan_Botoshbtn mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="Nolan_Botoshbtn_id d-flex">
                    <div className="Nolan_Botoshbtn_img">
                      <img src={video6} alt="img" />
                    </div>
                    <div className="Nolan_Botoshbtn_name">
                      <h5>Jocelyn Westervelt</h5>
                    </div>
                  </div>
                  <div className="Nolan_Botoshbtn_acces d-flex">
                    <div className="bar_chat_btn1">
                      <a href="#">
                        <i className="fa-solid fa-chart-simple" />
                      </a>
                    </div>
                    <div className="bar_chat_btn2">
                      <a href="#">
                        <i className="fa fa-comment" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Nolan_Botoshbtn mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="Nolan_Botoshbtn_id d-flex">
                    <div className="Nolan_Botoshbtn_img">
                      <img src={video6} alt="img" />
                    </div>
                    <div className="Nolan_Botoshbtn_name">
                      <h5>Madelyn Carder</h5>
                    </div>
                  </div>
                  <div className="Nolan_Botoshbtn_acces d-flex">
                    <div className="bar_chat_btn1">
                      <a href="#">
                        <i className="fa-solid fa-chart-simple" />
                      </a>
                    </div>
                    <div className="bar_chat_btn2">
                      <a href="#">
                        <i className="fa fa-comment" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Nolan_Botoshbtn mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="Nolan_Botoshbtn_id d-flex">
                    <div className="Nolan_Botoshbtn_img">
                      <img src={video6} alt="img" />
                    </div>
                    <div className="Nolan_Botoshbtn_name">
                      <h5>Madelyn Carder</h5>
                    </div>
                  </div>
                  <div className="Nolan_Botoshbtn_acces d-flex">
                    <div className="bar_chat_btn1">
                      <a href="#">
                        <i className="fa-solid fa-chart-simple" />
                      </a>
                    </div>
                    <div className="bar_chat_btn2">
                      <a href="#">
                        <i className="fa fa-comment" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
          <div className="Share_thought_part d-flex align-items-center">
            <div className="all_btn_select">
              <div className="dropdown show">
                <a
                  className="btn  dropdown-toggle"
                  href="#"
                  role="button"
                  id=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    check
                  </a>
                  <a className="dropdown-item" href="#">
                    test
                  </a>
                  <a className="dropdown-item" href="#">
                    test
                  </a>
                </div>
              </div>
            </div>
            <div className="Share_thought_btn">
              <input
                className="form-control"
                type="text"
                placeholder="Share thought with people"
              />
              <div className="attachment_icon">
                <label className="gallery-input m-0" style={{border:0,cursor:'pointer'}}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAPCAYAAAD6Ud/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgBrZThbcJADIUdlP/NCGGDhAUKE5ANSCdATAAbICYonaDZADoAkE7QMEHpAtDvhQtKW6kikCdd7IstP5/tO89qiKIo6HQ66el0GnqeF/ErsH+A33q32w3sCvg1kgiSV9QQEmsbfo1khRqQZcFaoGfWIkoidxKR5KxBnucHaxl+r9dLkaE7SUnCAfuQj9kHtwSl9PnxeFwQq7j8i+N4haGP4QnDEpIQkg9rAcRMifki3XfTJeT6QDJ3+wxHOTUtY0DMhDUilhLfQ7ZWj8ryYPiUVLk0dSLB4daByGiJEhwTa4osiQo796iL3GN4R6pHc5yHDYIfttvtpNqQ6Ex9Vlt0P0WkkqkvfTHLAaMubMg+tetRsC5EGioSLXViPfiaDkgS9lOYMxxE3EVP+B81IPrRSw1VpVOtr/IJqCZPWSEnm83mrsvqnrJn1KR6przKAMGqmkAZ0d84bWENAUGIGNm57wdWrPvk/cpihjq2FuBIBq4V9uf1dLXV1D3ajaASmtxl/Sn7BgyXyDQKeUIxAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <input type="file" className="form-control" id="uploadFile" />
                  <label />
                </label>
                <a href="#">
                  <img src={imo1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
