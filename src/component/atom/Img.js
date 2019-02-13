import React from 'react';

const Img = (props) => {
  const style = {
    width: "100%"
  };
  return (
    <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
