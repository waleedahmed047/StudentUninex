import React, { useState } from "react";
import "./SkillsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    "HTML/CSS",
    "Design Tools",
    "JavaScript (ES6+)",
    "Responsive Design",
    "CSS Preprocessing",
    "Version Control/Git",
    "Frontend Security",
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [showAddSkill, setShowAddSkill] = useState(false); // Toggle state

  // Add new skill to the list
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Reset input field
    }
  };

  // Toggle add skill section
  const toggleAddSkillSection = () => {
    setShowAddSkill((prev) => !prev);
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>Skill</h2>
        <span className="edit-icon" onClick={toggleAddSkillSection}>
          <FontAwesomeIcon icon={faEdit} className="icon-selected" />
        </span>
      </div>
      <hr />
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>

      {showAddSkill && ( // Conditionally render the add skill section
        <div className="add-skill">
          <input
            type="text"
            placeholder="Add new skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="skill-input custom-input"
          />
          <button onClick={handleAddSkill} className="add-button">
            Add Skill
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
