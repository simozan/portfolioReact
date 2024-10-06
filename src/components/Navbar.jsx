import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div>
      <Link to="/">
        <button className={isActive("/") ? "active-btn" : "btn"}>Home</button>
      </Link>
      <Link to="/about">
      <button className={isActive("/about") ? "active-btn" : "btn"}>About</button>
      </Link>
      <Link to="/experience">
      <button className={isActive("/experience") ? "active-btn" : "btn"}>Work Experiences</button>
      </Link>
      <Link to="/projects">
      <button className={isActive("/projects") ? "active-btn" : "btn"}>Projects</button>
      </Link>
      <button className="btn">Contact</button>
    </div>
  );
};
