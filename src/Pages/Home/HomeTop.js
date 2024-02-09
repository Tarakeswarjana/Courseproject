import React, { useState } from "react";
import homebg from "../../asstes1/imagesHome/home-bg.png";
import star from "../../asstes1/imagesHome/Vector-star.png";
import apple from "../../asstes1/imagesHome/apple-black-logo-1.png";
import play from "../../asstes1/imagesHome/google-play-1.png";
import a from "../../asstes1/imagesHome/home-ban-img.png";
import { Link } from "react-router-dom";

export default function HomeTop() {
    const [email,setEmail]=useState("")


  return (
    <section
      className="home-banner clearfix"
      style={{ backgroundImage: `url('${homebg}')`, position: "relative" }}
    >
      <div className="container">
        <div className="home-banner-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="home-banner-box">
                <h1>Igniting Potential Opportunity & Success.</h1>
                <p>
                The most advanced course creation  delivery & engagement platform for learning and development experts .{" "}
                </p>
                <form className="search">
                  <div className="form-group" id="from-search">
                    <input
                      type="email"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter your email address"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </form>
                <div className="home-ban-btn-box">
                  <Link
                  to={"/register"}
                  state={{
                    teacherEmail:email
                  }}
                   className="btn home-ban-btn">
                    Get Started
                   </Link>
                </div>
                <div className="home-ban-star-box">
                  <a>
                    <img src={star} />
                  </a>
                  <a>
                    <img src={star} />
                  </a>
                  <a>
                    <img src={star} />
                  </a>
                  <a>
                    <img src={star} />
                  </a>
                  <a>
                    <img src={star} />
                  </a>
                  <p>Based on 10,000+ reviews on</p>
                </div>
                <div className="home-ban-play-apple-btn-box">
                  <a className="btn home-ban-apple-btn">
                    <img src={play} style={{ paddingRight: 7 }} />
                    Play Store
                  </a>
                  <a className="btn home-ban-play-btn">
                    <img src={apple} style={{ paddingRight: 7 }} />
                    App Store
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="home-banner-img-box">
                <img src={a} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
