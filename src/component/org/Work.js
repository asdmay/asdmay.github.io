import React from 'react';
import Description from '../mls/Description.js';
import Img from '../atom/Img.js';
const Work = (props) => {
  const style = {
  };
  const src = "./img/rect.png";
  const alt = "sample";
  return (
    <div style={style}>
      <Img src={src} alt={alt} />
      <Description title="work" text="なんかいい感じの作品" />

    </div>
  );
};

export default Work;
