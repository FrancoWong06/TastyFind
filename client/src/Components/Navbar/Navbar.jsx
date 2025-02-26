import React from "react";
import { NavLink } from "react-router-dom";

import { LuPizza } from "react-icons/lu";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <LuPizza className="icon"/>
          <NavLink to="/" className="nav-home-logo">
            TastyFind
          </NavLink>
        </div>

        <div className="main-nav">
          <NavLink to="/about" className="nav-about">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div> 
  );
}
