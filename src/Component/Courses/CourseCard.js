import React from "react";
import { Link } from "react-router-dom";
import calender from "../../asstes1/images/icon/calender.png";
import user2 from "../../asstes2/images/user2.png";
import courseboximg from "../../asstes1/images/courseboximg.png";
import { useEffect } from "react";

function CourseCard({ data }) {
  // useEffect(() => {
  //     window.$('.item-slider').not(".slick-initialized").slick({
  //         dots: false,
  //         infinite: true,
  //         speed: 300,
  //         slidesToShow: 3,
  //         slidesToScroll: 4,
  //         responsive: [
  //             {
  //                 breakpoint: 1024,
  //                 settings: {
  //                     slidesToShow: 3,
  //                     slidesToScroll: 3,
  //                     infinite: true,
  //                     dots: false
  //                 }
  //             },
  //             {
  //                 breakpoint: 991,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1,
  //                     infinite: true,
  //                     dots: false
  //                 }
  //             },
  //             {
  //                 breakpoint: 768,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             },
  //             {
  //                 breakpoint: 480,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             }
  //         ]
  //     });

  // },[])
  return (
    <div className="item">
      <div className="_courses_box bg-white">
        <img src={data?.thumb_image} />
        <div className="p-2 p-lg-2 p-md-2 p-sm-2">
          <h6
            className="text-dark font-weight-bold"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              maxWidth: '230px',
            }}
          >
            {data?.courseName}
          </h6>
          <div>
            <Link to={'/course_overview/' + data?.slug}>
              <button className="enter-course">Enter Course</button>
            </Link>
            <button style={{ float: 'right',marginTop:"7px" }} class="btn btn-success">
              Inactive Course
            </button>
          </div>

          {/* <div className="button-33 mr-3" style={{ marginLeft:"2rem"}}>
            <i className="fa fa-file-text-o mr-3" aria-hidden="true"></i>
           Active
          </div> */}

          <div className="media-body" style={{ margin: '9px' }}>
            <h5 className="text-dark " style={{ fontSize: 14 }}>
              <div contentEditable="true" dangerouslySetInnerHTML={{ __html: data?.courseDesc }}></div>
            </h5>
          </div>
        </div>
        {/* <div className="d-flex justify-content-between px-4">
          <p className="mb-0" style={{ fontSize: 13 }}>
            <i className="fa fa-circle mr-2 text-danger" aria-hidden="true" />
            {data?.notification.length > 0
              ? `${data?.notification?.length} new notification(s)`
              : `${data?.notification?.length} new notification`}
            {data?.notification?.length} new notifications
          </p>
          <button className="bg-transparent border-0 p-0" style={{ fontSize: 13 }}>
            SEE ALL
          </button>
        </div> */}
        <hr />
        {/* <div className="_notification_wrap notification_wrap_own_styl p-2 p-lg-2 p-md-2 p-sm-3">
          {data?.notification?.length >= 1
            ? data?.notification?.map((value, index) => {
                if (index > 2) {
                  return;
                }
                return (
                  <div className="media" key={index}>
                    <img
                      className="mr-3"
                      src={value.icon}
                      alt="image"
                      style={{
                        background: 'rgba(19, 139, 251, 0.1)',
                        borderRadius: 50,
                        padding: 10,
                        height: 40,
                        width: 40,
                      }}
                    />
                    <div className="media-body">
                      <h6 className="mt-0 text-dark font-weight-bold" style={{ fontSize: 14 }}>
                        {value.title}
                      </h6>
                      <h6 className="text-dark " style={{ fontSize: 14 }}>
                        {value.desc}
                      </h6>
                      <p className="" style={{ color: '#92929D', fontSize: 12 }}>
                        2 hrs ago
                      </p>
                    </div>
                  </div>
                );
              })
            : 'No Notification Found'}
          <h6
            className="text-center custom-collapsse pt-3"
            style={{ color: "#92929D" }}
          >
            COLLAPSE
          </h6>
        </div> */}
      </div>
    </div>
  );
}

export default CourseCard;
