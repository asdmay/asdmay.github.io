import React, { Component } from 'react';
import Profile from './component/org/Profile.js';
import Works from './component/org/Works';
import Img from './component/atom/Img.js';
import Header from './component/mls/Header.js';
import Footer from './component/mls/Footer.js';
import AboutMe from "./component/AboutMe.js";
import Article from "./component/Article.js";
import Gallery from "./component/Gallery.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe />
        <Article />
        <Gallery />
        <Article />
        <Header />
        <Img src={"./img/top.png"} alt={"top"}/>
        <Profile />
        <Works />
        <Footer />
      </div>
    );
  }
}

export default App;
