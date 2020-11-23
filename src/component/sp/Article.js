import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section`
  margin: 0 auto;
  width: 320px;
`;
const Title = styled.h1`
  font-size: 2.0rem;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 16px;
`;
const ArticleList = styled.ul``;

const ArticleListItem = styled.li`
  margin-top: 16px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-flow: column;
`;
const ArticleLink = styled.a`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const ArticleText = styled.p`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.9);
  overflow-wrap: break-word;
`;
const ArticleTitle = styled.h2`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
`;

const ArticleImage = styled.img``;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
`;

const Article = props => {
  if (props.articleItems.length === 0) {
    return null;
  }
  return (
    <Section>
      <Title>{props.children}</Title>
      <ArticleList>
        {props.articleItems.map((item, number) => (
          <ArticleListItem number={number} key={number.toString()}>
            <ArticleLink href={item.link}>
              <ArticleImage src={item.image} width={320} height={232} />
              <TextArea>
                <ArticleTitle>{item.title}</ArticleTitle>
                <ArticleText>{item.text}</ArticleText>
              </TextArea>
            </ArticleLink>
          </ArticleListItem>
        ))}
      </ArticleList>
    </Section>
  );
};

Article.propTypes = {
  articleItems: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

export default Article;
