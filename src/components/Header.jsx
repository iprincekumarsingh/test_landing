import React from "react";

import "../style/Header.css";
import logo from "../assests/img/logo/logo.png";
const Header = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    // <header>
    //   <div className="logo"><img src={logo} alt="" /></div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="">Home</a>
    //       </li>
    //       <li>
    //         <a href="">Mission</a>
    //       </li>
    //       <li>
    //         <a href="">Vission</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="header">
      <a href="#" className="logo">
      <img src={logo} alt="" />
      </a>

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" for="side-menu">
        <span class="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Vision</a>{" "}
          </li>
         
        </ul>
      </nav>
    </header>
  );
};
export default Header;
