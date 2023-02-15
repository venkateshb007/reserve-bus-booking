import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-reserve">
      <div className="footer-container">
        <div className="footer-left">
        <h4 className="footer-head">RESERVE</h4>
          <p className="p1">When you have a choice. Choose Reserve.</p>
          <p className="p2">
            Reserve offers bus tickets booking <br />
            through its website , IOS, androids <br />
            mobile apps for all major cities
          </p>
          <p className="3">
            <a href="/">reserve.bus@reserve.com</a>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-about">
          <h4>About</h4>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </div>
          <div className="footer-links">
          <h4>Useful Link</h4>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">T & C</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
          </div>
          <div className="footer-follow">
          <h4>Follow Us</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
