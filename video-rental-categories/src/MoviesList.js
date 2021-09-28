import React from 'react';

const MoviesList = ({ items }) => {
  return (
    <div className="section-center">
      {
        items.map((movieItem) => {
          const { id, title, img, desc, price } = movieItem
          return (
            <article key={id} className="movie">
              <img src={img} alt={title} className="photo" />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          )
        })}
    </div>
  )
};

export default MoviesList;