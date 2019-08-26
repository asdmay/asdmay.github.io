import React from 'react';

const Img = (props) => {
  const style = {
    padding: props.padding,
    maxWidth: "100%",
    outline: props.outline,
    outlineOffset: "-16px",
  };
  return (
      <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
