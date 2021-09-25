import React from "react";
import Movie from "./Movie";
const Movies = ({ movies }) => {
  return ( <>
    <div className="title">
    <h2>Suggested Movies</h2>
    <div className="underline"></div>
  </div>
    <section className="movieList">
      <div>
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie}></Movie>
        })}
      </div>
    </section>
    </>
  )
};

export default Movies;
