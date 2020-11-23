import React from 'react';
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 16px 0 0;
  margin: 0 auto;
  width: 320px;
  flex-flow: column;
`

const Title = styled.h1`
  font-size: 2.0rem;
  color: rgba(0,0,0,0.9);
  text-align: center;
`

const Image = styled.img`
  border-radius: 260px;
  margin: 0 auto 8px;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  `

const Text = styled.p`
  font-size: 1.3rem;
  color: rgba(0,0,0,0.9);
`

const BoldText = styled(Text)`
font-weight: bold;
`

const AboutMe = () => {
  return (
    <Header>
      <Image src={"./img/top.jpg"} width={200} height={200}/>
      <TextArea>
      <Title>MAAYA ASHIDA</Title>
      <BoldText>“ I like to solve problems by designing. “</BoldText>
      <Text>I’m MAAYA.<br></br>
    When I was a student, I majored in User Interaction and Information Compilation.<br></br>
    After that, I joined Yahoo! JAPAN and became a UX designer.<br></br>
    I design UI/ UX to make the future better.</Text>
      </TextArea>
    </Header>
  )
}

export default AboutMe