import React, { useState } from "react";

const Movie = ({ imdbID, Poster, Title }) => {
  const [readMore, setReadMore] = useState(false)
  const dummyInfo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
  return (
    <article className="single-movie">
      <img src={Poster} alt={Title} />
      <footer>
        <div className="movie-info">
          <h4>{Title}</h4>
          <h4 className="movie-price">$100</h4>
        </div>
        <p>{readMore ? dummyInfo : `${dummyInfo.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn">Hide Suggestion</button>
      </footer>
    </article>
  )
};

export default Movie;
