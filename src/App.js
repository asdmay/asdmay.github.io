import React from "react";
import MediaQuery from "react-responsive";

import AboutMePC from "./component/pc/AboutMe.js";
import ArticlePC from "./component/pc/Article.js";
import GalleryPC from "./component/pc/Gallery.js";
import SNSPC from "./component/pc/SNS.js";
import FooterPC from "./component/pc/Footer.js";

import AboutMeSP from "./component/sp/AboutMe.js";
import ArticleSP from "./component/sp/Article.js";
import GallerySP from "./component/sp/Gallery.js";
import SNSSP from "./component/sp/SNS.js";
import FooterSP from "./component/sp/Footer.js";

const App = () => {
  const articleItems = [
    {
      link:
        "https://techblog.yahoo.co.jp/advent-calendar-2018/design-endearing-vui/",
      image: "./img/vui.png",
      title: "愛される Voice User Interface への道のり",
      text:
        "プロトタイピングから得たVUIデザインのTipsについてまとめています。"
    }
  ];
  const lineStampItems = [
    {
      link: "https://store.line.me/stickershop/product/7154677/ja",
      image: "./img/omochiguma.png",
      title: "おもちぐまのスタンプ",
      text:
        "オリジナルキャラ「おもちぐま」のスタンプです。"
    },
    {
      link: "https://store.line.me/stickershop/product/1333908/ja",
      image: "./img/kuma_stamp.png",
      title: "KUMA'S STICKER ~1st IMPACT~",
      text: "はじめて作ったLINEスタンプです。"
    }
  ];
  const galleryItems = [
    {
      link:
        "https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_01.png"
    },
    {
      link:
        "https://www.instagram.com/p/CECOKcLDqge/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_02.png"
    },
    {
      link:
        "https://www.instagram.com/p/CGxRbMpDRAh/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_03.png"
    },
    {
      link:
        "https://www.instagram.com/p/CEmGTd0jkCD/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_04.png"
    },
    {
      link:
        "https://www.instagram.com/p/BykxbaTDLsa/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_05.png"
    },
    {
      link:
        "https://www.instagram.com/p/Bxpi11tHsjc/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_06.png"
    }
  ];

  return (
    <div className="App">
      <MediaQuery query="(min-width: 767px)">
        <AboutMePC />
        <ArticlePC articleItems={articleItems}>Article</ArticlePC>
        <GalleryPC galleryItems={galleryItems} />
        <ArticlePC articleItems={lineStampItems}>LINE Stamp</ArticlePC>
        <SNSPC />
        <FooterPC />
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <AboutMeSP />
        <ArticleSP articleItems={articleItems}>Article</ArticleSP>
        <GallerySP galleryItems={galleryItems} />
        <ArticleSP articleItems={lineStampItems}>LINE Stamp</ArticleSP>
        <SNSSP />
        <FooterSP />
      </MediaQuery>
    </div>
  );
};

export default App;
