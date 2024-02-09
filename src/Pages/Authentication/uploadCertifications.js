import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImageSignUp from "../../asstes1/images/bgImageSignUp.PNG";
import eduCareLogo from "../../asstes1/images/logo.png";
// import uploadLogo from "../../asstes1/images/cloud-computing.png";
import HttpClient from "../../utils/HttpClient";
import { toast, ToastContainer } from "react-toastify";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../Redux/reducer/User";
import sideimg from "../../asstes1/images/Group 70294.png";
import { setuser } from "../../Redux/reducer/User";
import upload_sign_own from "../../asstes2/images/upload_sign_own.png";
import AuthCard from "../../Component/Auth/AuthCard";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Loader from "../../Component/FullPageLoader/DotLoadinButton";
import { useMemo } from "react";

export default function UploadCertifications() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userData = reactLocalStorage.getObject("userData");
  const userName = userData.username;
  const [upImg, setUpImg] = useState();
  const [loading, setLoadig] = useState(false);
  console.log("userName", userName);
  const [certification, setCertification] = useState([
    {
      certificationTitle: "",
      achiveYear: "",
      document: "",
    },
  ]);

  const handleSubmit = async (e) => {
    setLoadig(true);
    e.preventDefault();

    let checking = certification.filter(
      (item) =>
        item.achiveYear === "" &&
        item.certificationTitle === "" &&
        item.document === ""
    );
    if (checking.length < 1) {
      let dataSend = {
        certification,
        regStatus: true,
      };
      let result = await HttpClient.requestData("update", "PUT", dataSend);
      console.log("cert", result);
      // return false
      if (result && result.status) {
        dispatch(setuser(result.data));
        // toast.success("Added Successfully");
        toast.success('Added Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        let landingPageData = {
          username: userName,
          landingPageTitle:
            "Upgrade your speaking skills that  will make you one level up",
          teacherSubTitle: "Teacher,Gamer,Coder",
          longDesc:
            "No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner! No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner!",
        };
        let landingResult = await HttpClient.requestData(
          `add-landing-page`,
          "POST",
          landingPageData
        );
        console.log(landingResult, "landingResult");
        setTimeout(() => {
          reactLocalStorage.set("login_status", true);
          // Navigate("/dashboard", { state: { prvPath: "upload_certification" } });
          Navigate('/choose_plans');
        }, 2000);
      } else {
        // toast.warn("something went wrong Please check all field");
        toast.error('something went wrong Please check all field', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      // toast.warn("All feilds are required");
      toast.error('All feilds are required', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    console.log("checking", checking);

    setTimeout(() => {
      setLoadig(false)
    }, 2000);
  };

  const AddAnotherCertificate = (e) => {
    e.preventDefault();
    let checking = certification.filter(
      (item) =>
        item.achiveYear === "" ||
        item.certificationTitle === "" ||
        item.document === ""
    );
    console.log(checking);
    if (checking.length > 0) {
      // toast.warn("All feilds are required");
      toast.error('All feilds are required', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setCertification((prev) => [
        ...prev,
        {
          certificationTitle: "",
          achiveYear: "",
          document: "",
        },
      ]);
    }
  };
  const imageHandle = async (file, i) => {
    const image = file;

    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      // toast.warn("select valid image.");
      toast.error('select valid image.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    } else {
      // let data = new FormData();
      // data.append("image", file);
      if (image.size < 10e6 / 2) {
        let result = await HttpClient.uploadFileRequestForImage(
          "upload/certificate",
          file,
          (val) => {
            console.log(val);
            setUpImg(val);
          }
        );
        console.log("logo", result);
        if (result && result.status) {
          let cert = [...certification];
          cert[i].document = result.url;
          setCertification(cert);
        }
      } else {
        // toast.warn("image size should be less than 5mb");
        toast.error('Image size should be less than 5mb', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

    // else {
    //   let data = new FormData();
    //   data.append("image", file);
    //   let result = await HttpClient.fileUplode(
    //     "upload/certificate",
    //     "POST",
    //     data
    //   );
    //   // console.log("logo",result)
    // if (result && result.status) {
    //   let cert = [...certification];
    //   cert[i].document = result.url;
    //   setCertification(cert);
    // }
    // }
  };

  const titleChangeHandle = (value, i) => {
    let cert = [...certification];
    cert[i].certificationTitle = value;
    setCertification(cert);
  };
  const yearChangeHandle = (value, i) => {
    let cert = [...certification];
    cert[i].achiveYear = value;
    setCertification(cert);
  };
  const removeCertificate = (i) => {
    let certificate = [...certification];
    certificate.splice(i, 1);
    setCertification(certificate);
  };

  // const next = useMemo(() => {
  //   if (
  //     certification.filter(
  //       (item) =>
  //         item.achiveYear != "" ||
  //         item.certificationTitle != "" ||
  //         item.document != ""
  //     ).length > 0
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }, [certification]);
  const skipThisStep = async () => {
    let blankData = {
      // certification,
      regStatus: true,
    };
    console.log(blankData);
    let result = await HttpClient.requestData("update", "PUT", blankData);
    console.log(result);
    if (result && result.status) {
      let landingPageData = {
        username: userName,
        landingPageTitle:
          "Upgrade your speaking skills that  will make you one level up",
        teacherSubTitle: "Teacher,Gamer,Coder",
        longDesc:
          "No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner! No Fees, no complex setup, no registration required. You'll no longer have to type in complex URL's to save money locating coupon codes. With Smarty, you'll wonder why you didn't get it sooner!",
      };
      let landingResult = await HttpClient.requestData(
        `add-landing-page`,
        "POST",
        landingPageData
      );
      // toast.success(" Final step is completed");
      toast.success('Final step is completed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(setuser(result.data));
      setTimeout(() => {
        reactLocalStorage.set("login_status", true);
        // Navigate("/dashboard", { state: { prvPath: "upload_certification" } });
        Navigate('/choose_plans');
      }, 2000);
    }

  }
  return (
    <AuthCard>
      <div className="wrapper_own_main_wdth2">
        <div
          className="basic_wrapper_own mainSteps basic_scroll_abt_own"
          style={{
            // maxWidth: "500px",
            // height: "100%",
            // margin: "10px auto",
          }}
        >
          <div className="studenSignUpcertifications">
            {/* <div className="siteLogo" style={{ marginBottom: "7px" }}>
              <img src={eduCareLogo} alt="Logo" style={{ marginRight: 20 }} />
              <span className="first-bar" />
              <span className="first-bar" />
              <span
                className="third-bar"
                style={{ backgroundColor: "#00C187" }}
              />
              <span
                className="fourth-bar"
                style={{ backgroundColor: "#138BFB" }}
              />
            </div> */}

            <div className="studentSignUpTitle">
              <p className="entry_own entry-header"
                style={{
                  // display:"flex",
                  // alignItems:"center",
                  // justifyContent:"space-between"
                }}
              >
                Upload Certifications{" "}
                {/* <span style={{ opacity: 0.5, fontSize: "15px" ,textAlign:"right" }}>
                  (optional)
                  <span style={{textDecoration:"underline",color:"blue",marginLeft:"10px",cursor:"pointer"}} onClick={skipThisStep}>Skip</span>      
                  <button className="button-17 ml-2" role="button"
                   onClick={()=>{
                    skipThisStep()
                   }}
                   >Skip</button>
                </span> */}
                {" "}
              </p>
            </div>
            <form className="techerForm">
              {certification.map((item, index) => {
                return (
                  <div
                    className=""
                    key={index}
                    style={
                      {
                        // position: "relative",
                        // padding: "20px",
                      }
                    }
                  >
                    {index > 0 && (
                      <div className="closeInfoCertifications" onClick={() => removeCertificate(index)}>
                        X
                      </div>
                    )}
                    <div
                      className="form-group from_own_styl from_own_main_upload_styl"
                      style={
                        {
                          // marginBottom: "1rem"
                        }
                      }
                    >
                      <p className="upload_logo_owwn">Upload Photo </p>
                      <label className="form_label_certifications">
                        {upImg && upImg < 100 ? (
                          <div style={{ height: '80px', width: '80px' }}>
                            <CircularProgressbar
                              value={upImg}
                              text={'Please Wait'}
                              styles={buildStyles({
                                textSize: '13px',
                              })}
                            />
                          </div>
                        ) : upImg === 100 && item.document == '' ? (
                          <div style={{ height: '80px', width: '80px' }}>
                            <CircularProgressbar
                              value={upImg}
                              text={'Please Wait'}
                              styles={buildStyles({
                                textSize: '13px',
                              })}
                            />
                          </div>
                        ) : item.document != '' ? (
                          <img
                            src={item.document}
                            alt="logo"
                            // height={100}
                            // width={100}
                            className="sidePhoto"
                          />
                        ) : (
                          <img src={upload_sign_own} alt="" />
                        )}
                        {/* {item.document != "" ? (
                          <img
                            src={item.document}
                            alt=""
                            height={100}
                            width={100}
                          />
                        ) : (
                          <img src={uploadLogo} alt="" />
                        )} */}
                        <p className="own_para_brws">Browse or click to upload</p>
                        <input
                          type="file"
                          className="form-control"
                          id="uploadFile"
                          // value={item.document}
                          accept="image/*"
                          onChange={val => imageHandle(val.target.files[0], index)}
                        />
                        {/* <p
                          style={{
                            color: "red",
                            display: "block",
                            width: "100%",
                            position: "absolute",
                            bottom: "-16px",
                            left: "35px",
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          image size should be less than 5mb **
                        </p> */}
                      </label>
                    </div>
                    <div
                      className="form-group from_own_styl from_own_main_upload_styl"
                      style={
                        {
                          // marginBottom: "1rem"
                        }
                      }
                    >
                      <label htmlFor="cl"> Certification Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cl"
                        placeholder=""
                        name="title"
                        value={item.certificationTitle}
                        onChange={val => titleChangeHandle(val.target.value, index)}
                      />
                    </div>
                    <div
                      className="form-group from_own_styl from_own_main_upload_styl"
                      style={
                        {
                          // marginBottom: "1rem"
                        }
                      }
                    >
                      <label htmlFor="year">Achieved Year</label>
                      <input
                        type="month"
                        className="form-control from_control_achieved_own"
                        id="year"
                        placeholder=""
                        name="year"
                        value={item.achiveYear}
                        onChange={val => {
                          // console.log(val.target.value);
                          yearChangeHandle(val.target.value, index);
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              <button
                className="btn btn-another"
                onClick={(e) => {
                  e.preventDefault();
                  AddAnotherCertificate(e);
                  setUpImg();
                }}
              >
                Add Another
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-continue"
                disabled={loading}
              >
                {loading ? (
                  <div
                    style={{
                      position: "relative",
                      top: "-22px",
                      textAlign: "center",
                      width: "90%",
                    }}
                  >
                    <Loader />
                  </div>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
