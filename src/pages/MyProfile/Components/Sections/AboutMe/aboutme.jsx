import React, { useState } from "react";
import { IconButton, Modal, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./aboutme.css";

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(
    "I am a passionate developer with experience in developer building web applications using modern technologies. I specialize in JavaScript frameworks like React and Vue.js. My focus is on creating efficient, scalable, and user-friendly interfaces. I love solving complex problems and contributing to open-source projects. In my free time, I enjoy exploring new programming languages and enhancing my skills. I am always eager to learn and grow in the field of software development.I am a passionate developer with experience in developer building web applications using modern technologies. I specialize in JavaScript frameworks like React and Vue.js. My focus is on creating efficient, scalable, and user-friendly interfaces. I love solving complex problems and contributing to open-source projects. In my free time, I enjoy exploring new programming languages and enhancing my skills. I am always eager to learn and grow in the field of software development. I am a passionate developer with experience in developer building web applications using modern technologies. I specialize in JavaScript frameworks like React and Vue.js. My focus is on creating efficient, scalable, and user-friendly interfaces. I love solving complex problems and contributing to open-source projects. In my free time, I enjoy exploring new programming languages and enhancing my skills. I am always eager to learn and grow in the field of software development."
  );

  const toggleExpanded = () => setExpanded(!expanded);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div className="about-me-container">
      <div className="header">
        <h2>About Me</h2>
        <IconButton onClick={handleOpen} className="edit-button icon">
          <EditIcon />
        </IconButton>
      </div>
      <p className="about-text">
        {expanded ? text : `${text.substring(0, 250)}...`}
      </p>
      <p onClick={toggleExpanded} className="read-more-button">
        {expanded ? "Read Less" : "Read More"}
      </p>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
          <h3>Edit About Me</h3>
          <TextField
            multiline
            fullWidth
            rows={6}
            value={text}
            onChange={handleTextChange}
            className="text-field"
          />
          <div className="modal-actions">
            <Button onClick={handleClose} variant="contained">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AboutMe;
