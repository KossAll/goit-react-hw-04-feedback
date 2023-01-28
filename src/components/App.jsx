import { Component } from 'react';
import Notification from 'components/MessageNotification/MessageNotification';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbeckOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedbac = good + neutral + bad;
    return countTotalFeedbac;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const totalPositiv = this.state.good;
    const result = ((totalPositiv / total) * 100).toFixed(0);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
       
        
        <Section title="Statistics">
          {total ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
           
          ) : ( <Notification message="There is no feedback" />
            
          )}
        </Section>
       
         
          
        
      </div>
    );
  }
}
