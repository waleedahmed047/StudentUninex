import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./jobDescription.css";
import { Avatar, Button, Checkbox } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";
import JobApplyModal from "../../components/JobApply/JobApplyModal";
const JobDescription = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [allJobs, setAllJobs] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const showJob = (jobId) => {
    navigate(`/Job/JobDescription/${jobId}`);
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("/Apis/newJobs.json");
        const data = await response.json();
        const jobs = setAllJobs(data);
        const job = data.find((job) => job.id.toString() === jobId);
        setJobDetails(job);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [jobId]);

  if (!jobDetails) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="job-description-container">
      <div className="job-description-container-left">
        <div className="job-description-container-left-header">
          <div className="job-description-name">
            <div className="job-description-image">
              <Avatar
                sx={{ height: "50px", width: "50px" }}
                src={jobDetails.image}
                alt="image"
              />
            </div>
            <div className="job-description-project-name">
              <h2>{jobDetails.title}</h2>
              <p>{jobDetails.company}</p>
            </div>
          </div>
          <div className="job-description-button">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00CEF3",
                textTransform: "none",
                color: "#00CEF3",
                "&:hover": {
                  borderColor: "#00B5D6",
                  color: "#00B5D6",
                },
                marginRight: "10px",
              }}
            >
              Show Interest
            </Button>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                textTransform: "none",
                backgroundColor: "#00CEF3",
                "&:hover": {
                  backgroundColor: "#00B5D6",
                },
                marginRight: "10px",
              }}
              onClick={() => setModalOpen(true)}
            >
              Apply
            </Button>

            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "#32BF74",
                },
              }}
            />
          </div>
        </div>
        <div>
          <div className="job-description-potion">
            <div className="job-meta">
              <span> {jobDetails.type}</span>
              <span> {jobDetails.experience}</span>
              <span> {jobDetails.location}</span>
              <span> {jobDetails.salary}</span>
            </div>
            <div className="job-date-potion">
              <span className="job-date">{jobDetails.date}</span>
            </div>
          </div>
        </div>
        <div className="project-description-more-detail">
          <div>
            <strong className="project-description-more-detail-span">
              Company Introduction:
            </strong>
            <br />
            <p className="project-description-more-detail-p">
              {jobDetails.companyIntroduction}
            </p>
          </div>
          <div>
            <strong className="project-description-more-detail-span">
              Job Description:
            </strong>
            <br />
            <p className="project-description-more-detail-p">
              {jobDetails.jobDescription}
            </p>
          </div>
          <div>
            <strong className="project-description-more-detail-span">
              Responsibilities:
            </strong>
            <br />
            <ul className="project-description-more-detail-p">
              {jobDetails.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong className="project-description-more-detail-span">
              Skills and Qualifications:
            </strong>
            <br />
            <ul className="project-description-more-detail-p">
              {jobDetails.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="job-description-container-right">
        <div className="job-description-container-right-header">
          <h1>Your Eligible Job</h1>
        </div>
        <div className="job-description-container-right-allJobs">
          {allJobs.map((job, index) => (
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
                  <span> {job.type}</span>
                  <span> {job.experience}</span>
                  <span> {job.location}</span>
                  <span> {job.salary}</span>
                  <span className="job-date">{job.date}</span>
                </div>
              </div>

              <div className="job-footer">
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {job.interest} Interest
                </span>
                <div className="job-actions">
                  <button
                    className="interest-btn"
                    onClick={() => showJob(job.id)}
                  >
                    Interest
                  </button>
                  <button
                    className="apply-btn"
                    onClick={() => setModalOpen(true)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <JobApplyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={jobDetails.title}
      />
    </div>
  );
};

export default JobDescription;
