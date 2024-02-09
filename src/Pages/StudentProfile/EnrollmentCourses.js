import React from "react";
import courseboximg from '../../asstes1/images/courseboximg.png'


export default function EnrollementCourses({courses}) {
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment enrollment_own">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <h1 className="course-tite course_title_own">Total {courses.length} Courses Enrolled</h1>
                                <div className="_enroll_course_list">
                                  {courses.map((item)=>{
                                      return  <div className="_enroll_course_item" key={item.course._id}>
                                      <div className="image-section">
                                          <img src={item.course.thumb_image}   style={{height:"100px",width:"100%"}}/>
                                      </div>
                                      <div className="text-section">
                                          <h6
                                              style={{ fontSize: "14px", color: "#171725", fontWeight: "500", lineHeight: "21px", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "150px" }}
                                          >
                                              {item.course.courseName}.
                                          </h6>
                                          <p
                                              className="mb-0"
                                              style={{ fontSize: "12px", color: "#898989", fontWeight: "500", marginTop: "20px" }}
                                          >
                                              Enrolled : 14 January, 2021
                                          </p>
                                          <h6
                                              style={{ color: "#138BFB", fontSize: "12px", fontWeight: "500", marginTop: "20px" }}
                                          >
                                              {" "}
                                              0 % complete
                                          </h6>
                                          <div className="progress" style={{ borderRadius: 10, height: 9 }}>
                                              <div className="progress-bar" style={{ width: "00%", borderRadius: 10 }} />
                                          </div>
                                      </div>
                                  </div>
                                  })} 
                                    {/* <div className="_enroll_course_item">
                                        <div className="image-section">
                                            <img src={courseboximg} />
                                        </div>
                                        <div className="text-section">
                                            <h6
                                                style={{ fontSize: "14px", color: "#171725", fontWeight: "500", lineHeight: "21px" }}
                                            >
                                                Product Design in Blender : 3D modeling, rendering.
                                            </h6>
                                            <p
                                                className="mb-0"
                                                style={{ fontSize: "12px", color: "#898989", fontWeight: "500", marginTop: "20px" }}
                                            >
                                                Enrolled : 14 January, 2021
                                            </p>
                                            <h6
                                                style={{ color: "#138BFB", fontSize: "12px", fontWeight: "500", marginTop: "20px" }}
                                            >
                                                {" "}
                                                60 % complete
                                            </h6>
                                            <div className="progress" style={{ borderRadius: 10, height: 9 }}>
                                                <div className="progress-bar" style={{ width: "70%", borderRadius: 10 }} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="_enroll_course_item">
                                        <div className="image-section">
                                            <img src={courseboximg} />
                                        </div>
                                        <div className="text-section">
                                            <h6
                                                style={{ fontSize: "14px", color: "#171725", fontWeight: "500", lineHeight: "21px" }}
                                            >
                                                Product Design in Blender : 3D modeling, rendering.
                                            </h6>
                                            <p
                                                className="mb-0"
                                                style={{ fontSize: "12px", color: "#898989", fontWeight: "500", marginTop: "20px" }}
                                            >
                                                Enrolled : 14 January, 2021
                                            </p>
                                            <h6
                                                style={{ color: "#138BFB", fontSize: "12px", fontWeight: "500", marginTop: "20px" }}
                                            >
                                                {" "}
                                                60 % complete
                                            </h6>
                                            <div className="progress" style={{ borderRadius: 10, height: 9 }}>
                                                <div className="progress-bar" style={{ width: "70%", borderRadius: 10 }} />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}