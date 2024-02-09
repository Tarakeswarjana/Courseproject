import React, { useState } from 'react'
import { toast, ToastContainer, Zoom } from "react-toastify";
import courseuser from "../../asstes2/images/courseuser.png";
import user_remove from "../../asstes2/images/user-remove.png";
import receipt from "../../asstes2/images/receipt.png";
import a from '../../asstes2/images/star.png';
import timer from '../../asstes2/images/timer.png';
import archive_tick from '../../asstes2/images/archive_tick.png';
import clntcrse from '../../asstes2/images/clntcrse.png';
import lve from '../../asstes2/images/lve.png';
// import upld_teacher from "../../asstes2/images/upld_teacher.png"
import crt1 from '../../asstes2/images/crt1.png';
import crt2 from '../../asstes2/images/crt2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiSpanner } from 'react-icons/ti';



export default function Index() {
    const [accrs, setAccrs] = useState(false);
    const settings_own = {
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
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

    const settings_own1 = {
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
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
    const settings_own2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
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
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
                limit={3}
                theme="colored"
            />

            <div className="_enrollment">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className='h-100'>
                            <div className='rnbw_bg'>
                                <div className='btn_back'>
                                    <a href="#" className='btn_back_own'>
                                        Back
                                    </a>
                                </div>
                                <div className='bg_img_teacher'>
                                    <img src={courseuser} alt="/" />
                                </div>
                            </div>
                            <div className='bdr_btm'>
                                <div className='teacher_dtls'>
                                    <h5 className='tchr_dtls_nm'>
                                        Kadin Mango
                                    </h5>
                                    <p className='tchr_dtls_txt'>
                                        Last month we designed Testerz.io web platform where Amazon sellers can get better reviews for their products.
                                    </p>
                                </div>
                                <div className='scl_icon_img'>
                                    <span className='scl_icon_img_fb'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </span>
                                    <span className='scl_icon_img_fb'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </span>
                                    <span className='scl_icon_img_fb'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </span>
                                </div>
                                <div className='book_indvdal_btn'>
                                    <a href="#" className='book_individual_cosch_cl'>Book Individual Coaching Call</a>
                                </div>
                            </div>

                            <div className='stdnt_rvws'>
                                <div className='stfnt_rvws_txt'>
                                    <h5 className='stdnt_tcxt'>
                                        Students Reviews
                                    </h5>
                                    <p className='rvw'>4.7 <span className='rvws_amnt'>(1200 reviews)</span></p>
                                </div>
                                <div className='cstm_scrl'>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='stnd_box'>
                                        <div className='stnd_box_rvw'>
                                            <div className='img_rvw'>
                                                <img src={courseuser} alt="/" />
                                            </div>
                                            <div className='rvw_person_name'>
                                                <div className='name_persn'>
                                                    Darlene Robertson
                                                </div>
                                                <span className='rvw_rating'>
                                                    4.0
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className='rvw_cmnt'>
                                            <p className='rvw_cmnt_para'>
                                                Last month we designed Testerz.io web platform where Amazon sellers. designed Testerz.io web platform where Amazon sellers.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-12'>
                        <div className='teacher_rmv_cntrl'>
                            <div className='teacher_rmv_cntrl_btn'>
                                <div className='teacher_cntrl_btn'>
                                    <a href="#" className='rmvteacherbtnstl'>
                                        <img src={user_remove} alt="/" />
                                        <h5 className='rmvteacherbtn'>Remove Teacher</h5>
                                    </a>
                                </div>
                                <div className='teacher_cntrl_btn' onClick={() => { setAccrs(!accrs) }}>
                                    <a href="#" className='accesscntrl'>
                                        <img src={user_remove} alt="/" />
                                        <h5 className='accesscntrlbtn'>Access Control</h5>
                                        <i class="fa-solid fa-caret-down" style={{ marginLeft: "10px" }}></i>
                                    </a>
                                    {accrs &&
                                        <>
                                            <div style={{ position: "absolute", height: "100vh", width: "100vh" }} onClick={() => { setAccrs(!accrs) }} >

                                            </div>
                                            <div className='accrs_cntrl' onClick={(e) => e.stopPropagation()} >
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        Upload course
                                                    </label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        Can take coaching classes
                                                    </label>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        Can add new teacher
                                                    </label>
                                                </div>

                                            </div>
                                        </>
                                    }
                                    {/* <div classname="accrs_cntrl">
                                        <input type="checkbox" id="" name="" defaultValue="" />
                                        <label htmlFor=""> Upload course</label>
                                        <input type="checkbox" id="" name="" defaultValue="" />
                                        <label htmlFor=""> Can take coaching classes</label>
                                        <input type="checkbox" id="" name="" defaultValue="" />
                                        <label htmlFor="">Can add new teacher</label>
                                    </div> */}

                                </div>

                            </div>
                        </div>
                        <div className='row crd_bg_pd'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-6'>
                                <div className=' crd_bg_wh'>
                                    <div className='crd_dtls_txt'>
                                        Total Uploaded courses
                                    </div>
                                    <div className='data_icon'>
                                        <h5 className='data'>
                                            06
                                        </h5>
                                        <div className='data_icon_img'>
                                            <img src={receipt} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-6 '>
                                <div className=' crd_bg_wh'>
                                    <div className='crd_dtls_txt'>
                                        Total Uploaded courses
                                    </div>
                                    <div className='data_icon'>
                                        <h5 className='data'>
                                            06
                                        </h5>
                                        <div className='data_icon_img'>
                                            <img src={receipt} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-6'>
                                <div className=' crd_bg_wh'>
                                    <div className='crd_dtls_txt'>
                                        Total Uploaded courses
                                    </div>
                                    <div className='data_icon'>
                                        <h5 className='data'>
                                            06
                                        </h5>
                                        <div className='data_icon_img'>
                                            <img src={receipt} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-6'>
                                <div className=' crd_bg_wh'>
                                    <div className='crd_dtls_txt'>
                                        Total Uploaded courses
                                    </div>
                                    <div className='data_icon'>
                                        <h5 className='data'>
                                            06
                                        </h5>
                                        <div className='data_icon_img'>
                                            <img src={receipt} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-6 '>
                                <div className=' crd_bg_wh'>
                                    <div className='crd_dtls_txt'>
                                        Total Uploaded courses
                                    </div>
                                    <div className='data_icon'>
                                        <h5 className='data'>
                                            06
                                        </h5>
                                        <div className='data_icon_img'>
                                            <img src={receipt} alt="/" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='techer_abt_me'>
                            <div className='teacher_abt_txt'>
                                <h5 className='teacher_abt_txt_abt'>About Me</h5>
                                <p className='teacher_abt_txt_ab_para'>Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves with a characteristic velocity. The modern view is that light needs no medium of transmission, but Maxwell and his contemporaries were convinced that light waves were propagated in a medium, analogous to sound propagating in air, and ripples propagating on the surface of a pond. This hypothetical medium was called the luminiferous aether, at rest relative to the "fixed stars" and through which the Earth moves. Fresnel's partial ether dragging hypothesis ruled out the measurement of first-order (v/c) effects, and although observations of second-order effects (v2/c2) were possible in principle, Maxwell thoughy.</p>
                                <p className='teacher_abt_txt_ab_para2'>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed.</p>
                            </div>

                        </div>
                        <div className='crse_upld'>
                            <div className="_courses_boxwrap">
                                <div className='upld_crse'>
                                    <h2 className='upld_crse_h'>
                                        Uploaded Courses <span className='crse'>5 Courses</span>
                                    </h2>
                                </div>
                                <Slider {...settings_own}>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_img_main'>
                                            <div className='upld_crse_img'>
                                                <div className='upld_crse_img_lve'>
                                                    <div className='img_btn'>
                                                        <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                        <img src={lve} alt="/" className='img_lve' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                            </div>
                                            <div className='rating_crse-flx'>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={a} alt="/" />
                                                    <h5 className='rtaing'>4.7</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={timer} alt="/" />
                                                    <h5 className='rtaing'>5hrs</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={archive_tick} alt="/" />
                                                    <h5 className='rtaing'>online</h5>
                                                </span>
                                            </div>
                                            <div className='cmnt_rvw'>
                                                <span className='cmnt_rvw_img_nm'>
                                                    <img src={clntcrse} alt="/" />
                                                    <h5>Hanna Septimus</h5>
                                                </span>

                                                <div className='cmnt_rps'>
                                                    <h5>$45</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_img_main'>
                                            <div className='upld_crse_img'>
                                                <div className='upld_crse_img_lve'>
                                                    <div className='img_btn'>
                                                        <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                        <img src={lve} alt="/" className='img_lve' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                            </div>
                                            <div className='rating_crse-flx'>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={a} alt="/" />
                                                    <h5 className='rtaing'>4.7</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={timer} alt="/" />
                                                    <h5 className='rtaing'>5hrs</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={archive_tick} alt="/" />
                                                    <h5 className='rtaing'>online</h5>
                                                </span>
                                            </div>
                                            <div className='cmnt_rvw'>
                                                <span className='cmnt_rvw_img_nm'>
                                                    <img src={clntcrse} alt="/" />
                                                    <h5>Hanna Septimus</h5>
                                                </span>

                                                <div className='cmnt_rps'>
                                                    <h5>$45</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_img_main'>
                                            <div className='upld_crse_img'>
                                                <div className='upld_crse_img_lve'>
                                                    <div className='img_btn'>
                                                        <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                        <img src={lve} alt="/" className='img_lve' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                            </div>
                                            <div className='rating_crse-flx'>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={a} alt="/" />
                                                    <h5 className='rtaing'>4.7</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={timer} alt="/" />
                                                    <h5 className='rtaing'>5hrs</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={archive_tick} alt="/" />
                                                    <h5 className='rtaing'>online</h5>
                                                </span>
                                            </div>
                                            <div className='cmnt_rvw'>
                                                <span className='cmnt_rvw_img_nm'>
                                                    <img src={clntcrse} alt="/" />
                                                    <h5>Hanna Septimus</h5>
                                                </span>

                                                <div className='cmnt_rps'>
                                                    <h5>$45</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_img_main'>
                                            <div className='upld_crse_img'>
                                                <div className='upld_crse_img_lve'>
                                                    <div className='img_btn'>
                                                        <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                        <img src={lve} alt="/" className='img_lve' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                            </div>
                                            <div className='rating_crse-flx'>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={a} alt="/" />
                                                    <h5 className='rtaing'>4.7</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={timer} alt="/" />
                                                    <h5 className='rtaing'>5hrs</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={archive_tick} alt="/" />
                                                    <h5 className='rtaing'>online</h5>
                                                </span>
                                            </div>
                                            <div className='cmnt_rvw'>
                                                <span className='cmnt_rvw_img_nm'>
                                                    <img src={clntcrse} alt="/" />
                                                    <h5>Hanna Septimus</h5>
                                                </span>

                                                <div className='cmnt_rps'>
                                                    <h5>$45</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_img_main'>
                                            <div className='upld_crse_img'>
                                                <div className='upld_crse_img_lve'>
                                                    <div className='img_btn'>
                                                        <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                        <img src={lve} alt="/" className='img_lve' />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cnt'>
                                                <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                            </div>
                                            <div className='rating_crse-flx'>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={a} alt="/" />
                                                    <h5 className='rtaing'>4.7</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={timer} alt="/" />
                                                    <h5 className='rtaing'>5hrs</h5>
                                                </span>
                                                <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={archive_tick} alt="/" />
                                                    <h5 className='rtaing'>online</h5>
                                                </span>
                                            </div>
                                            <div className='cmnt_rvw'>
                                                <span className='cmnt_rvw_img_nm'>
                                                    <img src={clntcrse} alt="/" />
                                                    <h5>Hanna Septimus</h5>
                                                </span>

                                                <div className='cmnt_rps'>
                                                    <h5>$45</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='upld_crse_img'>
                                            <div className='upld_crse_img_lve'>
                                                <div className='img_btn'>
                                                    <a href="#" className='btnlyl'>Get 50 Loyalty points</a>
                                                    <img src={lve} alt="/" className='img_lve' />

                                                </div>
                                            </div>
                                        </div>
                                        <div className='cnt'>
                                            <p>Product Design in Blender : 3D modeling, rendering and sculpting</p>
                                        </div>
                                        <div className='rating_crse-flx'>
                                            <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={a} alt="/" />
                                                <h5 className='rtaing'>4.7</h5>
                                            </span>
                                            <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={timer} alt="/" />
                                                <h5 className='rtaing'>5hrs</h5>
                                            </span>
                                            <span className='stra_rating' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={archive_tick} alt="/" />
                                                <h5 className='rtaing'>online</h5>
                                            </span>
                                        </div>
                                        <div className='cmnt_rvw'>
                                            <span className='cmnt_rvw_img_nm'>
                                                <img src={clntcrse} alt="/" />
                                                <h5>Hanna Septimus</h5>
                                            </span>

                                            <div className='cmnt_rps'>
                                                <h5>$45</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>




                            </div>
                        </div>

                        <div className='exprs_upld'>
                            <div className="_courses_boxwrap">
                                <div className='upld_crse'>
                                    <h2 className='upld_crse_h'>
                                        Experiences
                                    </h2>
                                </div>
                                <Slider {...settings_own1}>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='expres_crd'>
                                            <div className='expres_crd_txt'>
                                                <p className='expres_crd_txt_hhh'>The More Important the Work, the More Important the Rest</p>
                                                <p className='expres_crd_txt_ppp'>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration.
                                                    <span className='seemr'>see More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>




                            </div>
                        </div>

                        <div className='exprs_upld'>
                            <div className="_courses_boxwrap">
                                <div className='upld_crse'>
                                    <h2 className='upld_crse_h'>
                                        Certificates
                                    </h2>
                                </div>
                                <Slider {...settings_own2}>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt1} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt2} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt1} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt2} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt1} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                    <div className="_courses_boxwrap_slider_crd">
                                        <div className='crtfict_img'>
                                            <img src={crt2} alt="/" />
                                        </div>
                                        <div className='name_crt'>
                                            <h5 className='name_crth'>
                                                Name of the certifiacte
                                            </h5>
                                            <p className='name_crth_dt'>
                                                Achieved year 2020
                                            </p>
                                        </div>
                                    </div>
                                </Slider>




                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
