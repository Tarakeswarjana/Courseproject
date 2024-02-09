import React from 'react'
import footer from "../../asstes1/imagesHome/footerbg.jpg";
import o1 from "../../asstes1/imagesHome/visa-1.png";
import o2 from "../../asstes1/imagesHome/debit.png";
import o3 from "../../asstes1/imagesHome/american-express-1.png";
import o4 from "../../asstes1/imagesHome/apple-pay-1.png";
import o5 from "../../asstes1/imagesHome/visa-2.png";
import b from "../../asstes1/imagesHome/app-store-badge-white-1.png"
import c from "../../asstes1/imagesHome/google-play-badge-white-1.png"
// import a from "../../asstes1/imagesHome"

export default function Footer() {
  return (
    <div>
      <footer id="footer-section">
        <div className="img-section" style={{ backgroundImage: `url('${footer}')`, position: 'relative' }}>
          <div
            className="custcontainer"
            style={{
              maxWidth: 980,
              margin: '0 auto',
              paddingRight: 15,
              paddingLeft: 15,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <div className="row">
              <div className="col-md-4">
                <div className="footer-box-wrap">
                  <div className="footer-box-1">
                    <div className="footer-box-1-txt-box">
                      <h3>Educare</h3>
                      <p>The most exciting learning delivery platform which engages and drives experiences.</p>
                    </div>
                    <div className="footer-box-1-question-box">
                      <h4>Got question? call us 24/7 </h4>
                      <h5>+0123 456 789</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-box-wrap">
                  <div className="footer-box-2">
                    <h3>Information</h3>
                    <ul className="footer-box-list">
                      <li>
                        <a href="#">About Educare</a>
                      </li>
                      <li>
                        <a href="#">How to use Educare</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-box-wrap">
                  <div className="footer-box-2">
                    <h3>Customer Service</h3>
                    <ul className="footer-box-list">
                      <li>
                        <a href="#">Payment method</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="footer-payment-store-wrap d-flex justify-content-between align-items-center">
                  <div className="footer-payment-box">
                    <h4>payment method</h4>
                    <div className="payment-img-box">
                      <a href="#">
                        <img src={o1} />
                      </a>
                      <a href="#">
                        <img src={o2} />
                      </a>
                      <a href="#">
                        <img src={o3} />
                      </a>
                      <a href="#">
                        <img src={o4} />
                      </a>
                      <a href="#">
                        <img src={o5} />
                      </a>
                    </div>
                  </div>
                  <div className="footer-store-box">
                    <a href="#">
                      <img src={b} />
                    </a>
                    <a href="#">
                      <img src={c} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="btm-footer">
                  <div className="btm-footer-wrap">
                    <div className="btm-social-media-box">
                      <h4>Social Media</h4>
                      <ul className="btm-social-media-list">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-youtube-play" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p>Copyright©2022 Rx. All Rights Reseved. Terms Of Use I Privacy Policy </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
