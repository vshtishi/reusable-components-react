import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [episodes, setEpisodes] = useState(data);
  const [value, setValue] = useState(0);

  const { order, date, info, title } = episodes[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Mr.Robot Episodes</h2>
        <div className="underline"></div>
      </div>

      <div className="episodes-center">
        <div className="btn-container">
          {episodes.map((episode, index) => {
            return (
              <button
                key={episode.id}
                className={`episode-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                Episode {episode.order}
              </button>
            );
          })}
        </div>
        <article className="episode-info">
          <h3>{title}</h3>
          <h4>Episode {order}</h4>
          <p className="episode-date">
            <b>Released:</b> {date}
          </p>

          <div className="episode-desc">
            <FaAngleDoubleRight className="episode-icon" />
            <p>
              <b>Directed By:</b> {info.directed}
            </p>
          </div>

          <div className="episode-desc">
            <FaAngleDoubleRight className="episode-icon" />
            <p>
              <b>Viewers:</b> {info.viewers}
            </p>
          </div>

          <div className="episode-desc">
            <FaAngleDoubleRight className="episode-icon" />
            <p>
              <b>Synopsis:</b> {info.desc}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;
