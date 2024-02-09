import React, { useEffect, useState } from "react";
import Ellipse143 from "../../asstes1/images/Ellipse 143.jpg";
import Ellipse144 from "../../asstes1/images/Ellipse 144.jpg";
import Ellipse145 from "../../asstes1/images/Ellipse 145.jpg";
import Ellipse146 from "../../asstes1/images/Ellipse 146.jpg";
import Ellipse147 from "../../asstes1/images/Ellipse 147.jpg";
import Ellipse148 from "../../asstes1/images/Ellipse 148.jpg";

export default function TotalStudent() {
  return (
    <div className="students___rated">
      <div className="stud___rated_people d-flex">
        <div className="stud___rated_img">
          <img src={Ellipse143} alt="image" />
        </div>
        <div className="stud___rated_img">
          <img src={Ellipse144} alt="image" />
        </div>
        <div className="stud___rated_img">
          <img src={Ellipse145} alt="image" />
        </div>
        <div className="stud___rated_img">
          <img src={Ellipse146} alt="image" />
        </div>
        <div className="stud___rated_img">
          <img src={Ellipse147} alt="image" />
        </div>
        <div className="stud___rated_img">
          <img src={Ellipse148} alt="image" />
        </div>
      </div>
      <div className="stud___rated_text">
        <p>+2450 Happy students rated my courses</p>
      </div>
    </div>
  );
}
