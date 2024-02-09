import React, { useEffect, useState } from "react";
import NotificationIcon from "../../asstes1/images/ic_Notification.png";
import headerProfileIcon from "../../asstes1/images/headerProfile.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../asstes1/images/Logo.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/reducer/User";

export default function Header() {
  const { userData } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(null);
  const [burger, setBurger] = useState(false);
  const [enableLogout, setEnableLogout] = useState(false);
  const mobileNav = () => {
    let display = document.querySelector("#mobile_sideBar").style.display;
    // console.log(display)
    document.getElementById("mobile_sideBar").style.display =
      display == "block" ? "none" : "block";
  };
  const handleResize = () => {
    setDisplay(window.innerWidth);
    if (window.innerWidth > 1024) {
      document.querySelector("#mobile_sideBar").style.display = "block";
      document.querySelector("#burgerKing").style.display = "none";
    } else {
      document.querySelector("#mobile_sideBar").style.display = "none";
      document.querySelector("#burgerKing").style.display = "block";
    }
  };
  // const handleScrool = () => {
  //   let height = window.scrollY;
  //   if (height > 1) {
  //     document.getElementById("wrapper_header").style.position = "fixed"

  //   } else {
  //     document.getElementById("wrapper_header").style.position = "relative"

  //   }
  //   // console.log("jj",window.screenTop);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("scroll", handleScrool)
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("scroll", handleScrool)
  //   };
  // }, []);

  const LogoutHandle = () => {
    dispatch(logout());

    reactLocalStorage.remove("userData");
    reactLocalStorage.remove("token");
    reactLocalStorage.remove("login_status");
    setEnableLogout(false);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light topbar static-top  bg_own_white" id="wrapper_header">
        {/* <button
    id="sidebarToggleTop"
    type="button"
    className="btn btn-light d-md-none rounded-circle"
  >
    <i className="fa fa-bars" />
  </button> */}
        <div id="burgerKing">
          <GiHamburgerMenu
            onClick={() => {
              mobileNav();
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <Link className="navbar-brand" to="/dashboard" style={{ marginLeft: '10px' }}>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="navbar-nav ml-auto navbar_own_dspl">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <BsBell />
              <h6 className="_bell_notifi">0</h6>
            </a>
          </li>
          <li
            className="nav-item dropdown no-arrow"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <a className="nav-link" href="#" id="userDropdown">
              <img className="h-50" src={userData?.image} alt="img" style={{ borderRadius: '50%' }} />
              <span
                className="ml-2 mt-1 d-none d-lg-flex text-dark font-weight-bold  _superamn _marketing_info"
                style={{ color: 'rgb(78, 115, 223)' }}
              >
                {userData?.name}
                <br />
                <span className="_marketing_Adminor _marketing_info"> {/* Marketing Administrator */}</span>
                <i className="ri-arrow-drop-down-line font-weight-bold _user_text" />
              </span>
            </a>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>

            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <Link className="dropdown-item" to="/personal_info">
                <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </Link>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => {
                  setEnableLogout(true);
                }}
              >
                <i className="fa fa-sign-out fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {enableLogout && (
        <div className="logoutmodal">
          <div className="logoutmodal-wrapper">
            <div tabIndex={-1} className="bs-example-modal-sm" role="dialog" aria-hidden="true">
              <div className="closeIconlogout" style={{ textAlign: 'right' }}>
                <i
                  onClick={() => {
                    setEnableLogout(false);
                  }}
                  style={{ cursor: 'pointer' }}
                  class="fa fa-times"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4>
                      Logout <i className="fa fa-lock" />
                    </h4>
                  </div>
                  <div className="modal-body">
                    <i className="fa fa-question-circle" /> Are you sure you want to logout?
                  </div>
                  <div className="modal-footer">
                    <a
                      className="btn btn-primary btn-block"
                      onClick={() => {
                        LogoutHandle();
                      }}
                      style={{ color: 'white' }}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
