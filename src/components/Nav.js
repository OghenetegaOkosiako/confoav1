import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link to="/" className="navbar-brand">
        confOAV
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav " id="navList">
          <li className="nav-item active">
            <a href="#explore" className="nav-link">
              EXPLORE<span className="sr-only">(current)</span>
            </a>
          </li>{" "}
          <li className="nav-item active">
            <Link to="/signup" className="nav-link">
              SIGN UP <span className="sr-only">(current)</span>
            </Link>
          </li>{" "}
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              LOGIN<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
