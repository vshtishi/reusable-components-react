import React, { useState } from 'react';
import MoviesList from './MoviesList';
import Categories from './Categories';
import items from './data';

function App() {
  const [movieItems, setMovieItems] = useState(items)
  const [categories, setCategories] = useState([])


  return (
    <main>
      <section className="movies section">
        <div className="title">
          <h2>Video Rentals</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <MoviesList items={movieItems} />
      </section>
    </main>
  )
}

export default App;