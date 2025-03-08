import React from "react";
import PropTypes from "prop-types";
import "./Card.css"; // CSS for styling

const Card = ({ image, title, value }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Card;
