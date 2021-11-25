import React from "react";

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Galery</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Look inside</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Partners</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Place holder</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Address</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="icoFacebook"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="icoLinkedin"
                    title="Linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright 2021 - Nice Shop. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
