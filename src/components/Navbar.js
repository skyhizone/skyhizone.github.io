import React from "react";
import logo from "../assets/skyhi-icon.png";
import banner from "../assets/skyhi-banner.png";
import "../App.css";
// REACT FONTAWSOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <div className="container">

        <a className="navbar-brand " href="home">
          <img className="logo" src={logo} />
          <img className="banner" src={banner} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#f2bc1b" }} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
            <a className="nav-link" href="experience">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="skill">Skill</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto: wama.skyhi@gmail.com" target="_blank">E-Mail</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>

  )
}

export default Navbar;