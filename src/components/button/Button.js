import React from 'react';
import styles from './Button.module.css';

function Button({ children, clickHandler, type }) {
  return (
    <button
      type="button"
      className={type === styles[`button__outline`] ? styles[`button__outline`] : styles[`button`]}
      onClick={clickHandler}
    >
      { children }
    </button>
  );
}

export default Button;