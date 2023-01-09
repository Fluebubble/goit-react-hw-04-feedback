import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    // initialValue: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(state => {
      return {
        [key]: state[key] + 1,
      };
    });
  };

  handleIncrement = e => {
    const name = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const calculatedPercentage = (good / (good + neutral + bad)) * 100;
    return calculatedPercentage.toFixed(0);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good + this.state.bad + this.state.neutral > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
