import React, { useState } from "react";
import ratings from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";

const Rating = () => {
  const [index, setIndex] = useState(0);
  const { name, rating, image, header, text } = ratings[index];
  const starsCount = parseInt(rating.split('/')[0])

   const printStars = (count) => {
     const row = [];
     for (let i = 0; i < count; i++) {
       row.push(<FaStar key={i} className="star-icon" /> );
     }
     return row;
   };

  const checkIndex = (index) => {
    if (index > ratings.length - 1) {
      return 0;
    }
    if (index < 0) {
      return ratings.length - 1;
    }
    return index;
  };

  const prevRating = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextRating = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomRating = () => {
    let randomIndex = Math.floor(Math.random() * ratings.length);
    if(randomIndex === index){
        randomIndex = index + 1
    }
    setIndex(checkIndex(randomIndex));
};

  return (
    <article className="rating">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <p className="author">{name}</p>
      </div>
      <br />
      <h4 className="rating-header">{header}</h4>
      <span>
       { printStars(starsCount) }
        <p className="rating-score">{rating}</p>
      </span>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevRating}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextRating}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomRating}>
        random rating
      </button>
    </article>
  );
};

export default Rating;
