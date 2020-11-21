import React from "react";
import Footer from "./component/Footer.js";
import AboutMe from "./component/AboutMe.js";
import Article from "./component/Article.js";
import Gallery from "./component/Gallery.js";
import SNS from "./component/SNS.js";

const App = () => {
  const articleItems = [
    {
      link:
        "https://techblog.yahoo.co.jp/advent-calendar-2018/design-endearing-vui/",
      image: "./img/vui.png",
      title: "How to design for Endearing Voice User Interface",
      text:
        " I tried to make VUI prototype. If you read this article, you can learn tips of VUI design."
    }
  ];
  const lineStampItems = [
    {
      link: "https://store.line.me/stickershop/product/7154677/ja",
      image: "./img/omochiguma.png",
      title: "Omochiguma's Sticker",
      text: "Omochiguma is a bear like a rice cake. Useful Japanese phrases in our daily life."
    },
    {
      link: "https://store.line.me/stickershop/product/1333908/ja",
      image: "./img/kuma_stamp.png",
      title: "KUMA'S STICKER ~1st IMPACT~",
      text: "This is the first LINE Stamp I made."
    }
  ];

  return (
    <div className="App">
      <AboutMe />
      <Article articleItems={articleItems}>Article</Article>
      <Gallery />
      <Article articleItems={lineStampItems}>LINE Stamp</Article>
      <SNS />
      <Footer />
    </div>
  );
};

export default App;
