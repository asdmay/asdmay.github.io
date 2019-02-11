import React, { Component } from 'react';
import Profile from './Profile';
import Works from './Works';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Works />
      </div>
    );
  }
}

export default App;
