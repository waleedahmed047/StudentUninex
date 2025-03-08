import React, { useEffect, useState } from "react";
import "./jobCard.css";
import StartImage from "../../assets/job-Icons/start.svg";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
function Job() {
  const [jobs, setJobs] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const showJob = (jobId) => {
    navigate(`/Job/JobDescription/${jobId}`);
  };

  useEffect(() => {
    fetch("/Apis/newJobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="job-container">
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <div className="job-header-left">
                <Avatar
                  src={`${job.image}`}
                  alt={job.company}
                  className="job-logo"
                />
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company-name">{job.company}</p>
                </div>
              </div>
              <span className="bookmark">
                {" "}
                <Checkbox
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                  className="icon"
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#32BF74",
                    },
                  }}
                />
              </span>
            </div>
            <div className="job-intrests-potion">
              <div className="job-meta">
                <span>
                  <img src={StartImage} className="icon" /> {job.type}
                </span>
                <span>
                  <img src={StartImage} className="icon" /> {job.experience}
                </span>
                <span>
                  <img src={StartImage} className="icon" /> {job.location}
                </span>
                <span>
                  <img src={StartImage} className="icon" /> {job.salary}
                </span>
              </div>
              <div className="job-date-potion">
                <span className="job-date">{job.date}</span>
              </div>
            </div>

            <p className={`job-description ${isExpanded ? "expanded" : ""}`}>
              {job.description}
            </p>
            <div className="job-footer">
              <span>
                <img src={StartImage} className="icon" /> {job.interest}{" "}
                Interest
              </span>
              <div className="job-actions">
                <button
                  className="interest-btn"
                  onClick={() => showJob(job.id)}
                >
                  Interest
                </button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
