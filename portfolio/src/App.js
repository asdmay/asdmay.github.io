import React, { Component } from 'react';
import './App.css';
import Works from './Works';
import News from './News';
import Profile from './Profile';
import Links from './Links';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Works />
        <News />
        <Profile />
        <Links />
      </section>
    );
  }
}

export default App;
