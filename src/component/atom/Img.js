import React from 'react';

const Img = (props) => {
  const style = {
    margin: "0 12px 8px 12px",
    width: "100%",
    maxWidth: "350px",
    border: "solid 1px #999999"
  };
  return (
    <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
