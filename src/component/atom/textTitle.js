import React from 'react';

const Title = (props) => {
  const style = {
    color: "#000000",
    fontWeight: "bold",
    fontSize: props.fontSize,
    fontFamily: 'roboto',
    textAlign: props.textAlign
  };
  return ( 
    <h1 style={style}>{props.children}</h1>
  ); 
};
 
export const DescriptionTitle = (props) => {
  const style = {
    color: "#000000",
    fontWeight: "bold",
    fontSize: '20px',
    fontFamily: 'roboto',
    textAlign: 'left' 
  };
  return ( 
    <h2 style={style}>{props.children}</h2>
  ); 
};

export const PageTitle= (props) => (
  <Title fontSize="14px" textAlign="left">{props.children}</Title>
);

export const SectionTitle= (props) => (
  <Title fontSize="40px" textAlign="center">{props.children}</Title>
);
