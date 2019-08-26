import React from 'react';
import Text from '../atom/Text.js';
import { DescriptionTitle } from '../atom/Title.js';

const Description = (props) => {
  const style = {
    paddingBottom: "24px",
    paddingLeft: "16px",
    paddingRight: "16px"
  };
  return (
    <div style={style}>
      <DescriptionTitle>{props.title}</DescriptionTitle>
      <Text>{props.text}</Text>
    </div>
  );
};

export default Description;
