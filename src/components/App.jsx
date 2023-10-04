import { Component } from 'react';
import css from './App.module.css';
import { FeedBackContainer } from './FeedBackContainer/FeedBackContainer';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section ';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { object } from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  };

  positivePercentageFeedback=() =>{
    const {good}=this.state;
     return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  }
   
  Addfeedback = (stateValue) => {
    this.setState(prevstate => ({
      [stateValue]:prevstate[stateValue]+1
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <>
        <FeedBackContainer>
          <Section title=" Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.Addfeedback} ></FeedbackOptions>
          </Section>
          <Section title=" Statistics">
          { (this.countTotalFeedback()) ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentageFeedback()}
            ></Statistics>) : (<Notification  message=" ☹️ There is no feedback" ></Notification>)}
           
          
            
          </Section>
        </FeedBackContainer>
      </>
    );
  }
}
