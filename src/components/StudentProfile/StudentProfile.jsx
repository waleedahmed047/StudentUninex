import React from "react";
import "./StudentProfile.css";
import { Avatar } from "@mui/material";
const StudentProfile = ({ studentData }) => {
  const { studentProfile, recentActivities } = studentData;

  return (
    <div className="dashboard-student-profile-view">
      {/* Student Profile Section */}
      <div className="dashboard-student-profile-view-header">
        <Avatar
          className="student-profile-view-header-image"
          src={studentProfile.profileImage}
          alt="profile"
        />
        <h1>{studentProfile.name}</h1>
        <p>{studentProfile.role}</p>
      </div>

      {/* Recent Activities Section */}
      <div className="dashboard-student-profile-recent-activities">
        <h3>Recent Activities</h3>
        {recentActivities.map((activity, index) => (
          <div key={index} className="activity-item">
            <Avatar
              src={activity.icon}
              alt="activity icon"
              className="activity-icon-main"
            />
            <div className="activity-text">
              <p>{activity.activity}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfile;
