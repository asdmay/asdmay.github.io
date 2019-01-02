import React, { Component } from 'react';
import Title from './Title';

class Links extends Component {
  render(){
    return (
      <section>
        <Title title="Links" />
        <ul>
          <li>
            <a
              className="Links-link"
              href="https://www.facebook.com/?locale=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
            >
              FaceBook
            </a>
          </li>
          <li>
            <a
              className="Links-link"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="Links-link"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
             Instagram 
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Links;
