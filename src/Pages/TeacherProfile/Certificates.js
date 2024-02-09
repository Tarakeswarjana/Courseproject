import certificate from '../../asstes1/images/certificate.png'
import certificate2 from '../../asstes1/images/certificate2.png'
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

export default function Certificates({certificates}) {
    return (
        <>
            <h2 className="uploaded-title">Certificates</h2>
            {/* <div className="certificate_courses_wrapper"> */}
            <Slider {...settings} className="certificate_courses_wrapper">
              {certificates?.map((item,index)=>{
                  return <div className="certificate_courses_wrapper_item">
                  <img src={item.document} alt="" />
                  <h3 className="certificate-title">{item.certificationTitle}</h3>
                  <h3 className="certificate-title-new">Achieved year {item.achiveYear}</h3>
              </div>
              })}  
               
                {/* <div className="certificate_courses_wrapper_item">
                    <img src={certificate2} alt="" />
                    <h3 className="certificate-title">Name of the certifiacte</h3>
                    <h3 className="certificate-title-new">Achieved year 2020</h3>
                </div> */}
                {/* <div className="certificate_courses_wrapper_item">
                    <img src={certificate} alt="" />
                    <h3 className="certificate-title">Name of the certifiacte</h3>
                    <h3 className="certificate-title-new">Achieved year 2020</h3>
                </div>
                <div className="certificate_courses_wrapper_item">
                    <img src={certificate2} alt="" />
                    <h3 className="certificate-title">Name of the certifiacte</h3>
                    <h3 className="certificate-title-new">Achieved year 2020</h3>
                </div> */}
                </Slider>

            {/* </div> */}
        </>
    )
}