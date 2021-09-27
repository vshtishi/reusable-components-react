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
        <FaStar className="star-icon" />
        <p className="rating-score">{rating}</p>
      </span>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">random rating</button>
    </article>
  );
};

export default Rating;
