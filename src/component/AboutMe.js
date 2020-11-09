import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  padding: 64px 0 0;
  margin: 0 auto;
  width: 1024px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,0,0.9);
`

const Image = styled.img`
  border-radius: 260px;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  max-width: 50%;
  padding-left: 32px;
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
    <Section>
      <Image src={"./img/top.png"} width={503} height={503}/>
      <TextArea>
      <Title>MAAYA ASHIDA</Title>
      <BoldText>“ I like to solve problems by designing. “</BoldText>
      <Text>I’m MAAYA.<br></br>
    When I was a student, I majored in User Interaction and Information Compilation.<br></br>
    After that, I joined Yahoo! JAPAN and became a UX designer.<br></br>
    I design UI/ UX to make the future better.</Text>
      </TextArea>
    </Section>
  )
}

export default AboutMe