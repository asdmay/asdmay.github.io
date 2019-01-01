import React, { Component } from 'react';
import Title from './Title';

const works = [
  {
    title: 'hoge',
    description: 'もにゃもにゃ',
    img: 'sample.png'
  },
  {
    title: 'fuga',
    description: 'もにゃもにゃ',
    img: 'sample.png'
  }
];

class Works extends Component {
  render() {
    return (
      <section>
        <Title title="Works" />
        <ul>
            <li>
              <h2>{works[0].title}</h2>
              <p>{works[0].description}</p>
            </li>
            <li>
              <h2>{works[1].title}</h2>
              <p>{works[1].description}</p>
            </li>
          }
        </ul>
      </section>
    );
  }
}

export default Works;
