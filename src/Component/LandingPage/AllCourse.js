import React, { useEffect,useState } from "react";
import arrow_profileprev from "../../asstes1/images/icon/arrow_profileprev.png";
import Rectangle8 from "../../asstes1/images/Rectangle 8.jpg";
import Group69377 from "../../asstes1/images/Group 69377.png";
import Rectangle10 from "../../asstes1/images/Rectangle 10.jpg";
import Rectangle9 from "../../asstes1/images/Rectangle 9.jpg";
import HttpClient from "../../utils/HttpClient";
import CourseCard from "./CourseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function AllCourses({coursesData}) {
  const [loading,setLoading] = useState(false)

// console.log(coursesData);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
     
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className="Courses_Provid  clearfix courses_provid_own_btm">
      <div
        className="custcontainer"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="Courses_Provid_head">
              <h2>Courses Provided By Me</h2>
            </div>
          </div>
        </div>
        <Slider className="courseProvider" {...settings}>
            
          {
            coursesData?.map((item,index)=>{
              return(
                <CourseCard
                key={index}
                data={item}
                />
              )
            })
          }

          {/* <div className="Cours_Provid_card">
            <div className="Cours_Provid_banner">
              <img src={Rectangle8} alt="image" />
              <div className="Watch_Intro_btn">
                <a href="#">
                  <img className="intro__icon" src={Group69377} />
                  <span>Watch Intro</span>
                </a>
              </div>
            </div>
            <div className="Cours_Provid_text">
              <h4>
                Courses Name : 101 Beginner. Learn English Basic Skills For
                Speaking
              </h4>
              <ul className="Format___list">
                <li>
                  Format : <strong>Offline ( Address)</strong>
                </li>
                <li>
                  Catagory : <strong>Speaking, English, Pronunciation</strong>
                </li>
                <li>
                  Duration : <strong>5 hours</strong>
                </li>
                <li>
                  Rating : <strong>4.7 ( 84,000)</strong>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </li>
              </ul>
              <div className="Enroll_Course_part d-block d-sm-flex justify-content-between">
                <div className="Enroll_Course_rupees">
                  <h5>45 USD</h5>
                  <p>96 USD</p>
                </div>
                <div className="Enroll_Course_btn">
                  <a href="#">Enroll Course</a>
                </div>
              </div>
              <div className="loyalty__batn">
                <a href="#">
                  <u>Earn</u> 50 Loyalty <u>points by taking this course</u>
                </a>
              </div>
            </div>
          </div> */}
          {/*--*/}
          {/* <div className="Cours_Provid_card">
            <div className="Cours_Provid_banner">
              <img src={Rectangle9} alt="image" />
              <div className="Watch_Intro_btn">
                <a href="#">
                  <img className="intro__icon" src={Group69377} />
                  <span>Watch Intro</span>
                </a>
              </div>
            </div>
            <div className="Cours_Provid_text">
              <h4>
                Courses Name : 101 Beginner. Learn English Basic Skills For
                Speaking
              </h4>
              <ul className="Format___list">
                <li>
                  Format : <strong>Offline ( Address)</strong>
                </li>
                <li>
                  Catagory : <strong>Speaking, English, Pronunciation</strong>
                </li>
                <li>
                  Duration : <strong>5 hours</strong>
                </li>
                <li>
                  Rating : <strong>4.7 ( 84,000)</strong>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </li>
              </ul>
              <div className="Enroll_Course_part d-block d-sm-flex justify-content-between">
                <div className="Enroll_Course_rupees">
                  <h5>45 USD</h5>
                  <p>96 USD</p>
                </div>
                <div className="Enroll_Course_btn">
                  <a href="#">Enroll Course</a>
                </div>
              </div>
              <div className="loyalty__batn">
                <a href="#">
                  <u>Earn</u> 50 Loyalty <u>points by taking this course</u>
                </a>
              </div>
            </div>
          </div> */}
          {/*--*/}
          {/* <div className="Cours_Provid_card">
            <div className="Cours_Provid_banner">
              <img src={Rectangle10} alt="image" />
              <div className="Watch_Intro_btn">
                <a href="#">
                  <img className="intro__icon" src={Group69377} />
                  <span>Watch Intro</span>
                </a>
              </div>
            </div>
            <div className="Cours_Provid_text">
              <h4>
                Courses Name : 101 Beginner. Learn English Basic Skills For
                Speaking
              </h4>
              <ul className="Format___list">
                <li>
                  Format : <strong>Offline ( Address)</strong>
                </li>
                <li>
                  Catagory : <strong>Speaking, English, Pronunciation</strong>
                </li>
                <li>
                  Duration : <strong>5 hours</strong>
                </li>
                <li>
                  Rating : <strong>4.7 ( 84,000)</strong>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </li>
              </ul>
              <div className="Enroll_Course_part d-block d-sm-flex justify-content-between">
                <div className="Enroll_Course_rupees">
                  <h5>45 USD</h5>
                  <p>96 USD</p>
                </div>
                <div className="Enroll_Course_btn">
                  <a href="#">Enroll Course</a>
                </div>
              </div>
              <div className="loyalty__batn">
                <a href="#">
                  <u>Earn</u> 50 Loyalty <u>points by taking this course</u>
                </a>
              </div>
            </div>
          </div> */}
          {/*---*/}
          {/* <div className="Cours_Provid_card">
            <div className="Cours_Provid_banner">
              <img src={Rectangle10} alt="image" />
              <div className="Watch_Intro_btn">
                <a href="#">
                  <img className="intro__icon" src={Group69377} />
                  <span>Watch Intro</span>
                </a>
              </div>
            </div>
            <div className="Cours_Provid_text">
              <h4>
                Courses Name : 101 Beginner. Learn English Basic Skills For
                Speaking
              </h4>
              <ul className="Format___list">
                <li>
                  Format : <strong>Offline ( Address)</strong>
                </li>
                <li>
                  Catagory : <strong>Speaking, English, Pronunciation</strong>
                </li>
                <li>
                  Duration : <strong>5 hours</strong>
                </li>
                <li>
                  Rating : <strong>4.7 ( 84,000)</strong>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </li>
              </ul>
              <div className="Enroll_Course_part d-block d-sm-flex justify-content-between">
                <div className="Enroll_Course_rupees">
                  <h5>45 USD</h5>
                  <p>96 USD</p>
                </div>
                <div className="Enroll_Course_btn">
                  <a href="#">Enroll Course</a>
                </div>
              </div>
              <div className="loyalty__batn">
                <a href="#">
                  <u>Earn</u> 50 Loyalty <u>points by taking this course</u>
                </a>
              </div>
            </div>
          </div> */}
        </Slider>
        <div className="all__courses__btn">
          <a href="#">All Courses</a>
        </div>
      </div>
    </section>
  );
}
