import React from "react";
import educarelogo from "../../asstes1/images/educare-logo.png";



export default function Landingheader (){
    return(
        <>
        <header id="header-section" className="Upg_spe_header clearfix">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
              <a className="navbar-brand" href="#">
                <img src={educarelogo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav nav_own_styl">
                  <a className="nav-item nav-link" href="#">
                    Courses
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Instructor
                  </a>
                  <a className="nav-item nav-link active">
                    Join us
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        </>
    )
}