import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if(count > 10){
      amount = 10
    }
    setText(data.slice(0, amount))
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
        {
          text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })
        }
      </article>
    </section>
  );
}

export default App;
