import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    this.total = values.reduce((acc, number) => {
      return acc + number;
    }, 1);
  };

  handleFeedbackButton = event => {
    const buttonName = event.target.dataset.name;
    switch (buttonName) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;

      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;

      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;

      default:
        console.log('Mistake');
    }
    this.countTotalFeedback();
  };

  // countPositiveFeedbackPercentage;

  render() {
    return (
      <>
        <GlobalStyle />
        <h2>Please leave feedback</h2>
        <Box>
          <button
            type="button"
            data-name="good"
            onClick={this.handleFeedbackButton}
          >
            Good
          </button>
          <button
            type="button"
            data-name="neutral"
            onClick={this.handleFeedbackButton}
          >
            Neutral
          </button>
          <button
            type="button"
            data-name="bad"
            onClick={this.handleFeedbackButton}
          >
            Bad
          </button>
        </Box>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral} </p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.total}</p>
        <p>Positive feedback: </p>
      </>
    );
  }
}

export default App;
