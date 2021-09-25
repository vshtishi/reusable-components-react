import React from "react";
import Movie from "./Movie";
const Movies = ({ movies }) => {
  return ( <>
    <div className="title">
    <h2>Suggested Movies</h2>
    <div className="underline"></div>
  </div>
    <section className="movieList">
      
        {movies.map((movie) => {
          return <div><Movie key={movie.imdbID} {...movie}></Movie></div>
        })}
      
    </section>
    </>
  )
};

export default Movies;
