import React from 'react';

const Img = (props) => {
  const style = {
    marginBottom: "8px",
    width: "100%",
    border: props.border
  };
  return (
    <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
