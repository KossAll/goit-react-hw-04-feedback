import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button className={style.btn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
      type="button"
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options:[],
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
