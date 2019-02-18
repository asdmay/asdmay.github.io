import React from 'react';
import Description from '../mls/Description.js';
import Img from '../atom/Img.js';
const Work = (props) => {
  const style = {
  };
  return (
    <div style={style}>
      <Img src={props.src} alt={props.alt} border="solid 1px #999999"
/>
      <Description title={props.title} text={props.text} />

    </div>
  );
};

export default Work;
