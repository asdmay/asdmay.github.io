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
  const galleryItems = [
    {
      link: "https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_01.png"
    },
    {
      link: "https://www.instagram.com/p/CECOKcLDqge/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_02.png"
    },
    {
      link: "https://www.instagram.com/p/CGxRbMpDRAh/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_03.png"
    },
    {
      link: "https://www.instagram.com/p/CEmGTd0jkCD/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_04.png"
    },
    {
      link: "https://www.instagram.com/p/BykxbaTDLsa/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_05.png"
    },
    {
      link: "https://www.instagram.com/p/Bxpi11tHsjc/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_06.png"
    }
  ]

  return (
    <div className="App">
      <AboutMe />
      <Article articleItems={articleItems}>Article</Article>
      <Gallery galleryItems={galleryItems}/>
      <Article articleItems={lineStampItems}>LINE Stamp</Article>
      <SNS />
      <Footer />
    </div>
  );
};

export default App;
