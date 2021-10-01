import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-center">
      <h3>Generate Random Text:</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Nr of paragraphs : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          labore qui nostrum repellendus doloribus a ratione eum beatae,
          recusandae ipsam. Quisquam similique iusto recusandae quidem
          consectetur! Sequi rem magni ipsum, nemo perferendis necessitatibus
          illo at aliquid esse qui temporibus iure incidunt atque totam? Commodi
          rerum, nesciunt eum recusandae expedita vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          labore qui nostrum repellendus doloribus a ratione eum beatae,
          recusandae ipsam. Quisquam similique iusto recusandae quidem
          consectetur! Sequi rem magni ipsum, nemo perferendis necessitatibus
          illo at aliquid esse qui temporibus iure incidunt atque totam? Commodi
          rerum, nesciunt eum recusandae expedita vero.
        </p>
      </article>
    </section>
  );
}

export default App;
