import React from 'react';
import Description from '../mls/Description.js';
import Img from '../atom/Img.js';
const Work = (props) => {
  const style = {
  };
  return (
    <li style={style}>
      <a href={props.href}>
        <Img src={props.src} alt={props.alt} outline="solid 1px #999999" padding="8px"
/>
      </a>
      <Description title={props.title} text={props.text} />
    </li>
  );
};

export default Work;
