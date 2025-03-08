import React, { useState } from "react";
import {
  Typography,
  Button,
  Modal,
  TextField,
  IconButton,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionIcon from "@mui/icons-material/Description";
import "./CVPage.css";

const CVPage = () => {
  const [cvList, setCvList] = useState([
    { id: 1, name: "Professional CV", description: "Sleek and formal design." },
    { id: 2, name: "Creative CV", description: "For artistic roles." },
    { id: 3, name: "Minimal CV", description: "Clean and minimal style." },
    { id: 4, name: "Modern CV", description: "Modern design elements." },
    { id: 5, name: "Classic CV", description: "Timeless classic template." },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentCV, setCurrentCV] = useState(null);
  const [newCV, setNewCV] = useState({
    name: "",
    description: "",
  });

  const handleOpenAddModal = () => {
    setCurrentCV(null);
    setNewCV({ name: "", description: "" });
    setModalOpen(true);
  };

  const handleOpenEditModal = (cv) => {
    setCurrentCV(cv);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (currentCV) {
      setCurrentCV({ ...currentCV, [name]: value });
    } else {
      setNewCV({ ...newCV, [name]: value });
    }
  };

  const handleSaveCV = () => {
    if (currentCV) {
      setCvList((prev) =>
        prev.map((cv) => (cv.id === currentCV.id ? currentCV : cv))
      );
    } else {
      setCvList((prev) => [
        ...prev,
        { ...newCV, id: prev.length + 1 },
      ]);
    }
    setModalOpen(false);
  };

  return (
    <div className="cv-container">
      <div className="cv-header">
        <Typography variant="h5">CV Templates</Typography>
        <IconButton onClick={handleOpenAddModal}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <Divider className="cv-divider" />
      <Grid container spacing={3}>
        {cvList.map((cv) => (
          <Grid item xs={12} md={6} key={cv.id}>
            <div
              className="cv-item"
              onClick={() => handleOpenEditModal(cv)}
            >
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={cv.name}
                    secondary={cv.description}
                  />
                </ListItem>
              </List>
              <IconButton onClick={() => handleOpenEditModal(cv)}>
                <EditIcon />
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div className="modal-centered">
          <Typography variant="h6">
            {currentCV ? "Edit CV" : "Add CV"}
          </Typography>
          <TextField
            name="name"
            label="CV Name"
            value={currentCV ? currentCV.name : newCV.name}
            onChange={handleInputChange}
            fullWidth
            className="modal-input"
          />
          <TextField
            name="description"
            label="Description"
            value={
              currentCV ? currentCV.description : newCV.description
            }
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={3}
            className="modal-input"
          />
          <Button
            variant="contained"
            onClick={handleSaveCV}
            className="modal-save-button"
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CVPage;
