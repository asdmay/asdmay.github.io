import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from '../DeviceSize';

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media ${DeviceSize.sp} {
    padding: 32px 0 0;
    width: 320px;
    flex-flow: column;
  }
  @media ${DeviceSize.pc} {
    padding: 64px 0 0;
    width: 1024px;
    flex-flow: row;
  }
`

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  @media ${DeviceSize.sp} {
    font-size: 1.6rem;
    text-align: center;
  }
  @media ${DeviceSize.pc} {
    font-size: 2.5rem;
    text-align: left;
  }
`

const Image = styled.img`
  @media ${DeviceSize.sp} {
    margin: 0 auto 8px;
    border-radius: 32px;
  }
  @media ${DeviceSize.pc} {
    margin: 0;
    border-radius: 64px;
  }
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${DeviceSize.sp} {
    max-width: 100%;
  }
  @media ${DeviceSize.pc} {
    max-width: 50%;
    padding-left: 64px;
  }
`

const Text = styled.p`
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  @media ${DeviceSize.sp} {
    font-size: 0.9rem;
  }
  @media ${DeviceSize.pc} {
    font-size: 1.3rem;
  }
`

const AboutMe = () => {
  const isPC = window.matchMedia(`${DeviceSize.pc}`).matches
  const AboutMeImageWidth = isPC ? 300 : 160;
  const AboutMeImageHeight = isPC ? 300 : 160;
  return (
    <Header>
      <Image src={"./img/top.jpg"} width={AboutMeImageWidth} height={AboutMeImageHeight}/>
      <TextArea>
        <Title>MAAYA ASHIDA</Title>
        <Text> UI/UX designer in Yahoo Japan Corporation.<br></br>
     I majored in Interaction Design and Information Compilation at Kansai University.</Text>
      </TextArea>
    </Header>
  )
}

export default AboutMe