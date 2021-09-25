import React, { useState } from "react";

const Movie = ({ imdbID, Poster, Title }) => {
  return (
    <article className="single-movie">
      <img src={Poster} alt={Title} />
      <footer>
        <div className="movie-info">
          <h4>{Title}</h4>
          <h4 className="movie-price">$100</h4>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </p>
      </footer>
    </article>
  )
};

export default Movie;
