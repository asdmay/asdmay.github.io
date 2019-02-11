import React from 'react';
import Text from '../atom/text.js';
import { DescriptionTitle } from '../atom/Title.js';

const Description = (props) => {
  const style = {
    marginBottom: "20px",
    marginLeft: "24px"
  };
  return (
    <div style={style}>
      <DescriptionTitle>{props.title}</DescriptionTitle>
      <Text>{props.text}</Text>
    </div>
  );
};

export default Description;
