import React from 'react';
import { ReactComponent as Clock } from '../../assets/time.svg';
import styles from './Card.module.css';

function Card({ img, title, duration, highlight }) {
  return (
      <article className={styles['recipe-card']}>
      <img src={img} alt={title} />
      <section>
        <Clock />
        {duration} minuten
      </section>
      <footer>
        <h3>{title}</h3>
      </footer>

          { highlight && <span className={styles.highlighted}>{highlight}</span>}
    </article>
  );
}

export default Card;