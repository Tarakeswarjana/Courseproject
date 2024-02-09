import React, { useEffect, useMemo, useState } from "react";
import bgImageSignUp from "../../asstes1/images/bgImageSignUp.PNG";
import eduCareLogo from "../../asstes1/images/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reactLocalStorage } from "reactjs-localstorage";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import sideimg from "../../asstes1/images/Group 70294.png";
import { useLocation } from "react-router-dom";
import AuthCard from "../../Component/Auth/AuthCard";
import Loader from "../../Component/FullPageLoader/DotLoadinButton";
import { userNameCheckingfrombackend } from "../../Api/eventapi";

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Register() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [pasShow, setpassShow] = useState(false);
  const [username, setUsername] = useState("");
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const { state } = useLocation();
  // const{teacherEmail}=states
  useEffect(() => {
    if (state?.teacherEmail !== "") {
      console.log("teacherEmail", state?.teacherEmail);

      setEmail(state?.teacherEmail);
    }
  }, []);

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    if (email != "" && password != "") {
      let dataSend = {
        email,
        password,
        username,
        // nextRoute: "/choose_plans",
        nextRoute: '/upload_professional_info',

        teachertoken: id,
      };
      let result = await HttpClient.requestData("register", "POST", dataSend);
      // console.log("register",result);
      if (result && result.status) {
        reactLocalStorage.set("token", result.data.token);
        reactLocalStorage.setObject("userData", result.data);
        // toast.success("Register Successfully");
        toast.success("Registered Successfully", {
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
          Navigate('/upload_professional_info');
        }, 2000);
      } else {
        // toast.warn(result.message);
        toast.error(result.message, {
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
      toast.error("All feilds are required", {
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
      setLoader(false);
    }, 2000);
  };

  const emailChecking = () => {
    if (email === "") {
      setEmailError("Email can not be blank");
    } else if (!email.match(mailformat)) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const passwordChecking = () => {
    if (password === "") {
      setPasswordError("password can not be blank");
    } else if (password != "" && password.length < 8) {
      setPasswordError("password should be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const usernameChecking = async () => {
    if (username === "") {
      setUsernameError("Username can not be blank");
    } else if (username != "") {
      let result = await userNameCheckingfrombackend(username);
      if (result && result.status) {
        setUsernameError("");
      } else {
        setUsernameError(result.message);
      }
    } else {
      setUsernameError("");
    }
  };

  const validation = useMemo(() => {
    if (
      email != "" &&
      password != "" &&
      username != "" &&
      emailError === "" &&
      passwordError === "" &&
      userNameError === ""
    ) {
      return true;
    }
    return false;
  }, [email, emailError, password, passwordError, username, userNameError]);
  return (
    <AuthCard>
      <div className="wrapper_own_main_wdth2">
        <div className="studenSignUp ForRegisterSignup">
          <div className="studentSignUp">
            <div className="siteLogo">{/* <img src={eduCareLogo} alt="Logo" /> */}</div>
            <div className="studentSignUpTitleSignUp">
              <p className="entry-header">
                Sign Up
                {/* <span>
                  {" "}
                  <p className="pagination">1/4</p>
                </span>{" "} */}
              </p>

              {/* <p className="entry-para">
                Already have an account?{" "}
                <span
                  className="sign-in-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => Navigate("/login")}
                >
                  Sign in
                </span>
              </p> */}
            </div>
            <form
              className="SignUpForm sign_up_from_own"
              style={
                {
                  // margin: "15px auto"
                }
              }
            >
              <div className="form-group" style={{ marginBottom: '.3rem' }}>
                <label htmlFor="email">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  // id="email"
                  placeholder="Enter your unique username"
                  name="username"
                  value={username}
                  onChange={val => {
                    setUsernameError('');
                    setUsername(val.target.value);
                  }}
                  onBlur={usernameChecking}
                />
                <p style={{ color: 'red' }}> {userNameError}</p>
              </div>
              <div className="form-group" style={{ marginBottom: '.3rem' }}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={val => {
                    setEmailError('');
                    setEmail(val.target.value);
                  }}
                  onBlur={() => {
                    emailChecking();
                  }}
                />
                <p style={{ color: 'red' }}> {emailError}</p>
              </div>
              <div className="form-group mb-2" style={{ position: 'relative', marginBottom: '.3rem' }}>
                <label htmlFor="pwd">Password:</label>
                <div className="passicon" onClick={() => setpassShow(!pasShow)}>
                  {pasShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
                <div className="pass_own">
                  <input
                    type={pasShow ? 'text' : 'password'}
                    className="form-control"
                    id="pwd"
                    placeholder="Password should be atleast 8 characters"
                    name="pswd"
                    value={password}
                    onChange={val => {
                      setPasswordError('');
                      setPassword(val.target.value);
                    }}
                    onBlur={passwordChecking}
                  />
                </div>
                <p style={{ color: 'red' }}> {passwordError}</p>
              </div>
              <button onClick={e => handleSubmit(e)} className="btn btn-signUp" disabled={validation ? false : true}>
                {loader ? (
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
                  'Sign Up'
                )}
              </button>
              {/* <p className="entry-para">
                Already have an account?{" "}
                <span
                  className="sign-in-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => Navigate("/login")}
                >
                  Sign in
                </span>
              </p> */}
            </form>
            {/* <p className="or">OR</p> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  height: 2,
                  width: 218,
                  backgroundColor: '#d3cbcb',
                  border: '1px solid #2222',
                }}
              />
              <div className="abLine">
                <p className="or">OR</p>
              </div>

              <span
                style={{
                  height: 2,
                  width: 218,
                  backgroundColor: '#d3cbcb',
                }}
              />
            </div>

            <div className="socialIcon-Groups">
              <a href="#" role="button">
                <i className="fa fa-google fa-lg" />
                Google
              </a>
              <a href="#" role="button">
                <i className="fa fa-facebook-f fa-lg" />
                Facebook
              </a>
              <a href="#" role="button">
                <i className="fa fa-apple fa-lg" />
                Apple
              </a>
            </div>
            <p
              className="entry-para entry_para_own"
              style={{
                textAlign: 'center',
                // marginTop: "20px"
              }}
            >
              Already have an account?{' '}
              <span className="sign-in-text" style={{ cursor: 'pointer' }} onClick={() => Navigate('/login')}>
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
