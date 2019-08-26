import React from 'react';
import Description from '../mls/Description.js';
import Img from '../atom/Img.js';
const Work = (props) => {
  const style = {
    listStyleType : "none",
    textDecoration: "none",
    marginBottom: "48px",
    marginLeft: "16px",
    marginRight: "16px",
    outline:"solid 1px #cccccc"

  };
  const linkstyle = {
    listStyleType : "none",
    textDecoration: "none",

  };
  return (
    <li style={style}>
      <a href={props.href} style={linkstyle}>
        <Img src={props.src} alt={props.alt} outline="solid 1px #cccccc" padding="16px"
/>
        <Description title={props.title} text={props.text} />
      </a>
    </li>
  );
};

export default Work;
