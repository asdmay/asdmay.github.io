import React from 'react';

const Img = (props) => {
  const style = {
    marginBottom: "8px",
    padding: props.padding,
    maxWidth: "100%",
    outline: props.outline,
    outlineOffset: "-8px",
  };
  return (
      <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
