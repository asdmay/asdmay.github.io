import React, { Component } from 'react';
import Footer from './component/Footer.js';
import AboutMe from "./component/AboutMe.js";
import Article from "./component/Article.js";
import Gallery from "./component/Gallery.js";
import SNS from "./component/SNS.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe />
        <Article />
        <Gallery />
        <Article />
        <SNS />
        <Footer />
      </div>
    );
  }
}

export default App;
