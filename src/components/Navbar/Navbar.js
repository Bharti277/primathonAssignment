import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Image/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
