import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImageSignUp from "../../asstes1/images/bgImageSignUp.PNG";
import eduCareLogo from "../../asstes1/images/logo.png";
import upload_sign_own from "../../asstes2/images/upload_sign_own.png";
import HttpClient from "../../utils/HttpClient";
import { toast, ToastContainer } from "react-toastify";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import sideimg from "../../asstes1/images/Group 70294.png";
import AuthCard from "../../Component/Auth/AuthCard";
import Loader from "../../Component/FullPageLoader/DotLoadinButton";

export default function UploadBasicInformation() {
  const [comp_name, setCompName] = useState("");
  const [comp_nameError, setCompNameError] = useState("")
  const [web_link, setWebLink] = useState("");
  const [web_linkError, setWebLinkError] = useState("")
  const [logo, setLogo] = useState("");
  const [loading, setLoadig] = useState(false);
  const [imageLoding, setImageLoading] = useState(false);
  const [upImg, setUpImg] = useState();
  // const validCompany=new RegExp(/[0-9a-zA-Z]{6,}/)
  const validCompany = /[0-9a-zA-Z]{3,}/;
  const validWebLink =
    /^((http|https):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoadig(true);
    e.preventDefault();
    // let validComp = validator.isLength(comp_name, 3, 12);
    // let validLink = validWebLink.test(web_link)

    // console.log(validLink);

    if (comp_name != "" && web_link != "" && logo != "") {
      let validComp = validCompany.test(comp_name);
      if (validComp) {
        let ValidUrl = validWebLink.test(web_link);
        if (ValidUrl) {
          let dataSend = {
            companyName: comp_name,
            companyWebLink: web_link,
            companyLogo: logo,
            nextRoute: '/upload_certification',
          };
          let result = await HttpClient.requestData("update", "PUT", dataSend);
          console.log("basicinfo", result);
          if (result && result.status) {  
            toast.success('3rd step is complete', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(() => {
              Navigate('/upload_certification');
            }, 2000);
          } else {
            // toast.warn("something went wrong");
            toast.error('something went wrong', {
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
          // toast.warn("Please Enter a Valid Company Website Link");
          toast.error('Please Enter a Valid Company Website Link', {
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
        // toast.warn("Please Enter a Valid company Name");
        toast.error('Please Enter a Valid company Name', {
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

      // toast.warn("3rd step is complete");
      toast.error('Please fill up all fields', {
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
    setTimeout(() => {
      setLoadig(false);
    }, 2000);
  };

  const imageHandle = async (file) => {
    setImageLoading(true);
    const image = file;

    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.warn("select valid image.");
      return false;
    } else {
      // let data = new FormData();
      // data.append("image", file);
      if (image.size < 10e6 / 2) {
        let result = await HttpClient.uploadFileRequestForImage(
          "upload/company-logo",
          file,
          (val) => {
            console.log(val);
            setUpImg(val);
          }
        );
        console.log("logo", result);
        if (result && result.status) {
          setLogo(result.url);
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
    setImageLoading(false);
  };

  const skipThisStep = async () => {
    let dataSend = {
      nextRoute: "/Upload_professional_info",
    };
    let result = await HttpClient.requestData("update", "PUT", dataSend);
    // console.log("basicinfo", result);
    if (result && result.status) {
      Navigate("/Upload_professional_info");
    }
  }

  const companyNamechecking = () => {
    if (comp_name != "" && comp_name.length < 3) {
      setCompNameError("Company Name should be minimum 3 characters")
    } else {
      setCompNameError("")

    }
  }
  const web_linkChecking = () => {
    if (web_link != "" && !web_link.match(validWebLink)) {
      // setWebLinkError("Please Provide Correct Url e.g https://educare.com")
      setWebLinkError("Please Provide Correct URL, e.g https://educare.com");
    } else {
      setWebLinkError("")
    }
  }
  return (
    <AuthCard>
      <div className="wrapper_own_main_wdth2">
        <div className="basic_wrapper_own mainSteps">
          <div className="basicinfo_own studenSignUp studenSignUpBasicinfo">
            {/* <div className="siteLogo" style={{ marginBottom: "20px" }}>
              <img src={eduCareLogo} alt="Logo" style={{ marginRight: 20 }} />
              <span className="first-bar" />
              <span
                className="first-bar"
                style={{ backgroundColor: "#138BFB" }}
              />
              <span
                className="third-bar"
                style={{ backgroundColor: "#C4C4C4" }}
              />
              <span className="fourth-bar" />
            </div> */}

            <div className="studentSignUpTitle">
              <p className="entry_own entry-header">
                {/* We're excited to have you join us. Please provide your basic information so we can get you set up */}
                Please provide company basic information.
                {/* <span style={{ fontSize: "17px", opacity: ".5" }}>
                  (optional)
                  <span style={{textDecoration:"underline",color:"blue",marginLeft:"10px",cursor:"pointer"}} onClick={skipThisStep}>Skip</span>
                  <button className="button-17 ml-3" role="button"
                    onClick={() => {
                      skipThisStep()
                    }}
                  >Skip</button>
                </span> */}
              </p>
            </div>
            <form action="#" className="techerForm">
              <div
                className="form-group from_own_styl"
                style={
                  {
                    // marginBottom: "1rem"
                  }
                }
              >
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company name should be of minimum 3 characters "
                  rows={4}
                  cols={50}
                  name="companyName"
                  value={comp_name}
                  onChange={val => setCompName(val.target.value)}
                  onBlur={companyNamechecking}
                />
                <p style={{ color: 'red' }}>{comp_nameError}</p>
              </div>
              <div
                className="form-group from_own_styl"
                style={
                  {
                    // marginBottom: "1rem"
                  }
                }
              >
                <label htmlFor="companyWebsiteLink">Company Website Link</label>
                <input
                  type="url"
                  className="form-control"
                  id="companyWebsiteLink"
                  placeholder="http://educare.com"
                  name="companyWebsiteLink"
                  value={web_link}
                  onChange={val => setWebLink(val.target.value)}
                  onBlur={web_linkChecking}
                />
                <p style={{ color: 'red' }}>{web_linkError}</p>
              </div>
              <div
                className="form-group from_own_styl"
                style={
                  {
                    // marginBottom: "1rem",
                    // position: "relative",
                  }
                }
              >
                <p className="upload_logo_owwn">Upload Logo</p>
                {/* <label className="form_label uploaddesign" style={{ position: "relative" }}> */}
                <label className="uploaddesign">
                  <div
                    className="upload_img_own"
                    style={
                      {
                        // maxWidth: "40px",
                        //  height: "40px",
                        //  overflow: "hidden",
                      }
                    }
                  >
                    <img
                      className="img-fluid"
                      src={upload_sign_own}
                      alt=""
                      style={{ widows: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  {/* Browse or click to upload */}

                  {/* {upImg && upImg < 100 && (
                  <span style={{ color: "#138BFB", fontSize: 10 }}>
                    {upImg && ` Uploading - ${upImg}%`}
                    <div style={{ width: 25, height: 25 ,display:"inline-block"}} >
                      <CircularProgressbar value={upImg} />
                    </div>
                  </span>
                )} {upImg===100 && (
                  <span style={{ color: "#00B670", fontSize: 10 }}>
                    completed
                    <i
                      className="fa fa-check-circle ml-3"
                      aria-hidden="true"
                      style={{ fontSize: 15 }}
                    />
                  </span>
                )} */}
                  <input
                    type="file"
                    className="form-control"
                    id="uploadFile"
                    accept="image/*"
                    onChange={e => imageHandle(e.target.files[0])}
                  />
                  <p className="own_para_brws">
                    {/* style={{
                      color: "#138BFB",
                      width: "100%",
                      fontSize: "14px",
                      display:"flex",
                      alignItems:"center",
                      paddingLeft:"20px",
                      Color: "#138BFB",
                      fontWeight :"500"
                      
                      
                    }} */}
                    Browse or click to upload
                  </p>
                </label>
                {upImg && upImg < 100 ? (
                  <span style={{ color: '#138BFB', fontSize: 10 }}>
                    {/* {upImg && ` Uploading - ${upImg}%`} */}
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: '38%',
                        right: '3%',
                      }}
                    >
                      <CircularProgressbar
                        value={upImg}
                        text={upImg && ` Uploading - ${upImg}%`}
                        styles={buildStyles({
                          textSize: '13px',
                        })}
                      />
                    </div>
                  </span>
                ) : upImg === 100 && logo == '' ? (
                  <span style={{ color: '#138BFB' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: '38%',
                        right: '3%',
                      }}
                    >
                      <CircularProgressbar
                        value={upImg}
                        text={'Please Wait'}
                        styles={buildStyles({
                          textSize: '13px',
                        })}
                      />
                    </div>
                  </span>
                ) : logo != '' ? (
                  <div
                    className="load_img_basic_info"
                    style={
                      {
                        // borderRadius: "50%",
                        // display: "inline-block",
                        // position: "absolute",
                        // bottom: "10px",
                        // right: "0",
                        // maxWidth: "110px",
                        // height: "110px",
                        // overflow: "hidden",
                        // border: "3px solid #138BFB",
                        // padding: "5px",
                      }
                    }
                  >
                    <img
                      src={logo}
                      alt="logo"
                      height={100}
                      width={100}
                      className="sidePhoto img-fluid"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ) : null}
                {/* {logo != "" && (
                  <div
                  style={{
                    borderRadius: "50%",
                    display: "inline-block",
                    position: "absolute",
                    bottom: "10px",
                    right: "0",
                  }}
                  >
                    <img
                    src={logo}
                    alt="logo"
                    height={100}
                    width={100}
                    className="sidePhoto"
                   
                  /></div>
                 
                )} */}
                {/* <div className="loadingLogoUpload">
                            <CircularProgressbar value={66} />
                          </div> */}
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-continue"
                style={{ margin: '8px auto' }}
                disabled={loading}
              >
                {loading ? (
                  <div
                    style={{
                      position: 'relative',
                      top: '-22px',
                      textAlign: 'center',
                      width: '90%',
                    }}
                  >
                    <Loader />
                  </div>
                ) : (
                  'Continue'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
