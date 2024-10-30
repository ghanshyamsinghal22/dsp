// src/components/Card.js
import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, price ,redirect}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
      navigate(redirect); 
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">₹{price}</p>
      </div>
    </div>
  );
};

export default Card;
