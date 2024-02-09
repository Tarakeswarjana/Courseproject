import React from 'react'
import { useRef } from 'react';
import video from "../asstes2/images/video/Intro-Short-Video-Edinboro-University.mp4";
import crtnewlogo from "../asstes2/images/crtnewlogo.png";
import vdoply from "../asstes2/images/vdoply.png";


const Own =({trainingtag}) => {
    const videoRef = useRef();
    const handlePlay =()=>{
        videoRef.current.play();
    }
    // const={ trainingtag } = props;

    // const videoRef = useRef(null);
    // const handlePlay = (e) => {
    //     let sibling = e.target.parentNode.parentNode.children
    //     let id = null;

    //     console.log("e", sibling);
    //     for (var i = sibling.length; i--;) {
    //         if (sibling[i].id) {
    //             console.log(sibling[i].id);
    //             id = sibling[i].id;
    //             break;
    //         }
    //     }


    //     let videoEle = document.getElementById(id)

    //     // if(videoEle.pause)
    //     videoEle.play()

    // }
    return (
        <>

            <div className="video_area_main">

                <div className='video'>
                    <video poster muted style={{ width: "100%", height: "100%", objectFit: "cover" }} id="ply"
                        ref={videoRef}
                        src={video}
                    />
                    {/* <source
                         src={video}
                         type="video/mp4"
                       /> */}
                    {/* </video> */}
                    <div className="vdo_logo">
                        <img src={crtnewlogo} alt="" />
                    </div>
                    <div className="vdo_play">
                        <img src={vdoply} alt="" 
                        onClick={handlePlay}/>
                    </div>
                    <div className="vdo_course_main">
                        <p className="vdo_course_para1">
                            “{trainingtag}”
                        </p>
                        <p className="vdo_course_para2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Own