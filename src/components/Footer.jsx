import React from "react";
import "../style/footer.css";
import logo from "../assests/img/logo/logo.png";
const Footer = () => {
  return (
    <div className="">

 
    <footer className="social-footer">
    
      <div className="social-footer-icons">
        <ul className="menu simple">
         
          <li>
            <a href="https://www.instagram.com/?hl=en">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <div className="privacy-policy">
    © 2022 Stuneckt. All rights reserved.  Built with ❤️
    </div>
    </div>
  );
};
export default Footer;
