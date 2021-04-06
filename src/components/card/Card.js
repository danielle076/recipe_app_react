import React from 'react';
import { ReactComponent as Clock } from '../../assets/time.svg';
import './Card.css';

function Card({ img, title, duration, highlight }) {
  return (
    <article className="recipe-card">
      <img src={img} alt={title} />
      <section>
        <Clock />
        {duration} minuten
      </section>
      <footer>
        <h3>{title}</h3>
      </footer>

      { highlight && <span className="highlighted">{highlight}</span>}
    </article>
  );
};

export default Card;