import React from 'react';
import Title from './Title';

function LinkList(props) {
  const links = props.links;
  const listItems = links.map((links) => 
    <li className="LiskList-item" key={links.key}><a target="_blank" rel="noopener noreferrer" href={links.url}>{(links.title)+"だよ"}</a></li>
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
  return (
    <section>
      <Title title="Links" />
      <LinkList links={links} /> 
    </section>
  )
};

export default Links;
