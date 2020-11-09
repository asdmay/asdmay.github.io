import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
  padding: 64px 0;
  margin: 0 auto;
  width: 1024px;
`
const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,0,0.9);
  text-align: center;
  margin-bottom: 64px;
`

const ArticleItem = styled.article`
  margin-top: 32px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
const ArticleLink = styled.a`
  display: flex;
  width: 100%;
`

const ArticleText = styled.p`
  font-size: 1.3rem;
  color: rgba(0,0,0,0.9);
  overflow-wrap: break-word;
`
const ArticleTitle = styled.h1`
  font-size: 1.3rem;
  color: rgba(0,0,0,0.9);
  font-weight: bold;
`

const ArticleImage = styled.img`
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  padding: 16px 32px;
`

const Article = () => {
    return (
        <Section>
            <Title>Article</Title>
            <ArticleItem>
              <ArticleLink href={"https://techblog.yahoo.co.jp/"}>
                <ArticleImage src={"./img/vui.png"} width={375} height={272}/>
                <TextArea>
                  <ArticleTitle>ArticleTitle</ArticleTitle>
                  <ArticleText>hogehogehogehogehogehogegehogehogehogehogehogehogehogegehogehogehogehogehogehogehogegehoge</ArticleText>
                </TextArea>
              </ArticleLink>
            </ArticleItem>
            <ArticleItem>
            <ArticleLink href={"https://techblog.yahoo.co.jp/"}>
              <ArticleImage src={"./img/vui.png"} width={375} height={272}/>
              <TextArea>
                <ArticleTitle>ArticleTitle</ArticleTitle>
                <ArticleText>hogehogehogehogehogehogegehogehogehogehogehogehogehogegehogehogehogehogehogehogehogegehoge</ArticleText>
              </TextArea>
              </ArticleLink>
            </ArticleItem>
        </Section>
    )
}
export default Article