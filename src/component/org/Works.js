import React from 'react';
import { SectionTitle } from '../atom/Title.js';
import Work from '../mls/Work.js';

const works = [
  {
    title: 'おもちぐまのスタンプ',
    text: 'オリジナルキャラのおもちぐまのスタンプ。まじかわいい。便利。',
    src: '../../img/omochiguma.png',
    art: 'おもちぐまのスタンプ',
    href: 'https://store.line.me/stickershop/product/7154677/ja'
  },
  {
    title: 'KUMA NO STAMP ~1st IMPACT~',
    text: 'ゆるく使えるLINEスタンプ',
    src: '../../img/kuma_stamp.png',
    art: 'KUMA NO STAMP',
    href: 'https://store.line.me/stickershop/product/1333908/ja?from=sticker'
  },
  {
    title: 'hoge',
    text: 'ゆるく使えるLINEスタンプ',
    src: '../../img/vui.png',
    art: 'hoge',
    href: 'https://store.line.me/stickershop/product/1333908/ja?from=sticker'
  }
];

function Works(props) {
  const style = {
    margin: "40px 0"
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
