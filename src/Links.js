import React from 'react';
import { DescriptionTitle } from './component/atom/Title.js';
function LinkList(props) {
  const links = props.links;
  const listItems = links.map((links) => 
    <li className="LinkList-item" key={links.key}><a target="_blank" rel="noopener noreferrer" href={links.url}>{links.title}</a></li>
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

function Links(props){
  const style = {
    marginBottom: "20px",
    marginLeft: "24px"
  };
  return (
    <div style ={style}>
      <DescriptionTitle>SNS</DescriptionTitle>
      <LinkList links={links} /> 
    </div>
  )
};

export default Links;
