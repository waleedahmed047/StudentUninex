import React, { useState, useEffect } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import SearchImg from "../../assets/job-Icons/Magnifer.svg";
import "./Quiz.css";
import QuizCard from "../../components/QuixCard/quiz";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const navigate = useNavigate();

  const handleStartQuiz = (quizId) => {
    navigate(`/quizQuestions/${quizId}`);
  };
  useEffect(() => {
    fetch("/Apis/quizzes.json")
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(data);
        setFilteredQuizzes(data);
      })
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = quizzes.filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(value) &&
        (selectedCategory === "All" || quiz.category === selectedCategory)
    );
    setFilteredQuizzes(filtered);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    const filtered = quizzes.filter(
      (quiz) =>
        (category === "All" || quiz.category === category) &&
        quiz.title.toLowerCase().includes(searchTerm)
    );
    setFilteredQuizzes(filtered);
  };

  const openModal = (quiz) => {
    setModalData(quiz);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="quiz-app">
      <div className="filters">
        <div className="quiz-search-box">
          <img src={SearchImg} alt="search" />
          <input
            placeholder="Search Quiz"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="categories">
          {["All", "Frontend", "Backend", "Database"].map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              variant={category === selectedCategory ? "contained" : "outlined"}
              className="filter-buttons-quiz"
              sx={{ marginLeft: "5px" }}
              size="small"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="quiz-list">
        {filteredQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            img={quiz.img}
            title={quiz.title}
            time={quiz.time}
            status={quiz.status}
            onClick={() => openModal(quiz)}
          />
        ))}
      </div>

      <Modal open={!!modalData} onClose={closeModal}>
        <Box
          className="modal-box"
          sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}
        >
          {modalData && (
            <>
              <Typography variant="h5" gutterBottom>
                <div className="modal-start-main">
                  <div className="modal-start-quiz">
                    <img src={modalData.img} />
                    <p>{modalData.title}</p>
                  </div>
                  <div>
                    <Typography variant="body1">
                      Time: {modalData.time}
                    </Typography>
                  </div>
                </div>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <h1 className="modal-start-about">About This Quiz</h1>
                {modalData.details}
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ boxShadow: "none" }}
                  onClick={() => handleStartQuiz(modalData.id)}
                >
                  Start Quiz
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Quiz;
