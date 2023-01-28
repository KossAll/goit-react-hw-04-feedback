import React from 'react';
import PropTypes from 'prop-types';
import style from "./Statistics.module.css"



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.styledStats}>
      <li className={style.styledItem}>
        Good:<span className={style.statistics_style}>{good}</span>
      </li>
      <li className={style.styledItem}>
        Neutral:<span className={style.statistics_style}>{neutral}</span>
      </li>
      <li className={style.styledItem}>
        Bad:<span className={style.statistics_style}>{bad}</span>
      </li>
      <li className={style.styledItem}>
        Total:
        <span className={style.statistics_style}>{total}</span>
      </li>
      <li className={style.styledItem}>
        Positive feedback:
        <span className={style.statistics_style}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};