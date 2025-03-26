import React, { useState } from "react";
import "../Style/Navbar.css";
import SearchBar from "./SearchBar";
import { Link , NavLink} from "react-router-dom";
import { Component } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbarkuh">
      <div className="navbar-container">
        <ul className="navbar-tambahan">
          <img src="Images/Logo DIGMAPI 3.png" className="navbar-logo" />
          <ul className="navbar-kiri">
            <a className="navbar-kiri1">ORMAWA EKSEKUTIF PKU IPB</a>
            <a className="navbar-kiri2">KABINET DIRGANTARA MAHAMIMPI 2023/2024</a>
          </ul>
        </ul>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-container">
        <ul id="navbar" className={menuOpen ? "open" : ""} >
          <li>
            <a>
              <NavLink to="/" >
                Beranda
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/proker" >
                Proker
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/digmapihelp" >
                Digmapi Help
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/digmapistore" >
                Digmapi Store
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/tentang" >
                Tentang
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
