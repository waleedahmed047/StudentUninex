import React, { useState } from "react";
import { Button, Modal, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import "./Portfolio.css";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      image:
        "https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149220443.jpg ",
      description: "A modern e-commerce platform with advanced features.",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiLsWdAlncgZL09M1u0ENIwiD19Lf6Y3VNw&s",
      description: "A secure mobile banking application.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xUBVEHBAGxCUlcE8rvOYJ2Nmd_cz6k2MupuZKeYk9WjcvQzgZaYalcLL4y4jympoB90&usqp=CAU",
      description: "A personal portfolio showcasing skills and projects.",
    },
    {
      id: 4,
      title: "Social Media Platform",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-acrbeWSjzLRLAUpeZ9C2Wu3EcdWIUch6wg&s",
      description: "A scalable social media platform for networking.",
    },
    {
      id: 5,
      title: "Food Delivery App",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-450q5OW6QmWjPZKqxeQOX3KQaw8-ZDSQw&s ",
      description: "A food delivery app with real-time tracking.",
    },
    {
      id: 6,
      title: "Weather App",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXgiInjR-O1eERM-dvH3qZHxzJmXI7Qtu7w&s ",
      description: "A weather application with live updates.",
    },
    {
      id: 7,
      title: "CRM Dashboard",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Bx1hKaqJXKKgdn47gmGbQPlBJ8PNaR6Xjg&s ",
      description: "A comprehensive CRM dashboard.",
    },
  ]);

  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleOpenEditModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedPortfolio(null);
    setModalOpen(false);
  };

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleEditPortfolio = (field, value) => {
    setSelectedPortfolio({ ...selectedPortfolio, [field]: value });
  };

  const handleSavePortfolio = () => {
    setPortfolios((prev) =>
      prev.map((p) => (p.id === selectedPortfolio.id ? selectedPortfolio : p))
    );
    handleCloseEditModal();
  };

  const handleAddPortfolio = () => {
    if (newPortfolio.title && newPortfolio.image && newPortfolio.description) {
      setPortfolios((prev) => [
        ...prev,
        { ...newPortfolio, id: prev.length + 1 },
      ]);
      setNewPortfolio({ title: "", image: "", description: "" });
      handleCloseAddModal();
    }
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <IconButton onClick={handleOpenAddModal}>
          <AddIcon />
        </IconButton>
      </div>

      <div className="portfolio-list">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className="portfolio-item"
            onClick={() => handleOpenEditModal(portfolio)}
          >
            <img src={portfolio.image} alt={portfolio.title} />
            <h3 className="portfolio-title">{portfolio.title}</h3>
          </div>
        ))}
      </div>

      {/* Add Portfolio Modal */}
      <Modal open={addModalOpen} onClose={handleCloseAddModal}>
        <div className="modal-content">
          <h3>Add Portfolio</h3>
          <TextField
            label="Title"
            className="text-field"
            value={newPortfolio.title}
            onChange={(e) =>
              setNewPortfolio({ ...newPortfolio, title: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Image URL"
            className="text-field"
            value={newPortfolio.image}
            onChange={(e) =>
              setNewPortfolio({ ...newPortfolio, image: e.target.value })
            }
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            label="Description"
            value={newPortfolio.description}
            onChange={(e) =>
              setNewPortfolio({ ...newPortfolio, description: e.target.value })
            }
            fullWidth
            multiline
            rows={4}
          />
          <Button
            onClick={handleAddPortfolio}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Add Portfolio
          </Button>
        </div>
      </Modal>

      {/* Edit Portfolio Modal */}
      {selectedPortfolio && (
        <Modal open={modalOpen} onClose={handleCloseEditModal}>
          <div className="modal-content">
            <img
              src={selectedPortfolio.image}
              alt={selectedPortfolio.title}
              className="modal-cover-image"
            />
            <TextField
              label="Title"
              value={selectedPortfolio.title}
              onChange={(e) => handleEditPortfolio("title", e.target.value)}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Description"
              value={selectedPortfolio.description}
              onChange={(e) =>
                handleEditPortfolio("description", e.target.value)
              }
              fullWidth
              multiline
              rows={4}
              sx={{ mt: 2 }}
            />
            <Button
              onClick={handleSavePortfolio}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
