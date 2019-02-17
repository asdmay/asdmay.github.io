import React, { Component } from 'react';
import Profile from './Profile';
import Works from './Works';
import Img from './component/atom/Img.js';
import Header from './component/mls/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Img src={"./img/top.png"} alt={"top"}/>
        <Profile />
        <Works />
      </div>
    );
  }
}

export default App;
