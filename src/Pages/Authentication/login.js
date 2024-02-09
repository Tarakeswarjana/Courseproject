import React, { useState ,useMemo} from "react";
import bgImageSignUp from "../../asstes1/images/bgImageSignUp.PNG";
import eduCareLogo from "../../asstes1/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reactLocalStorage } from "reactjs-localstorage";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../Redux/reducer/User";
import { setuser } from "../../Redux/reducer/User";
import sideimg from "../../asstes1/images/Group 70294.png";
import Loader from "../../Component/FullPageLoader/DotLoadinButton";
import AuthCard from "../../Component/Auth/AuthCard";

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Login() {
  const dispatch = useDispatch();
  const [loading ,setLoading]=useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pasShow, setpassShow] = useState(false);
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (email != "" && password != "") {
      let dataSend = {
        email,
        password,
      };
      let result = await HttpClient.requestData("login", "POST", dataSend);
      // console.log("login", result);
      // return false
      if (result && result.status) {
        reactLocalStorage.set("token", result.data.token);

        reactLocalStorage.setObject("userData", result.data);
        dispatch(setuser(result.data));

        // toast.success("Login Successfully");
        toast.success (`Welcome Back ${result.data?.name ?? ""} `, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        if (result.data.regStatus) {
          reactLocalStorage.set("login_status", true);
          setTimeout(() => {
            Navigate("/dashboard");
          }, 2000);
        } else {
          setTimeout(() => {
            Navigate(result.data.nextRoute);
          }, 2000);
        }
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
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };

  const emailChecking = ()=>{
    if(email ===""){
      setEmailError("email can not be blank")
    }
    else if (!email.match(mailformat) ){
      setEmailError("Please enter valid email")
    }
    else{
      setEmailError("")
    }
  }

  const passwordChecking = ()=>{
    if(password ===""){
      setPasswordError("password can not be blank")
    }
    else if (password !="" && password.length <8) {
      setPasswordError("password should be at least 8 characters")

    }
    else{
      setPasswordError("")
    }
  }

  const validation = useMemo(()=>{

    if(email !="" && password !="" && emailError ==="" && passwordError ==="" ){
      return true
    }
    return false

  },[email,emailError,password,passwordError])
  return (
    <AuthCard>
      <div className="student_wrapper_main wrapper_own_main_wdth2">
        <div className="student_wrapper_lgn_own studenSignUp ForRegisterSignup">
          <div className="student_wrapper_up_own studentSignUp">
            <div className="siteLogo">
              <img src={eduCareLogo} alt="Logo" />
            </div>
            <div className="studentSignUpTitleSignUp">
              <p className="entry-header">Sign In</p>
              <p className="entry-para">
                Don't have an account?{" "}
                <Link
                  className="sign-in-text"
                  style={{ cursor: "pointer" }}
                  // onClick={() => Navigate("/register")}
                  to={"/register"}
                  state={{
                    teacherEmail: email,
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <form className="SignUpForm">
              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(val) => {
                    setEmailError("")
                    setEmail(val.target.value)}}
                  onBlur={emailChecking}
                />
                               <p style={{color:"red"}}> {emailError}</p>

              </div>
              <div
                className="form-group"
                style={{
                  position: "relative",
                  marginBottom: "1rem",
                }}
              >
                <label htmlFor="pwd">Password:</label>
                <div className="passicon" onClick={() => setpassShow(!pasShow)}>
                  {pasShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
                <input
                  type={pasShow ? "text" : "password"}
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  value={password}
                  onChange={(val) => {
                    setPasswordError("")
                    setPassword(val.target.value)}}
                  onBlur={passwordChecking}
                />
                               <p style={{color:"red"}}> {passwordError}</p>

              </div>
              <button onClick={handleSubmit} className="btn btn-signUp" disabled={validation?false:true}>
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
                  "Sign In"
                )}
              </button>
            </form>
            {/* <p className="or">OR</p> */}
            {/* <div className="abLine">
                            <p className="or">
                              OR
                            </p>
                          </div>

                        <div className="socialIcon-Groups" style={{flexDirection:"inherit"}}>
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
                        </div> */}
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
