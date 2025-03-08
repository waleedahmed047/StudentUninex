import React from 'react';
import './quiz.css'; 
import TimeImage from '../../assets/quiz/Time.svg';
import PassIcon from '../../assets/quiz/passed.svg'; // Add your Pass icon path here
import FailIcon from '../../assets/quiz/failed.svg'; // Add your Fail icon path here

const QuizCard = ({ img, title, time, status, onClick }) => {
  const renderTimeOrStatus = () => {
    if (status === 'Completed') {
      return (
        <span className="quiz-status">
          <img src={PassIcon} alt="Passed" className="quiz-status-icon" /> <p className='passed'>Passed</p> 
        </span>
      );
    } else if (status === 'Failed') {
      return (
        <span className="quiz-status ">
          <img src={FailIcon} alt="Failed" className="quiz-status-icon" /> <p className='failed'>Failed</p> 
        </span>
      );
    }
    return (
      <span className="quiz-status time">
        <img src={TimeImage} alt="Time" className="quiz-status-icon" /> {time}
      </span>
    );
  };

  return (
    <div className="quiz-card" onClick={onClick}>
      <img src={img} alt={title} className="quiz-card-img" />
      <h3 className="quiz-card-title">{title}</h3>
      <p className="quiz-card-time">{renderTimeOrStatus()}</p>
      <button className={`quiz-card-btn ${status.toLowerCase()}`}>
        {status === 'Completed' ? 'Completed' : status === 'Failed' ? 'Start Again' : 'Start Quiz'}
      </button>
    </div>
  );
};

export default QuizCard;
