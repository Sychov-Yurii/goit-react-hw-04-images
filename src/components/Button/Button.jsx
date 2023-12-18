import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick, label }) => {
  return (
    <button type="submit" className={css.searchForm_button} onClick={onClick}>
      <span className={css.searchForm_button_label}>{label}</span>
    </button>
  );
};

export default Button;
