import React from "react";
import video1 from "../../asstes1/images/Rectangle 1886.jpg";
import video2 from "../../asstes1/images/Rectangle 1887.jpg";
import video3 from "../../asstes1/images/Rectangle 1888.jpg";
import video4 from "../../asstes1/images/Rectangle 1889.jpg";
import video5 from "../../asstes1/images/pin.png";
import video6 from "../../asstes1/images/Rectangle 1893.jpg";
import imo1 from "../../asstes1/images/emoji.png";

export default function Participants() {
  return (
    <>
      <div className="small_display">
        <div className="d-flex">
          <div className="small_img">
            <img src={video2} alt="img" />
            <div className="small_img_overlay">
              <a href="#">
                <i className="fa-solid fa-chart-simple" />
              </a>
            </div>
          </div>
          <div className="small_img">
            <img src={video3} alt="img" />
            <div className="small_img_overlay">
              <a href="#" className="miceoff">
                <i className="fa-solid fa-microphone-slash" />
              </a>
            </div>
          </div>
          <div className="small_img">
            <img src={video4} alt="img" />
            <div className="small_img_overlay">
              <a href="#">
                <i className="fa-solid fa-chart-simple" />
              </a>
            </div>
          </div>
          <div className="small_img_store">
            <img src={video2} alt="img" />
            <a href="#" className="small_img_store_overlay">
              <span>
                <i className="fa-solid fa-chevron-right" />
              </span>
              <p>32 others</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
