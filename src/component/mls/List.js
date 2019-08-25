import React from 'react';
import { DescriptionTitle } from '../atom/Title.js';

function LinkList(props) {
  const links = props.links;
  const style = {
    color: "#000000",
    fontFamily: "roboto",
    listStyle: "none"
  };
  const listItems = links.map((links, index) => 
    <li className="LinkList-item" key={toString(index)} style={style}>・<a target="_blank" rel="noopener noreferrer" href={links.url} style={style}>{links.title}</a></li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const links = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/mashida1209"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/pntgn09"
  } ,
  {
    title: "Instagram",
    url: "https://www.instagram.com/maaya_ashida/"
  }
];

export const Sns = (props) => {
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
  {
    content: "html, css, javascript"
  },
  {
    content: "Sketch, Prott"
  },
  {
    content: "Illustrator, Photoshop"
  }
];

const TextList = (props) => {
  const style = {
    color: "#000000",
    fontFamily: "roboto",
    listStyle: "none"
  };
  const listItems = lists.map((lists,index) =>
    <li key={toString(index)} style={style}>・{lists.content}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
};


export const Skill = (props) => {
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

