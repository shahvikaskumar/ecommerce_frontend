import React, { useState } from 'react';
import './rating.css';



const Rating = ({ totalStars = 5, onRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRating) {
      onRating(index);
    }
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
