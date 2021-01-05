import React from 'react';
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 64px 0 0;
  margin: 0 auto;
  width: 1024px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,0,0.9);
`

const Image = styled.img`
  border-radius: 64px;
  mix-blend-mode: multiply;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  padding-left: 64px;
`

const Text = styled.p`
  font-size: 1.3rem;
  color: rgba(0,0,0,0.9);
`

const AboutMe = () => {
  return (
    <Header>
      <Image src={"./img/top.jpg"} width={300} height={300}/>
      <TextArea>
        <Title>MAAYA ASHIDA</Title>
        <Text> UI/UX designer in Yahoo Japan Corporation.<br></br>
     I majored in Interaction Design and Information Compilation at Kansai University.</Text>
      </TextArea>
    </Header>
  )
}

export default AboutMe