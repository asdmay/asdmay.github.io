import React from 'react';

const Title = () => {
  const style = {
    //padding: props.padding,
    color: "#000000",
    fontWeight: "bold",
    //fontSize: props.fontSize,
    fontFamily: 'roboto',
    //textAlign: props.textAlign
  };
  return (
    <h1 style={style}>props.children</h1>
  );
};

export const DescriptionTitle = () => {
  const style = {
    color: "#000000",
    fontWeight: "bold",
    fontSize: '20px',
    fontFamily: 'roboto',
    textAlign: 'left'
  };
  return (
    <h2 style={style}>props.children</h2>
  );
};

export const PageTitle= () => (
  <Title padding="16px 12px" fontSize="14px" textAlign="left">props.children</Title>
);

export const SectionTitle= () => (
  <Title padding="0 0 40px 0" fontSize="40px" textAlign="center">props.children</Title>
);
