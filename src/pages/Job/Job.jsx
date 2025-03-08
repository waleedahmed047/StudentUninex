import React from "react";
import JobCard from "../../components/JobCard/jobCard";
import "./Job.css";
import SearchIcon from "../../assets/job-Icons/Magnifer.svg";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import Slider from "@mui/material/Slider";

function Job() {
  const marks = [
    {
      value: 200,
      label: "200$",
    },
    {
      value: 10000,
      label: "10k$",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="job-main">
      <div className="job-main-right">
        <div className="job-search-header">
          <h1>Share Your Achivement</h1>
          <p>
            Explore the latest job opening and apply for the best job
            opportunities available today
          </p>
          <div className="job-searchbox">
            <img src={SearchIcon} />
            <input placeholder="Search anything globally" />
          </div>
        </div>
        <JobCard />
      </div>
      <div className="job-main-left">
        <div className="job-left-header">
          <h1>Filter</h1>
          <Button className="clear-all-button-filter">Clear all</Button>
        </div>
        <div className="job-salary-range">
          <Box>
            <h3 className="Typography">Salary</h3>
            <Slider
              aria-label="Custom marks"
              defaultValue={200}
              min={200}
              max={10000}
              getAriaValueText={valuetext}
              step={5}
              valueLabelDisplay="auto"
              marks={marks}
              className="custom-slider"
              sx={{
                marginLeft: "20px",
                width: "90%",
                "& .MuiSlider-valueLabel": {
                  fontSize: "12px",
                },
              }}
            />
          </Box>
        </div>
        <div className="filter-for-jobs">
          <div className="filter-section">
            <h3 className="h3">Job Type</h3>
            <FormGroup>
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="Urgent"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="Part time"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={
                  <Checkbox
                    size="small"
                    className="custom-checkbox"
                    defaultChecked
                  />
                }
                label="Full time"
              />
            </FormGroup>
          </div>

          {/* Location */}
          <div className="filter-section">
            <h3 className="h3" gutterBottom>
              Location
            </h3>
            <FormGroup>
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="Onsite"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={
                  <Checkbox
                    size="small"
                    className="custom-checkbox"
                    defaultChecked
                  />
                }
                label="Remote"
              />
            </FormGroup>
          </div>

          {/* Experience */}
          <div className="filter-section">
            <h3 className="h3" gutterBottom>
              Experience
            </h3>
            <FormGroup>
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label={
                  <div>
                    Intern{" "}
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      120 jobs
                    </span>
                  </div>
                }
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label={
                  <div>
                    Junior{" "}
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      85 jobs
                    </span>
                  </div>
                }
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label={
                  <div>
                    Mid Level{" "}
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      34 jobs
                    </span>
                  </div>
                }
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={
                  <Checkbox
                    size="small"
                    className="custom-checkbox"
                    defaultChecked
                  />
                }
                label={
                  <div>
                    Senior{" "}
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      25 jobs
                    </span>
                  </div>
                }
              />
            </FormGroup>
          </div>

          {/* Language */}
          <div className="filter-section">
            <h3 className="h3" gutterBottom>
              Language
            </h3>
            <FormGroup>
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="JavaScript"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="Python"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={<Checkbox size="small" className="custom-checkbox" />}
                label="Assembly language"
              />
              <FormControlLabel
                className="custom-checkbox-label"
                control={
                  <Checkbox
                    size="small"
                    className="custom-checkbox"
                    defaultChecked
                  />
                }
                label="Ruby"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
