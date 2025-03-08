import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Modal,
} from "@mui/material";
import "./quizQuestions.css";

const QuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/Apis/quizzesQuestions.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedQuiz = data.find((q) => q.id === parseInt(quizId, 10));
        setQuiz(selectedQuiz);
        setTimeLeft(selectedQuiz.time * 60); // Convert time from minutes to seconds
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  }, [quizId]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // Cleanup the timer on unmount
    }
  }, [timeLeft]);

  if (!quiz) return <div>Loading...</div>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setStatus((prev) => ({ ...prev, [currentQuestionIndex]: "complete" })); // Mark as complete
  };

  const handleSkip = () => {
    setStatus((prev) => ({ ...prev, [currentQuestionIndex]: "skipped" })); // Mark as skipped
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleEndQuiz = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="quiz-started-main">
      {/* Main Quiz Section */}
      <Box sx={{ flex: 3, padding: 2 }}>
        <div className="quiz-started-header">
          <Typography className="question-title">
            Total Questions: <strong> {quiz.questions.length}</strong>
          </Typography>
          <Typography className="question-title">
            Total Time: <strong>{quiz.time} min</strong>
          </Typography>
        </div>
        <div className="quiz-started-header">
          <Typography className="question-title" sx={{ marginTop: 2 }}>
            Question: {currentQuestionIndex + 1} of {quiz.questions.length}
          </Typography>
          <div className="quiz-started-buttons">
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              color="error"
            >
              {formatTime(timeLeft)}
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              color="warning"
              onClick={handleEndQuiz}
            >
              End Quiz
            </Button>
          </div>
        </div>
        <Typography className="question-title" sx={{ marginTop: 2 }}>
          Quiz Title: <strong> {quiz.title}</strong>
        </Typography>
        <div className="questionNo">
          <Typography className="question-title" variant="subtitle1">
            {currentQuestion.question}
          </Typography>
          <RadioGroup
            className="custom-radio"
            value={answers[currentQuestionIndex] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
          >
            {currentQuestion.options.map((option, idx) => (
              <FormControlLabel
                className="custom-radio-label"
                key={idx}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </div>
        <div className="selected-quiz-next-button">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent:
                currentQuestionIndex === 0 ? "flex-end" : "space-between",
              marginTop: 2,
            }}
          >
            {currentQuestionIndex > 0 && (
              <Button
                size="small"
                variant="outlined"
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
                sx={{
                  textTransform: "none",
                }}
              >
                Previous
              </Button>
            )}

            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#00cef3",
                borderColor: "#00cef3",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(0, 206, 243, 0.1)",
                  borderColor: "#00cef3",
                },
              }}
              onClick={handleSkip}
            >
              Skip
            </Button>

            <Button
              size="small"
              variant="contained"
              sx={{
                boxShadow: "none",
                backgroundColor: "#00cef3",
                textTransform: "none",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#00b8d6",
                },
              }}
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              disabled={currentQuestionIndex === quiz.questions.length - 1}
            >
              Next
            </Button>
          </Box>
        </div>
      </Box>

      {/* Question Navigator */}
      <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
        <div className="selected-quiz-navigator">
          <h2>Question Navigator</h2>
          <p>
            Total Answered:{" "}
            <strong className="strong">{Object.keys(answers).length}</strong>
          </p>
        </div>
        <div className="selected-quiz-navigator-buttons">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 2 }}>
            {quiz.questions.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  backgroundColor:
                    status[index] === "complete"
                      ? "#60A31E"
                      : status[index] === "skipped"
                      ? "#FCC347"
                      : "#999999",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => handleNavigation(index)}
              >
                {index + 1}
              </Box>
            ))}
          </Box>
        </div>
      </Box>

      {/* End Quiz Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Quiz Summary</Typography>
          <Typography>Total Questions: {quiz.questions.length}</Typography>
          <Typography>
            Questions Answered: {Object.keys(answers).length}
          </Typography>
          <Typography>
            Skipped Questions:{" "}
            {quiz.questions.length - Object.keys(answers).length}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default QuizPage;
