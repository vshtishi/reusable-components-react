import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Movies from "./Movies";

const url = "http://www.omdbapi.com/?s=story&apikey=ddf8fa47";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const result = await response.json();
      const movies = result["Search"];
      setLoading(false);
      setMovies(movies);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const hideSuggestion = (id) => {
    const newMovies = movies.filter((movie) => movie.imdbID !== id);
    setMovies(newMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (movies.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Suggestions left</h2>
          <button className="btn" onClick={fetchMovies}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Movies movies={movies} hideSuggestion={hideSuggestion} />
    </main>
  );
}

export default App;
