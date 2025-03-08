import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/dashboard";
import Messages from "./pages/Messages/Messages";
import Job from "./pages/Job/Job";
import Support from "./pages/Support/Support";
import Quiz from "./pages/Quiz/Quiz";
import MyProfile from "./pages/MyProfile/MyProfile";
import Notification from "./pages/Notification/Notification";
import ProjectDescription from "./pages/JobDescription/jobDescription";
import QuizQuestion from "./pages/QuizQuestions/quizQuestions";
import Contract from "./pages/Contract/Contract";
import TicketDetails from './components/Ticket_Detail/TicketDetail';
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Protected Routes Inside Layout */}
        <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
          <Route index element={<Dashboard />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/job" element={<Job />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/support" element={<Support />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="job/jobDescription/:jobId"
            element={<ProjectDescription />}
          />
          <Route path="quizQuestions/:quizId" element={<QuizQuestion />} />
          <Route path="/ticket/:ticketNo" element={<TicketDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
