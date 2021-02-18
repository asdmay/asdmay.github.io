import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DeviceSize } from '../DeviceSize'

const Section = styled.section`
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  @media ${DeviceSize.sp}{
    padding: 32px 0 0;
    width: 320px;
  }
  @media ${DeviceSize.pc}{
    padding: 64px 64px 0;
    width: 1024px;
  }
`;

const Title = styled.h1`
  text-align: center;
  @media ${DeviceSize.sp}{
    margin-bottom: 16px;
    font-size: 1.6rem;
  }
  @media ${DeviceSize.pc}{
    margin-top: 0;
    margin-bottom: 64px;
    font-size: 2.5rem;
  }
`;
const ArticleList = styled.ul``;

const ArticleListItem = styled.li`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  @media ${DeviceSize.sp}{
    margin-top: 16px;
    border-radius: 16px;
    box-shadow: 2px 2px 3px #DDE2E6, -2px -2px 3px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 2px 2px 3px #1E2529, -2px -2px 3px #354046;
    }
  }
  @media ${DeviceSize.pc}{
    margin-top: 32px;
    border-radius: 16px;
    box-shadow: 8px 8px 10px #DDE2E6, -8px -8px 10px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 8px 8px 10px #1E2529, -8px -8px 10px #354046;
    }
  }
`;

const ArticleLink = styled.a`
  display: flex;
  width: 100%;
`;

const ArticleText = styled.p`
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  overflow-wrap: break-word;
  @media ${DeviceSize.sp}{
    font-size: 0.9rem;
  }
  @media ${DeviceSize.pc}{
  font-size: 1.3rem;
  }
`;
const ArticleTitle = styled.h2`
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  font-weight: bold;
  @media ${DeviceSize.sp}{
    margin-bottom: 4px;
    font-size: 1.0rem;
  }
  @media ${DeviceSize.pc}{
    margin-bottom: 8px;
    font-size: 1.3rem;
  }
`;

const ArticleImage = styled.img`
  @media ${DeviceSize.sp}{
    margin: 12px;
    padding: 0;
    border-radius: 8px;
  }
  @media ${DeviceSize.pc}{
    margin: 0;
    padding: 16px;
    border-radius: 24px;
  }

`;
const TextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media ${DeviceSize.sp}{
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
  }
  @media ${DeviceSize.pc}{
    min-width: 50%;
    padding: 16px;
  }
`;

const Article = props => {
  if (props.articleItems.length === 0) {
    return null;
  }
  const isDeviceSizePC = window.matchMedia(`${DeviceSize.pc}`).matches
  const imageWidth = isDeviceSizePC ? 375 : 120;
  const imageHeight = isDeviceSizePC ? 272 : 87;
  return (
    <Section>
      <Title>{props.children}</Title>
      <ArticleList>
        {props.articleItems.map((item, number) => (
          <ArticleListItem number={number} key={number.toString()}>
            <ArticleLink href={item.link}>
              <ArticleImage src={item.image} width={imageWidth} height={imageHeight} />
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
