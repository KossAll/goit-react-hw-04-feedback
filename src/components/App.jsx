import { useState } from 'react';
import Notification from 'components/MessageNotification/MessageNotification';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbeckOptions/FeedbackOptions';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const statePropNames = Object.keys(feedback);

  const onLeaveFeedback = feedback => {
    setFeedback(prevState => {
      const value = prevState[feedback];
      return {
        ...prevState,
        [feedback]: value + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    let total = 0;
    for (const statePropName of statePropNames) {
      total += feedback[statePropName];
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positiveFidback = Math.round((feedback.good * 100) / total);
    return positiveFidback;
  };

  return (
    <div>
      <Section title="Please leave the feedback">
        <FeedbackOptions
          options={statePropNames}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() !== 0 && (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}

      {countTotalFeedback() === 0 && (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
export default App;
