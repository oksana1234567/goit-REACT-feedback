import React, { Component } from 'react';
// import FeedbackOptions from './components/Statistics/Marks'
import MarksHead from './components/Statistics/MarksHead';
// import Statistics from './components/Statistics/Statistics';
import Sections from './components/Sections/Sections'

class App extends Component {
  state = {
    marks: {
      Good: 0,
      Neutral: 0,
      Bad: 0
    }
  };


  changeMark = (markKey) => {
    const { marks } = this.state;
  this.setState({marks: {...marks, [markKey]:marks[markKey] + 1}})
  };

 
  countTotalFeedback = () => {
    const { marks } = this.state;
    let totalFeedback = 0;
    Object.values(marks).map(value => (
      totalFeedback += value
    ))

    return totalFeedback;
  };

  
  countPositiveFeedbackPercentage = () => {
   
    const { marks } = this.state;
    let goodFeedbackShare = 0;

    goodFeedbackShare = marks.Good / this.countTotalFeedback() * 100;
    let normalizedGoodFeedbackShare = Math.round(goodFeedbackShare);
    return normalizedGoodFeedbackShare;
    
  };


  render() {
   const { marks } = this.state;


    return (
      <>
        <MarksHead />
        <Sections marks={marks} changeMark={this.changeMark} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}/>
        {/* <FeedbackOptions marks={marks} changeMark={this.changeMark} />
        <Statistics marks={marks} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} /> */}
      </>
    );
  }
}

export default App;