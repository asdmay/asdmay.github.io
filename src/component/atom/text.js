import React from 'react';

const Text = (props) => {
  const style = {
    color: "#000000",
    fontSize: "16px",
    fontFamily: 'roboto'
  };
  return (
    <p style={style}>{props.children}</p>
  );
};

export default Text;
