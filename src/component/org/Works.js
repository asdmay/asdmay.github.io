import React from 'react';
import { SectionTitle } from '../atom/Title.js';
import Work from '../mls/Work.js';

const works = [
  {
    title: '愛されるVUIへの道のり',
    text: '魅力的な音声UIについて書いたTechBlogの記事です',
    src: './img/vui.png',
    art: '愛されるVUIへの道のり',
    href: 'https://techblog.yahoo.co.jp/advent-calendar-2018/design-endearing-vui/'
  },
  {
    title: 'おもちぐまのLINEスタンプ',
    text: 'おもちみたいなくま「おもちぐま」がLINE上の会話を弾ませてくれます',
    src: '/img/omochiguma.png',
    art: 'おもちぐまのスタンプ',
    href: 'https://store.line.me/stickershop/product/7154677/ja'
  },
  {
    title: 'KUMA NO STAMP ~1st IMPACT~',
    text: 'お茶を濁したい時に使える便利なLINEスタンプです',
    src: './img/kuma_stamp.png',
    art: 'KUMA NO STAMP',
    href: 'https://store.line.me/stickershop/product/1333908/ja?from=sticker'
  }
];

function Works(props) {
  const style = {
    padding: "40px 0",
    backgroundColor: "#eeeeee"
  };
  return (
    <section style={style}>
      <SectionTitle>Works</SectionTitle>
      <ul>
        {
          works.map((works, index) =>
          <Work key={toString(index)}{...works}/>
          )
        }
      </ul>
    </section>
  );
}

export default Works;
