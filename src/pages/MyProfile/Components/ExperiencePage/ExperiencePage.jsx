import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Modal,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import WorkIcon from "@mui/icons-material/Work";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Solutions",
      description: "Developed and maintained web applications.",
      years: "2020 - 2023",
    },
    {
      id: 2,
      title: "Project Manager",
      company: "Creative Inc.",
      description: "Managed multiple projects and teams successfully.",
      years: "2018 - 2020",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Hub",
      description: "Performed data analysis and visualization.",
      years: "2016 - 2018",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Design Studio",
      description: "Created intuitive and responsive user interfaces.",
      years: "2014 - 2016",
    },
    {
      id: 5,
      title: "Intern",
      company: "Startup Labs",
      description: "Assisted in developing prototypes and conducting research.",
      years: "2013 - 2014",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    description: "",
    years: "",
  });

  const handleOpenAddModal = () => {
    setCurrentExperience(null);
    setNewExperience({ title: "", company: "", description: "", years: "" });
    setModalOpen(true);
  };

  const handleOpenEditModal = (experience) => {
    setCurrentExperience(experience);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (currentExperience) {
      setCurrentExperience({ ...currentExperience, [name]: value });
    } else {
      setNewExperience({ ...newExperience, [name]: value });
    }
  };

  const handleSaveExperience = () => {
    if (currentExperience) {
      setExperiences((prev) =>
        prev.map((exp) =>
          exp.id === currentExperience.id ? currentExperience : exp
        )
      );
    } else {
      setExperiences((prev) => [
        ...prev,
        { ...newExperience, id: prev.length + 1 },
      ]);
    }
    setModalOpen(false);
  };

  return (
    <div className="experience-container">
      <div className="experience-header">
        <Typography variant="h5">Experience</Typography>
        <IconButton onClick={handleOpenAddModal}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <Divider className="experience-divider" />
      <List>
        {experiences.map((exp) => (
          <ListItem
            key={exp.id}
            className="experience-item"
            onClick={() => handleOpenEditModal(exp)}
          >
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={exp.title}
              secondary={`${exp.company} (${exp.years})`}
            />
            <IconButton onClick={() => handleOpenEditModal(exp)}>
              <EditIcon className="edit-icon" />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div className="modal-centered">
          <Typography variant="h6">
            {currentExperience ? "Edit Experience" : "Add Experience"}
          </Typography>
          <TextField
            name="title"
            label="Title"
            value={
              currentExperience ? currentExperience.title : newExperience.title
            }
            onChange={handleInputChange}
            fullWidth
            className="modal-input"
          />
          <TextField
            name="company"
            label="Company"
            value={
              currentExperience
                ? currentExperience.company
                : newExperience.company
            }
            onChange={handleInputChange}
            fullWidth
            className="modal-input"
          />
          <TextField
            name="description"
            label="Description"
            value={
              currentExperience
                ? currentExperience.description
                : newExperience.description
            }
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={3}
            className="modal-input"
          />
          <TextField
            name="years"
            label="Years"
            value={
              currentExperience ? currentExperience.years : newExperience.years
            }
            onChange={handleInputChange}
            fullWidth
            className="modal-input"
          />
          <Button
            variant="contained"
            onClick={handleSaveExperience}
            className="modal-save-button"
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ExperiencePage;
