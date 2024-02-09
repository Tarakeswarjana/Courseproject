import React from "react";
import arrow from "../../asstes1/imagesHome/Vector-arrow.png";
import bg from "../../asstes1/imagesHome/Group-70024 (1).png";
import { Link } from "react-router-dom";

export default function FullControl() {
  return (
    <div className="container">
      <section className="control-courses-part clearfix">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="control-courses-box">
                <h2>Full Control Over Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor cursus tincidunt nulla ac dolor
                  aliquet
                  <br /> interdum. Morbi quis hendrerit quis sed.
                </p>
                <div className="control-courses-img-box">
                  <img src={bg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
          <div className="dashboard-get-btn-box">
            <Link to={'/register'} className="btn dashboard-get-btn" style={{ backgroundColor: '#D2F1FB' }}>
              Get started
              <img src={arrow} style={{ paddingLeft: 10 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
