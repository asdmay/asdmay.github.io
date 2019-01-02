import React, { Component } from 'react';
import Title from './Title';

class News extends Component {
  render(){
    return (
      <section>
        <Title title="News" />
        <ul>
            <li>
              <h2>newsだよ</h2>
              <time>2019.1.2</time>
            </li>
        </ul>
      </section>
    );
  }
}

export default News;
