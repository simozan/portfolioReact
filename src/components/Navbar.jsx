import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";

export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <div className="nav-main">
        <Link to="/">
          <button className={isActive("/") ? "active-btn" : "btn"}>Home</button>
        </Link>
        <Link to="/about">
          <button className={isActive("/about") ? "active-btn" : "btn"}>
            About
          </button>
        </Link>
        <Link to="/experience">
          <button className={isActive("/experience") ? "active-btn" : "btn"}>
            Work Experiences
          </button>
        </Link>
        <Link to="/projects">
          <button className={isActive("/projects") ? "active-btn" : "btn"}>
            Projects
          </button>
        </Link>
        <button className="btn" onClick={() => setIsPopupOpen(true)}>
          Contact
        </button>
      </div>
      <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};
