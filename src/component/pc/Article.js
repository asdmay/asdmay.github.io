import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section`
  padding: 64px 64px 0;
  margin: 0 auto;
  width: 1024px;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 64px;
`;
const ArticleList = styled.ul``;

const ArticleListItem = styled.li`
  margin-top: 32px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
`;
const ArticleLink = styled.a`
  display: flex;
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
  min-width: 50%;
  padding: 16px 32px;
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
              <ArticleImage src={item.image} width={375} height={272} />
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
