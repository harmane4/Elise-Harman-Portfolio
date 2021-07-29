import React from "react";
import logo from "../images/Logo.png";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://harmane4.github.io/Elise-Harman-Portfolio/"
        >
          <img
            src={logo}
            alt=""
            style={{ maxHeight: 100 }}
            className="py -2 px-2"
          ></img>
        </a>
      </div>
      <div className="navbar-end">
        <li className="navbar-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About" ? "navbar-link active" : "nav-link"
            }
          >
            About
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "navbar-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "navbar-link active" : "nav-link"
            }
          >
            {" "}
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "navbar-link active" : "nav-link"
            }
          >
            {" "}
            Resume
          </a>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
