import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import Dashboard from "../../assets/sidebar/dashboard.svg";
import Messages from "../../assets/sidebar/message.svg";
import Job from "../../assets/sidebar/job.svg";
import Notification from "../../assets/sidebar/Notification.svg";
import Quiz from "../../assets/sidebar/quiz.svg";
import Profile from "../../assets/sidebar/profile.svg";
import Support from "../../assets/sidebar/support.svg";
import ActiveImage from "../../assets/sidebar/activeStatus.svg";

const Sidebar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  // Set the active tab only once when the component mounts
  useEffect(() => {
    const menuItems = {
      "/": "Dashboard",
      "/Messages": "Messages",
      "/Job": "Job",
      "/Contract": "Contract",
      "/Support": "Support",
      "/Quiz": "Quiz",
      "/MyProfile": "MyProfile",
      "/Notification": "Notification",
    };
    setSelectedItem(menuItems[location.pathname] || "");
  }, []); // Empty dependency array ensures it only runs once

  const handleSidebarSelection = (item) => {
    setSelectedItem(item);
  };

  const renderTab = (name, to, icon) => {
    const isActive = selectedItem === name;

    return (
      <li>
        <div className="active-image">
          {isActive && <img src={ActiveImage} alt="activeImage" />}
        </div>
        <Link
          className={`sidebar-text ${isActive ? "active" : ""}`}
          to={to}
          onClick={() => handleSidebarSelection(name)}
        >
          <div className="link-style">
            <img
              src={icon}
              alt={`${name} Icon`}
              className="sidebar-icon icon"
            />
            {name}
          </div>
        </Link>
      </li>
    );
  };

  return (
    <div className="sidebar">
      <ul>
        {renderTab("Dashboard", "/", Dashboard)}
        {renderTab("Messages", "/Messages", Messages)}
        {renderTab("Job", "/Job", Job)}
        {renderTab("Contract", "/Contract", Notification)}
        {renderTab("Support", "/Support", Support)}
        {renderTab("Quiz", "/Quiz", Quiz)}
        {renderTab("MyProfile", "/MyProfile", Profile)}
        {renderTab("Notification", "/Notification", Notification)}
      </ul>
    </div>
  );
};

export default Sidebar;
