
import love from '../../asstes1/images/icon/love.png'
import design1 from '../../asstes1/images/design1.png'
import archivetick from '../../asstes1/images/icon/archive-tick.png'
import start from '../../asstes1/images/icon/start.png'
import hrs from '../../asstes1/images/icon/hrs.png'
import profiledetails from '../../asstes1/images/icon/profile-details.png'
import design2 from '../../asstes1/images/design2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true
  };

export default function UploadedCourses({courses}) {
    return (
        <>
            <h2 className="uploaded-title">
                Uploaded Courses<span className="span-title">{courses.length} Courses</span>
            </h2>
            {/* <div className="uploaded_courses_wrapper"> */}
            <Slider {...settings} className="uploaded_courses_wrapper">
             {courses.map((item,index)=>{
                 return <div className="uploaded_courses_wrapper_item" key={index}>
                 <div className="section-details pos-prpr">
                     <span className="span-tag">Get 50 Loyalty points</span>
                     <span className="span-whish">
                         <img
                             src={love}
                             style={{ margin: "10px auto" }}
                         />
                     </span>
                 </div>
                 <img src={item.thumb_image} alt="" />
                 <h3 className="design-title">
                   {item.courseName}
                 </h3>
                 <div className="section-details">
                     <p style={{ fontWeight: 500, fontSize: "16px" }}>
                         <img src={start} />
                        {item.avgRating??0}
                     </p>
                     <p style={{ fontWeight: 500, fontSize: "16px" }}>
                         <img src={hrs} />{item.duration}
                     </p>
                     <p style={{ fontWeight: 500, fontSize: "16px" }}>
                         <img src={archivetick} />
                        {item.courseType}
                     </p>
                 </div>
                 <span className="border-line" />
                 <div className="section-details">
                     <p>
                         <img src={profiledetails} />
                         Hanna Septimus
                     </p>
                     <p
                         style={{
                             fontStyle: "normal",
                             fontWeight: 700,
                             fontSize: "16px",
                             lineHeight: "24px",
                             color: "#171725"
                         }}
                     >
                         $45
                     </p>
                 </div>
             </div>
             })}   
             </Slider>
                {/* <div className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                        <span className="span-tag">Get 50 Loyalty points</span>
                        <span className="span-whish">
                            <img
                                src={love}
                                style={{ margin: "10px auto" }}
                            />
                        </span>
                    </div>
                    <img src={design2} alt="" />
                    <h3 className="design-title">
                        Product Design in Blender : 3D modeling, rendering and sculpting
                    </h3>
                    <div className="section-details">
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={start} />
                            4.7
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={archivetick} />5 hrs
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={hrs} />
                            Online
                        </p>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                        <p>
                            <img src={profiledetails} />
                            Hanna Septimus
                        </p>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#171725"
                            }}
                        >
                            $45
                        </p>
                    </div>
                </div>
                <div className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                        <span className="span-tag">Get 50 Loyalty points</span>
                        <span className="span-whish">
                            <img
                                src={love}
                                style={{ margin: "10px auto" }}
                            />
                        </span>
                    </div>
                    <img src={design1} alt="" />
                    <h3 className="design-title">
                        Product Design in Blender : 3D modeling, rendering and sculpting
                    </h3>
                    <div className="section-details">
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={start} />
                            4.7
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={archivetick} />5 hrs
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={hrs} />
                            Online
                        </p>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                        <p>
                            <img src={profiledetails} />
                            Hanna Septimus
                        </p>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight:"24px",
                                color: "#171725"
                            }}
                        >
                            $45
                        </p>
                    </div>
                </div>
                <div className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                        <span className="span-tag">Get 50 Loyalty points</span>
                        <span className="span-whish">
                            <img
                                src={love}
                                style={{ margin: "10px auto" }}
                            />
                        </span>
                    </div>
                    <img src={design1} alt="" />
                    <h3 className="design-title">
                        Product Design in Blender : 3D modeling, rendering and sculpting
                    </h3>
                    <div className="section-details">
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={start} />
                            4.7
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={archivetick} />5 hrs
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={hrs} />
                            Online
                        </p>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                        <p>
                            <img src={profiledetails} />
                            Hanna Septimus
                        </p>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight:"24px",
                                color: "#171725"
                            }}
                        >
                            $45
                        </p>
                    </div>
                </div>
                <div className="uploaded_courses_wrapper_item">
                    <div className="section-details pos-prpr">
                        <span className="span-tag">Get 50 Loyalty points</span>
                        <span className="span-whish">
                            <img
                                src={love}
                                style={{ margin: "10px auto" }}
                            />
                        </span>
                    </div>
                    <img src={design1} alt="" />
                    <h3 className="design-title">
                        Product Design in Blender : 3D modeling, rendering and sculpting
                    </h3>
                    <div className="section-details">
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={start} />
                            4.7
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={archivetick} />5 hrs
                        </p>
                        <p style={{ fontWeight: 500, fontSize:"16px"}}>
                            <img src={hrs} />
                            Online
                        </p>
                    </div>
                    <span className="border-line" />
                    <div className="section-details">
                        <p>
                            <img src={profiledetails} />
                            Hanna Septimus
                        </p>
                        <p
                            style={{
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize:"16px",
                                lineHeight:"24px",
                                color: "#171725"
                            }}
                        >
                            $45
                        </p>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}