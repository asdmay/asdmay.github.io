import React from 'react';
import Description from '../mls/Description.js';
import Img from '../atom/Img.js';
const Work = (props) => {
  const style = {
  };
  const src = "https://2.bp.blogspot.com/-7h_4HNh8y9w/WFc-IyWKjoI/AAAAAAABAeE/1qZTn-aG0KIlG4f0FLvur_U40uvZVerYgCLcB/s800/heart_inuku_woman.png";
  const alt = "sample";
  return (
    <div style={style}>
      <Img src={src} alt={alt} />
      <Description title="work" text="なんかいい感じの作品" />

    </div>
  );
};

export default Work;
