import React from 'react';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <p>
        Good:<span> {good}</span>
      </p>
      <p>
        Neutral:<span> {neutral}</span>
      </p>
      <p>
        Bad:<span> {bad}</span>
      </p>
      <p>
        Total:
        <span> {totalFeedback}</span>
      </p>
      <p>
        Positive feedback: <span>{positiveFeedbackPercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.string.isRequired,
};

export default Statistics;
