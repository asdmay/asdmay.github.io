import React from 'react';
import { SectionTitle } from './component/atom/Title.js';
import Work from './component/org/Work.js';

const works = [
  {
    title: 'line stamp',
    text: 'ゆるく使えるLINEスタンプ',
    src: './img/rect.png',
    art: 'いけてるサムネ'
  },
  {
    title: 'line stamp2',
    text: 'ゆるく使えるLINEスタンプ',
    src: './img/rect.png',
    art: 'いけてるサムネ'
  }
];

function Works(props) {
  const style = {
    margin: "40px 0"
  };
  return (
    <section style={style}>
      <SectionTitle>Works</SectionTitle>
      <Work title={works[0].title} text={works[0].text} src={works[0].src} alt={works[0].alt} />
      <Work title={works[1].title} text={works[1].text} src={works[1].src} alt={works[1].alt} />
    </section>
  );
}

export default Works;
