import React from 'react';

const Img = (props) => {
  const style = {
    marginBottom: "8px",
    width: "100%",
    border: "solid 1px #999999"
  };
  return (
    <img src={props.src} alt={props.alt} style={style} />
  );
};

export default Img;
