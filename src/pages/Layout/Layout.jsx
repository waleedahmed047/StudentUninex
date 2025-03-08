import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Layout.css"; // Make sure Layout.css handles proper styling

const Layout = ({ toggleTheme }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  return (
    <div className="layout">
      <Navbar selectedItem={selectedItem} toggleTheme={toggleTheme} />

      <div className="main-container">
        <div className="sidebar-main">
          <Sidebar setSelectedItem={setSelectedItem} />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
