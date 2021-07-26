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


  changeMark = (markKey) => {
    this.setState(prevState => ({
      marks: Object.keys(prevState.marks).map(key => {

        if (key === markKey) {
          return {

          };
        }

        return [key];
      }),
    }))
  };



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