import React from "react";
import "./SuggestedJobs.css";
import { Avatar } from "@mui/material";

const SuggestedJobs = ({ jobs }) => {
  return (
    <div className="suggested-jobs-container">
      <h2>Suggested Job</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-card-main">
          <div className="job-logo">
            <Avatar src={job.logo} alt="Company Logo" />
          </div>
          <div className="job-details">
            <h3>{job.title}</h3>
            <p>
              {job.date} &nbsp; | &nbsp; {job.type} &nbsp; | &nbsp;{" "}
              {job.location}
            </p>
            <p className="interest">
              <span>☆</span> {job.interest} Interest
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedJobs;
