import React from 'react';
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 32px 0 0;
  margin: 0 auto;
  width: 320px;
  flex-flow: column;
`

const Title = styled.h1`
  font-size: 1.6rem;
  color: rgba(0,0,0,0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
`

const Image = styled.img`
  border-radius: 32px;
  margin: 0 auto 8px;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  `

const Text = styled.p`
  font-size: 0.9rem;
  color: rgba(0,0,0,0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`

const AboutMe = () => {
  return (
    <Header>
      <Image src={"./img/top.jpg"} width={160} height={160}/>
      <TextArea>
        <Title>MAAYA ASHIDA</Title>
        <Text> UI/UX designer in Yahoo Japan Corporation.<br></br>
     I majored in Interaction Design and Information Compilation at Kansai University.</Text>
      </TextArea>
    </Header>
  )
}

export default AboutMe