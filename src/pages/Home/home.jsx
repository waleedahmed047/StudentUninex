import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Contract from "../Contract/Contract";
import Messages from "../Messages/Messages";
import Job from "../Job/Job";
import Support from "../Support/Support";
import Quiz from "../Quiz/Quiz";
import MyProfile from "../MyProfile/MyProfile";
import Notification from "../Notification/Notification";
import Dashboard from '../Dashboard/dashboard';
import ProjectDescription from '../JobDescription/jobDescription';
import "./home.css";
import QuizQuestion from '../QuizQuestions/quizQuestions';
const Home = ({ toggleTheme }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [currentComponent, setCurrentComponent] = useState("default");

  return (
    <div className="dashboard">
      <div className="navbarContent">
        <Navbar selectedItem={selectedItem} toggleTheme={toggleTheme} />
      </div>
      <div className="content">
        <div className="sidebar-content">
          <Sidebar setSelectedItem={setSelectedItem} />
        </div>
        <div className="content-render">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Contract" element={<Contract />} />
            <Route path="/Job" element={<Job/>} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Job/JobDescription/:jobId" element={<ProjectDescription />} /> 
            <Route path="/quizQuestions/:quizId" element={<QuizQuestion />} />

          </Routes>
        </div>

      </div>
    </div>
  );
};

export default Home;
