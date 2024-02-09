import React, { useEffect, useState } from "react";
import arrow_profileprev from "../../asstes1/images/icon/arrow_profileprev.png";
import edit from "../../asstes1/images/edit-2.png";
import educarelogo from "../../asstes1/images/educare-logo.png";
import Polygon1 from "../../asstes1/images/Polygon 1.png";
import Ellipse380 from "../../asstes1/images/Ellipse 380.jpg";
import zoom1Traced from "../../asstes1/images/zoom 1 (Traced).svg";
import facebook from "../../asstes1/images/facebook.png";
import twitter from "../../asstes1/images/twitter.png";
import googleplus from "../../asstes1/images/google-plus.png";
import { useNavigate } from "react-router-dom";
import AllCourses from "../../Component/LandingPage/AllCourse";
import TotalStudent from "../../Component/LandingPage/TotalStudent";
import Topbar from "./Topbar";
import Footer from "./Footer";
import HttpClient from "../../utils/HttpClient";
import Landingheader from "../../Component/LandingPage/LandingHeader";
import LandingDec from "./LandingDec";
import ImageChange from "./ImageChange";
import ShortDec from "./ShortDec";
import LongDesc from "./LongDesc";
import { reactLocalStorage } from "reactjs-localstorage";

export default function LandingPage() {
  const [teacherData, setTeacherData] = useState();
  const [allTeacherData, setAllTeacherData] = useState();

  const [editStatus, setEditStatus] = useState(false);
  const [landingDec, setLandingDec] = useState("Upgrade your speaking skills that  will make you one level up");
 const[shortDec,setShortDec]=useState("Speaker, Author, Writer")
 const[longDesc,setLongDesc]=useState(`No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner! No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner!`)
 const [userName,setUserName]=useState("")
 const Navigate = useNavigate();
  useEffect(() => {
    fetchTecharData();
  }, []);

  const fetchTecharData = async () => {
    let result = await HttpClient.requestData("get-profile", "GET");
    // console.log(result);
  let uData=reactLocalStorage.getObject("userData")
  // console.log(uData);
  setUserName(uData?.username)
    if (result && result.status) {
      setTeacherData(result.data);
      if (result.data) {
        let newResult = await HttpClient.requestData(
          `view-landing-page/${result?.data?.username}`
        );
        // console.log(newResult.data[0]);
        if(newResult && newResult.status ){
          setAllTeacherData(newResult.data[0]);
            if(newResult?.data[0]?.landingPageTitle!==""){
              setLandingDec(newResult.data[0].landingPageTitle)
            }
            if(newResult?.data[0]?.teacherSubTitle!==""){
              setShortDec(newResult.data[0].teacherSubTitle)
            }
            if(newResult?.data[0]?.longDesc!==""){
              setLongDesc(newResult.data[0].longDesc)
            }
            // if(newResult?.data[0]?.username!==""){
            //   setUserName(newResult.data[0].username)
            // }else{
            //   setUserName(uData?.username)
            // }
        }
      }
    }
  };

  return (
    <>
      <main className="landing_page_edit clearfix">
        <Topbar editStatus={editStatus} setEditStatus={setEditStatus}
        landingDec={landingDec}
        shortDec={shortDec}
        longDesc={longDesc}
        userName={userName}
        fetchTecharData={fetchTecharData}
         />
        <Landingheader />
        <section className="Upgrade_speaking clearfix px-md-5 mx-md-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                <LandingDec
                  editStatus={editStatus}
                  setEditStatus={setEditStatus}
                  setLandingDec={setLandingDec}
                  landingDec={landingDec}
                />
                <div className="Upgrade_speak_all_btn d-flex">
                  <div className="Explore_Courses_btn">
                    <a className="text-white">Explore Courses</a>
                  </div>
                  {/* <div className="Instructor_btn">
                    <a href="#" className="Ins_play_btn">
                      <img src={Polygon1} />
                    </a>
                    <a href="#" className="Ins_text_btn">
                      What Instructor’s Say
                    </a>
                  </div> */}
                </div>
                {/* <TotalStudent /> */}
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="teacher__identity">
                <ImageChange 
                teacherData={teacherData}
                editStatus={editStatus}
                />
                  <div className="teach__iden_name">
                    <h3>{teacherData?.name}</h3>


                    <ShortDec
                    editStatus={editStatus}
                    shortDec={shortDec}
                    setShortDec={setShortDec}
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-----slide section------*/}
        <AllCourses coursesData={allTeacherData?.coursesData}/>
        {/*-----*/}
        <LongDesc longDesc={longDesc} setLongDesc={setLongDesc} editStatus={editStatus}  />
        <Footer teacherData={teacherData} />
      </main>
    </>
  );
}
