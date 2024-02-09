import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImageSignUp from '../../asstes1/images/bgImageSignUp.PNG';
import eduCareLogo from '../../asstes1/images/logo.png';
import uploadLogo from '../../asstes1/images/cloud-computing.png';
import uploadfileLogo from '../../asstes1/images/iconsupload.png';
import upload_sign_own from '../../asstes2/images/upload_sign_own.png';
import HttpClient from '../../utils/HttpClient';
import { toast, ToastContainer } from 'react-toastify';
import sideimg from '../../asstes1/images/Group 70294.png';
// import validator from "validator";
import AuthCard from '../../Component/Auth/AuthCard';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Loader from '../../Component/FullPageLoader/DotLoadinButton';

export default function UploadProfessionalInfo() {
  const [image, setImage] = useState('');
  console.log('fdsfsdfsdf', image);
  const [name, setName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const Navigate = useNavigate();
  const [upImg, setUpImg] = useState();
  // console.log('fsdjfsdffsdfsd', upImg);
  const [logo, setLogo] = useState('');
  const [loading, setLoadig] = useState(false);
  const [nameErrMessage, setNameErrMessage] = useState('');
  const [aboutErrMessage, setAboutErrMessage] = useState('');

  const validName = /[a-zA-Z]{3,}/;
  // const validAbout=/[0-9a-zA-Z ]{50,}/

  const handleSubmit = async e => {
    setLoadig(true);
    e.preventDefault();
    // const isAbout = aboutMe.split(" ")
    // console.log(isAbout.length);
    if (image != '' && name != '' && aboutMe != '') {
      const isName = validName.test(name);
      if (isName) {
        const isAbout = aboutMe.split(' ');
        if (isAbout.length > 15) {
          let dataSend = {
            name: name,
            about: aboutMe,
            image: image,
            nextRoute: '/Upload_basic_information',
          };
          let result = await HttpClient.requestData('update', 'PUT', dataSend);
          if (result && result.status) {
            // toast.success("4th step is complete");
            toast.success('4th step is completed', {
              position: 'top-center',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
            setTimeout(() => {
              Navigate('/Upload_basic_information');
            }, 2000);
          } else {
            // toast.warn("something went wrong");
            toast.error('something went wrong', {
              position: 'top-center',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        } else {
          // toast.warn("Please Enter More then 15 words in About me");
          toast.error('Please Enter More then 15 words in About me', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      } else {
        // toast.warn("Please Enter a valid Name");
        toast.error('Please Enter a valid Name', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    } else {
      // toast.warn("All feilds are required");
      toast.error('All feilds are required', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    setTimeout(() => {
      setLoadig(false);
    }, 2000);
  };

  const imageHandle = async file => {
    const image = file;

    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.warn('select valid image.');
      toast.error('select valid image.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return false;
    } else {
      // let data = new FormData();
      // data.append("image", file);
      if (image.size < 10e6 / 2) {
        let result = await HttpClient.uploadFileRequestForImage('upload/profile', file, val => {
          console.log(val);
          setUpImg(val);
        });
        console.log('logogfdgdfgdfgdfgdfgdf', result);
        if (result && result.status) {
          setImage(result.url);
        }
      } else {
        // toast.warn("image size should be less than 5mb");
        toast.error('image size should be less than 5mb', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }
  };
  return (
    <AuthCard>
      <div
        className="wrapper_own_main_wdth2"
        style={
          {
            // height: "100vh"
          }
        }
      >
        <div className="basic_wrapper_own mainSteps basic_scroll_abt_own" style={{ height: '100%' }}>
          <div className="studenSignUpBasicinfo">
            {/* <div className="siteLogo" style={{ marginBottom: "10px" }}>
              <img src={eduCareLogo} alt="Logo" style={{ marginRight: 20 }} />
              <span className="first-bar" />
              <span className="first-bar" />
              <span className="third-bar" />
              <span className="fourth-bar" />
            </div> */}

            <div className="studentSignUpTitle">
              <p className="entry_own entry-header">
                {/* Upload Your Professional Info */}
                Please provide your personal information.
              </p>
            </div>
            <form action="#" className="techerForm">
              <div
                className="form-group from_own_styl"
                style={
                  {
                    // marginBottom: "1rem",
                    // position: "relative",
                  }
                }
              >
                <label htmlFor="name">Upload Logo</label>
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
                        top: '19%',
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
                ) : upImg === 100 && image == '' ? (
                  <span style={{ color: '#138BFB' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: '19%',
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
                ) : image != '' ? (
                  <div
                    style={{
                      // borderRadius: '50%',
                      // display: 'inline-block',
                      // position: 'absolute',
                      // bottom: '10px',
                      // right: '0',
                      // maxWidth: '110px',
                      // height: '110px',
                      // overflow: 'hidden',
                      // border: '3px solid #138BFB',
                      // padding: '5px',

                      borderRadius: '100%',
                      display: 'inline-block',
                      position: 'absolute',
                      bottom: '-8px',
                      right: '0px',
                      maxWidth: '64px',
                      height: '64px',
                      overflow: 'hidden',
                      border: '3px solid rgb(19, 139, 251)',
                      padding: '5px',
                    }}
                  >
                    <img
                      src={image}
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
              <div
                className="form-group from_own_styl"
                style={
                  {
                    // marginBottom: "1rem"
                  }
                }
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Please provide your name"
                  name="name"
                  value={name}
                  onChange={val => {
                    setName(val.target.value);
                    if (validName.test(val.target.value)) {
                      setNameErrMessage('');
                    } else {
                      setNameErrMessage('Name should be minimum 3 characters **');
                    }
                  }}
                  style={{ height: '45px' }}
                />
                {nameErrMessage !== '' && <p style={{ color: 'red', fontSize: '15px' }}>{nameErrMessage}</p>}
              </div>
              <div
                className="form-group from_own_styl "
                style={
                  {
                    // marginBottom: "1rem"
                  }
                }
              >
                <p className="frm_professional_abt">About Me</p>
                <textarea
                  id="about"
                  className="form-control"
                  name="about"
                  rows={4}
                  cols={50}
                  defaultValue={''}
                  placeholder="Please enter more than 15 words"
                  value={aboutMe}
                  onChange={val => {
                    setAboutMe(val.target.value);
                    if (val.target.value.split(' ').length > 15) {
                      setAboutErrMessage('');
                    } else {
                      setAboutErrMessage('Please enter more than 15 words');
                    }
                  }}
                  // style={{ minHeight: "60px" }}
                />
                {aboutErrMessage !== '' && <p style={{ color: 'red', fontSize: '15px' }}>{aboutErrMessage}</p>}
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-continue"
                style={{ margin: '0 auto 0', height: '50px' }}
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
