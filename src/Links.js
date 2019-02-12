import React from 'react';
import { DescriptionTitle } from './component/atom/Title.js';
function LinkList(props) {
  const links = props.links;
  const style = {
    color: "#000000",
    fontFamily: "roboto",
    listStyle: "none"
  };
  const listItems = links.map((links) => 
    <li className="LinkList-item" key={links.key} style={style}>・<a target="_blank" rel="noopener noreferrer" href={links.url} style={style}>{links.title}</a></li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const links = [
  {id: 1, title: "Facebook", url: "https://www.facebook.com/?locale=ja_JP"},
  {id: 2, title: "Twitter", url: "https://twitter.com/"} ,
  {id: 3, title: "Instagram", url: "https://www.instagram.com"}
];

export const Links = (props) => {
  const style = {
    marginBottom: "20px",
    marginLeft: "24px",
    listStyle: "none"
  };
  return (
    <div style ={style}>
      <DescriptionTitle>SNS</DescriptionTitle>
      <LinkList links={links} /> 
    </div>
  )
};

const lists = [
  {id: 1, content: "html, css, javascript"},
  {id: 2, content: "Sketch, Prott"},
  {id: 3, content: "Illustrator, Photoshop"}
];

const TextList = (props) => {
  const style = {
    color: "#000000",
    fontFamily: "roboto",
    listStyle: "none"
  };
  const listItems = lists.map((lists) =>
    <li key={lists.key} style={style}>・{lists.content}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
};


export const Lists = (props) => {
  const style = {
    marginBottom: "20px",
    marginLeft: "24px",
    listStyle: "none"
  };
  return (
    <div style ={style}>
      <DescriptionTitle>SKILL</DescriptionTitle>
      <TextList lists={lists} /> 
    </div>
  )
};

