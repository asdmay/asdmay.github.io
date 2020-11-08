import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  padding: 48px 0;
  margin: 0 auto;
  width: 1024px;
`

const Title = styled.h1`
  font-size: 4.0rem;
  color: rgba(0,0,0,0.9);
`

const Image = styled.img`
`

const TextArea = styled.div`
  max-width: 50%;
  padding-left: 16px;
`

const Text = styled.p`
  font-size: 1.6rem;
  color: rgba(0,0,0,0.9);
`

const BoldText = styled(Text)`
font-weight: bold;
`

const AboutMe = () =>{
  return (
    <Section>
      <Image src={"./img/top.png"} width={503} height={503}/>
      <TextArea>
      <Title>MAAYA ASHIDA</Title>
      <BoldText>“ I like to solve problems by designing. “</BoldText>
      <Text>I’m MAAYA.
    When I was a student, I majored in User Interaction and Information Compilation.
    After that, I joined Yahoo! JAPAN and became a UX designer.
    I design UI/ UX to make the future better.</Text>
      </TextArea>
    </Section>
  )
}




export default AboutMe