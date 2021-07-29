import React, { Component } from 'react';
import Marks from './components/Statistics/Marks'
import MarksHead from './components/Statistics/MarksHead';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    marks: {
      Good: 0,
      Neutral: 0,
      Bad: 0
    }
  };

  // не работает!

  changeMark = (markKey) => {
    this.setState(prevState => ({
      marks: Object.keys(prevState.marks).map(key => {

        return {
          ...prevState.marks,
          [markKey]: prevState.marks[markKey] + 1,
        };


      }),
    }))
  };


  //  this.setState(prevState => ({
  //    marks: Object.keys(prevState.marks).map(key => {

  //      if (key === markKey) {
  //        return {
  //          ...prevState.marks,
  //          [markKey]: prevState.marks[markKey] + 1,
  //        };
  //      }
  //      return prevState.marks;
  //    }),
  //  }))


  countTotalFeedback = () => { };
  countPositiveFeedbackPercentage = () => { };


  render() {
    const { marks } = this.state;


    return (
      <>
        <MarksHead />
        <Marks marks={marks} changeMark={this.changeMark} />
        <Statistics marks={marks} />
      </>
    );
  }
}

export default App;