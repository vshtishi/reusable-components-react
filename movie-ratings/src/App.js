import React from "react";
import Rating from "./Rating";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Venom Ratings</h2>
          <div className="underline"></div>
        </div>
        <Rating />
      </section>
    </main>
  );
}

export default App;
