import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../asstes1/imagesHome/educare-logo.png";

export default function Header({clasStick}) {

  // before code
  // useEffect(() => {
  //   window.addEventListener('scroll', isSticky,  { passive: true })
  //   return()=>{
  //     window.removeEventListener("scroll",isSticky)
  //   }
  // }, [window.scrollY]);

  // const isSticky = (e) => {
  //   // console.log('e', e);
  //   const header = document.querySelector('.header-section');
  //   const scrollTop = window.scrollY;
  //   // console.log("scrollTop",  window.pageYOffset)
  //   scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  // };




// shiltu 
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const handleScroll = event => {
  //     setScrollTop(window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const header = document.querySelector('#header');
  //   scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  // };
  
  // Udayan
//   const [stickyfix, setStickyfix] = useState(false);

//   function setFixed() {
//     console.log("ghggg",window.scrollY);
//     if (window.scrollY > 200) {
//       setStickyfix(true);
     
//     }
//     else {
//       setStickyfix(false)
//     }
//   }


// window.addEventListener('scroll', setFixed);
// window.onscroll = setFixed;

  

//   const [scroll, setScroll] = useState(false);
//   const divRef = React.useRef();

//   const handleScroll = (e) => {
//     const scrolledFromTop = divRef.current.scrollTop;
//     console.log(scrolledFromTop);
//     setScroll(scrolledFromTop > 50);
//   };

//   useEffect(()=>{
//     handleScroll()
//   },[scroll])
  
//  console.log("clasStick",clasStick);



  return (
    <header id="header" className= "header-section">
    {/* <header className={stickyfix ? 'header-section is-sticky' : 'header-section'}> */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href>
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item active">
            <a className="nav-link" style={{color:'#000'}}>
              Product <span className="sr-only">(current)</span>
            </a>
          </li> */}
              <li className="nav-item" style={{ cursor: 'pointer' }}>
                <a className="nav-link">Learn</a>
              </li>
              <li className="nav-item" style={{ cursor: 'pointer' }}>
                <a className="nav-link">Pricing</a>
              </li>
              <li className="nav-item" style={{ cursor: 'pointer' }}>
                <a className="nav-link">Contact</a>
              </li>
              <Link
                to={'/login'}
                className="btn head-log-btn"
                style={{ color: '#fff', background: 'rgba(255, 255, 255, 0.2)' }}
              >
                Log In
              </Link>
              <Link to={'/register'} className="btn head-sign-btn" style={{ background: '#fff', color: '#C45EA5' }}>
                Sign Up
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
