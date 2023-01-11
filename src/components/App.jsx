import React, { useReducer } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const countReducer = (state, counter) => {
    switch (counter.type) {
      case 'good':
        return { ...state, good: state.good + 1 };
      case 'neutral':
        return { ...state, neutral: state.neutral + 1 };
      case 'bad':
        return { ...state, bad: state.bad + 1 };
      default:
        throw new Error(`Current type of feedback isn't possible`);
    }
  };

  const [state, dispatch] = useReducer(countReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const countPositiveFeedbackPercentage = () => {
    const calculatedPercentage = (good / (good + neutral + bad)) * 100;
    return calculatedPercentage.toFixed(0);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispatch}
          onLeaveGoodFeedback={() => dispatch({ type: 'good', payload: 1 })}
          onLeaveNeutralFeedback={() =>
            dispatch({ type: 'neutral', payload: 1 })
          }
          onLeaveBadFeedback={() => dispatch({ type: 'bad', payload: 1 })}
        />
      </Section>
      <Section title="Statistics">
        {good + bad + neutral > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
