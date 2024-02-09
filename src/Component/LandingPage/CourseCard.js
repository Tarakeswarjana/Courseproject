import Rectangle8 from "../../asstes1/images/Rectangle 8.jpg";
import Group69377 from "../../asstes1/images/Group 69377.png";
import ReactStars from "react-rating-stars-component";

export default function CourseCard({ data }) {
  return (
    <div className="mx-2">
    <div className="Cours_Provid_card" style={{maxWidth:'393px',width: '100%',height: '100%',overflow: 'hidden',marginBottom:"20px"}}>
      <div className="Cours_Provid_banner">
        <img src={data.thumb_image} alt="image" />
        <div className="Watch_Intro_btn">
          {/* <a href="#">
                  <img className="intro__icon" src={Group69377} />
                  <span>Watch Intro</span>
                </a> */}
        </div>
      </div>
      <div className="Cours_Provid_text">
        <h4>Courses Name:{data.courseName}</h4>
        <ul className="Format___list">
          <li>
            Format : <strong>{data.courseType} ( ---- )</strong>
          </li>
          {/* <li>
                  Catagory : <strong>Speaking, English, Pronunciation</strong>
                </li> */}
          <li>
            Duration : <strong>{data.duration}</strong>
          </li>
          <li>
            Rating :{" "}
            <strong>
              {data.avgRating} ({data.ratingCount})
            </strong>
          </li>
          <li>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              // edit={false}
              value={data.avgRating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </li>
        </ul>
        <div className="Enroll_Course_part d-block d-sm-flex justify-content-between">
          <div className="Enroll_Course_rupees">
            <h5>{data.price} {data.currency}</h5>
            {/* <p>96 USD</p> */}
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
    </div>
    </div>
  );
}
