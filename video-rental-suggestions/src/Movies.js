import React from "react";
import Movie from "./Movie";
const Movies = ({ movies, hideSuggestion }) => {
  return (
    <>
      <div className="title">
        <h2>Suggested Movies</h2>
        <div className="underline"></div>
      </div>
      <section className="movieList">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <Movie
                key={movie.imdbID}
                {...movie}
                hideSuggestion={hideSuggestion}
              ></Movie>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Movies;
