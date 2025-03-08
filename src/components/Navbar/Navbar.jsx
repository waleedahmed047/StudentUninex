import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/Logo.svg";
import LightModeIcon from "../../assets/logo/day.svg";
import DarkModeIcon from "../../assets/logo/night.png";
import SearchLogo from "../../assets/logo/Magnifer.svg";
import ProfileImage from "../../assets/logo/profile.svg";
import LogoutImage from "../../assets/logo/logoutIcon.svg";
const Navbar = ({ toggleTheme, selectedItem }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <div className="navbar">
      <div className="logo-area">
        <h1>
          <img src={Logo} alt="Uninex Logo" /> Uninex
        </h1>
      </div>
      <div className="nav-content-area">
        <div className="navbar-selectedTab">
          <h1>{selectedItem}</h1>
        </div>
        <div className="navbar-topbar">
          <div className="navbar-searchbar">
            <img src={SearchLogo} alt="SearchLogo" />
            <input placeholder="Search anything globally" />
          </div>
          <button className="theme-toggle-btn" onClick={handleThemeToggle}>
            {isDarkMode ? "Day Mode" : "Night Mode"}
            <img
              src={isDarkMode ? LightModeIcon : DarkModeIcon}
              alt={isDarkMode ? "Light Mode Icon" : "Dark Mode Icon"}
            />
          </button>
          <button className="logout-button">
            <img src={ProfileImage} alt="ProfileImage" />
            <img src={LogoutImage} alt="logout" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
