import React, { Component } from 'react';
import FeedbackOptions from '../Statistics/Marks';
import Statistics from '../Statistics/Statistics'


class Sections extends Component {
  
  render() {



    return (
      <>
       
        <FeedbackOptions marks={this.props.marks} changeMark={this.props.changeMark} />
        <Statistics marks={this.props.marks} countTotalFeedback={this.props.countTotalFeedback} countPositiveFeedbackPercentage={this.props.countPositiveFeedbackPercentage} />
      </>
    );
  }
}

export default Sections;