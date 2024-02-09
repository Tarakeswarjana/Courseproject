import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../asstes1/images/Logo.svg";
import dashboardIcon from "../../asstes1/images/icon/dashboardIcon.png";
import editCourses from "../../asstes1/images/icon/editCourses.png";
import noteFavorite from "../../asstes1/images/icon/note-favorite.png";
import bookSaved from "../../asstes1/images/icon/book-saved.png";
import calendarWeeklyLiveCoaching from "../../asstes1/images/icon/calendarWeeklyLiveCoaching.png";
import userOctagon from "../../asstes1/images/icon/user-octagon.png";
import settingDahboard from "../../asstes1/images/icon/settingDahboard.png";

export default function Sidebar() {
  const [currenPage, setCurrentPage] = useState("");

  const mobileNav = (e) => {
    let display = document.querySelector("#mobile_sideBar").style.display;
    // console.log(display)
    document.getElementById("mobile_sideBar").style.display =
      display == "block" ? "none" : "block";
      e.preventDefault();
  };
  //   const [sidebarLink,setSidebarLinks] = useState[{}]
  useEffect(() => {
    window.$(".nav-link").click(function () {
      window.$(".nav-link.active").removeClass("active");
      window.$(this).addClass("active");
    });
    setCurrentPage(window.location.href);
  }, []);
  return (
    <>
      <div className="sidebarWrapper" />
      <ul className="navbar-nav  dashboardsidebar   mobile_sideBar" id="mobile_sideBar">
        <div className="">
          <button
            type="button"
            className="sidebar-brand-icon bg-transparent border-0"
            id="sidebar_close"
            style={{ position: 'absolute', zIndex: '2', display: 'none' }}
          >
            <i className="fa fa-times" aria-hidden="true" onClick={mobileNav} />
          </button>
          <a className="sidebar-brand d-block ml-xl-n5"></a>
        </div>
        {/* <li className="nav-item " style={{ textAlign: "center" }}>
          <Link
            className="navbar-brand"
            to="/dashboard"
            style={{ marginTop: 20 }}
          >
            <span>
              <img src={Logo} />
            </span>
          </Link>
        </li> */}
        <li className="nav-item mt-3">
          <NavLink
            to={'/dashboard'}
            aria-current="page"
            className={({ isActive }) =>
              isActive || currenPage.includes('dashboard') ? 'nav-link active' : 'nav-link'
            }
          >
            <span>
              <img src={dashboardIcon} />
              Dashboard
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/all-courses'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>
              <img src={editCourses} />
              Courses
            </span>
          </NavLink>
        </li>
        <li className="nav-item dropdown" style={{ cursor: 'pointer' }}>
          <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="collapse" data-target="#demo">
            <span>
              <img src={bookSaved} />
              Events
            </span>
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </a>
          <div className="dropdown-menu  custom-sidebar-dropdownMenu" id="demo">
            <NavLink
              to={'/createevents'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
              // className="dropdown-item sidebaractive"
            >
              Create Events
            </NavLink>

            <NavLink
              to={'/manage-events'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Manage Events
            </NavLink>
          </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link">
            <span>
              <img src={noteFavorite} />
              Events
            </span>
          </a>
        </li> */}
        <li className="nav-item dropdown" style={{ cursor: 'pointer' }}>
          <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="collapse" data-target="#demo1">
            <span>
              <img src={bookSaved} />
              Live Coaching Call
            </span>
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </a>
          <div className="dropdown-menu  custom-sidebar-dropdownMenu" id="demo1">
            <NavLink
              to={'/scheduled_day'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
              // className="dropdown-item sidebaractive"
            >
              Schedule
            </NavLink>
            <NavLink
              to={'/requests'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Requests
            </NavLink>
            <NavLink
              to={'/metting_to_do'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Meeting to do
            </NavLink>
            <NavLink
              to={'/chat'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Chats
            </NavLink>

            <NavLink
              to={'/analytics'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Analytics
            </NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink
            to={'/weekly_live_chocaing'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span>
              <img src={calendarWeeklyLiveCoaching} />
              Weekly Coaching Call
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/co_teachers'} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>
              <img src={userOctagon} />
              Co-Teachers
            </span>
          </NavLink>
        </li>
        {/* <li className="nav-item">
                    <a className="nav-link" >
                        <span>
                            <img src={settingDahboard} />
                            Settings
                        </span>
                    </a>
                </li> */}
        <li className="nav-item dropdown" style={{ cursor: 'pointer' }}>
          <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="collapse" data-target="#demo2">
            <span>
              <img src={settingDahboard} />
              Settings
            </span>
            {/* <i class="fa fa-chevron-down" aria-hidden="true"></i> */}
          </a>
          <div className="dropdown-menu  custom-sidebar-dropdownMenu" id="demo2">
            <NavLink
              to={'/personal_info'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Personal Info
            </NavLink>
            <NavLink
              to={'/profile_landing_page'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Landing Page Design
            </NavLink>

            <NavLink
              to={'/notification'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Notification
            </NavLink>
            <NavLink
              to={'/privacy_and_plans'}
              className={({ isActive }) => (isActive ? 'dropdown-item sidebaractive' : 'dropdown-item')}
            >
              Privacy & Plans
            </NavLink>
          </div>
        </li>
      </ul>
    </>
  );
}
