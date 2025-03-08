import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./EducationSection.css";
import EducationPicture from "../../assets/StudentProfile/education.svg";

const EducationSection = () => {
  const [educationList, setEducationList] = useState([
    {
      institute: "Bangladesh Institute Of Science & Technology",
      degree: "B.Sc",
      year: "2016-2017",
    },
  ]);

  const [showAddEducation, setShowAddEducation] = useState(false);
  const [newEducation, setNewEducation] = useState({
    institute: "",
    degree: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const handleAddEducation = () => {
    if (newEducation.institute && newEducation.degree && newEducation.year) {
      setEducationList([...educationList, newEducation]);
      setNewEducation({ institute: "", degree: "", year: "" });
      setShowAddEducation(false);
    }
  };

  const toggleAddEducation = () => {
    setShowAddEducation((prev) => !prev);
  };

  return (
    <div className="education-container">
      <div className="education-header">
        <Typography variant="h5" className="text-color">
          Education
        </Typography>
        <IconButton onClick={toggleAddEducation}>
          {showAddEducation ? (
            <RemoveCircleOutlineIcon className="icon" />
          ) : (
            <AddCircleOutlineIcon className="icon" />
          )}
        </IconButton>
      </div>
      {/* <Divider className="education-divider" /> */}
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <img src={EducationPicture} alt="EducationPic" />
            <div className="education-details">
              <Typography className="text-color" variant="h6">
                {edu.institute}
              </Typography>
              <Typography className="text-color" variant="body2">
                {edu.degree} <span>({edu.year})</span>
              </Typography>
            </div>
          </div>
        ))}
      </div>
      {showAddEducation && (
        <div className="add-education-form">
          <TextField
            name="institute"
            label="Institute Name"
            value={newEducation.institute}
            onChange={handleInputChange}
            fullWidth
            size="small"
            className="custom-input "
          />
          <TextField
            name="degree"
            label="Degree"
            value={newEducation.degree}
            onChange={handleInputChange}
            fullWidth
            size="small"
            className="custom-input "
          />
          <TextField
            name="year"
            label="Year"
            value={newEducation.year}
            onChange={handleInputChange}
            fullWidth
            size="small"
            className="custom-input "
          />
          <Button
            variant="contained"
            onClick={handleAddEducation}
            className="education-add-buttons"
          >
            Add Education
          </Button>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
