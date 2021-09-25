import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Movies from "./Movies";

const url = "http://www.omdbapi.com/?s=story&apikey=ddf8fa47"


function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const result = await response.json()
      const movies = result['Search']
      setLoading(false)
      setMovies(movies)
    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }


  }

  useEffect(() => {
    fetchMovies()

  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Movies movies={movies} />
    </main>
  )
}

export default App;
