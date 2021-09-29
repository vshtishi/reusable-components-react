import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [movieItems, setMovieItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "All") {
      setMovieItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMovieItems(newItems);
  };

  return (
    <main>
      <section className="movies section">
        <br />
        <div className="title">
          <h2>Video Rentals</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <MoviesList items={movieItems} />
      </section>
    </main>
  );
}

export default App;
