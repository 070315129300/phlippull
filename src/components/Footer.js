import React from "react";
import { NavLink, Link, Route } from "react-router-dom";

import menu from "../images/menu.svg";
import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={''} alt="" />
                <h2 className="mb-0 text-white"></h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                  
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            
            <div className="col-3">
              <h4 className="text-white mb-4"></h4>
              <div className="footer-link d-flex flex-column">
                        <NavLink to="/">

                {/*<Link className="text-white">Dev Corner</Link>*/}
                <img
                    src="images/shop4me.jpg"
                    style={{ height: '50px', width: '200px' }}
                    // className="img-fluid rounded-3"
                    alt="main banner"
                />
                </NavLink>

              </div>
            </div>
            
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  <small>Lagos Nigeria.</small>
                </address>
                <a
                  
                  className="mt-3 d-block mb-1 text-white"
                >
                  <small>  +234 (0)8164520367</small>
                </a>
                <a
                  href="mailto:customercare@blackjoetechnologies.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  <small>  surpport@shop4me.com.ng</small>
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://www.linkedin.com/company/shop4meinternational/" target="blank">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="https://instagram.com/shop4mehq?igshid=ZDc4ODBmNjlmNQ==" target="blank">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="https://www.facebook.com/profile.php?id=100093461988714&mibextid=ZbWKwL" target="blank">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a className="text-white" href="https://twitter.com/Shop4mehq?t=QLA9U278UxUa5Eif3P9-og&s=09" target="blank">
                    <BsTwitter className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <small>  <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link></small>
                <small>   <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link></small>
                <small>  <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link></small>
              </div>
            </div>
            
           
            <div className="col-4">
              <h4 className="text-white mb-4">Our Apps</h4>
              <div className="footer-link d-flex flex-column">
                <small className="text-white mb-4">Download our app it one click away</small>
              <div className="row">

                <div className="col-6"><small>
                  
                        <NavLink to="https://apps.apple.com/ng/app/shop4me/id6449968422" target="_blank">

                {/*<Link className="text-white">Dev Corner</Link>*/}
                <img
                    src="images/appstorelogo.png"
                    style={{ height: '50px', width: '150px' }}
                    // className="img-fluid rounded-3"
                    alt="main banner"
                />
                </NavLink>
                  </small></div>
                <div className="col-6"><small>
                        <NavLink to="https://play.google.com/store/apps/details?id=com.blackjoe.shop4me" target="_blank">

                {/*<Link className="text-white">Dev Corner</Link>*/}
                <img
                    src="images/playstorelogo.png"
                    style={{ height: '50px', width: '150px' }}
                    // className="img-fluid rounded-3"
                    alt="playstore link"
                />
                </NavLink>
                  </small></div>
              </div>



              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white"><small>
                &copy; {new Date().getFullYear()} All Right Reserved
              </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
