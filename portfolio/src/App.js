import React, { Component } from 'react';
import Works from './Works';
import News from './News';
import Profile from './Profile';
import Links from './Links';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Works />
        <News />
        <Profile />
        <Links />
      </div>
    );
  }
}

export default App;
