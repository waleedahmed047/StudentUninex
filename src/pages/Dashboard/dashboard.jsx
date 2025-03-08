import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "../../components/Card/Card";
import ProfileViewChart from "../../components/LineGraph/graph";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import SuggestedJobs from "../../components/SuggestedJobs/SuggestedJobs";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import EducationSection from "../../components/EducationSection/EducationSection";

// Import SVG images
import ProfileView from "../../assets/dashboard/profileView.svg";
import IntrestSend from "../../assets/dashboard/intrestSend.svg";
import TotalContract from "../../assets/dashboard/contract.svg";
import Interview from "../../assets/dashboard/interview.svg";
import ProfileImage from "../../assets/dashboard/profileImage.svg";
import Activity1 from "../../assets/StudentProfile/activity1.svg";
import Activity2 from "../../assets/StudentProfile/activity2.svg";
import Activity3 from "../../assets/StudentProfile/activity3.svg";
const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Apis/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);
  const cardData = [
    {
      id: 1,
      title: "Profile Viewed",
      value: "12.5 K",
      image: ProfileView,
    },
    {
      id: 2,
      title: "Interest Sent",
      value: "45",
      image: IntrestSend,
    },
    {
      id: 3,
      title: "Total Contract",
      value: "12",
      image: TotalContract,
    },
    {
      id: 4,
      title: "Interview",
      value: "12",
      image: Interview,
    },
  ];

  const studentData = {
    studentProfile: {
      name: "Faisal Rehman",
      role: "Software Developer",
      profileImage: ProfileImage,
    },
    recentActivities: [
      {
        icon: Activity1,
        activity: "Your application has accepted in 1 vacancy",
        time: "1 h ago",
      },
      {
        icon: Activity2,
        activity: "Your application has accepted in 1 vacancy",
        time: "1 h ago",
      },
      {
        icon: Activity3,
        activity: "Your application has accepted in 1 vacancy",
        time: "1 h ago",
      },
      {
        icon: Activity1,
        activity: "Your application has accepted in 1 vacancy",
        time: "1 h ago",
      },
    ],
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-main-left">
        <div className="card-container">
          {cardData.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              value={data.value}
              image={data.image}
            />
          ))}
        </div>
        <div className="dashboard-profile-view-analytic">
          <h1>Profile View Analysis</h1>
          <ProfileViewChart />
          <SkillsSection />
          <EducationSection />
        </div>
      </div>
      <div className="dashboard-main-right">
        <StudentProfile studentData={studentData} />
        <SuggestedJobs jobs={jobs} />
      </div>
    </div>
  );
};

export default Dashboard;
