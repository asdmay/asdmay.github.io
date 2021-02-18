import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from '../DeviceSize'

const Section = styled.section`
  margin: 0 auto;
  @media ${DeviceSize.sp} {
    padding: 32px 0;
    width: 320px;
  }
  @media ${DeviceSize.pc} {
    padding: 64px 0;
    width: 1024px;
  }
`
const Title = styled.h1`
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  @media ${DeviceSize.sp} {
    margin-bottom: 16px;
    font-size: 1.6rem;
  }
  @media ${DeviceSize.pc} {
    margin-bottom: 64px;
    font-size: 2.5rem;
  }
`

const SNSImage = styled.img`
  @media ${DeviceSize.sp} {
    padding: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 3px #DDE2E6, -2px -2px 3px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 2px 2px 3px #1E2529, -2px -2px 3px #354046;
    }
  }
  @media ${DeviceSize.pc} {
    padding: 16px;
    border-radius: 16px;
    box-shadow: 8px 8px 10px #DDE2E6, -8px -8px 10px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow : 8px 8px 10px #1E2529, -8px -8px 10px #354046;
    }
  }
`

const SNSLink = styled.a`
  width: 100%;
  height: 100%;
`

const SNSList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`
const SNSListItem = styled.li`
  @media ${DeviceSize.sp} {
    margin-right: 48px;
  }
  @media ${DeviceSize.pc} {
    margin-right: 64px;
  }
  :last-child {
    margin-right: 0;
  }
`

const SNS = () => {
  const isDeviceSizePC = window.matchMedia(`${DeviceSize.pc}`).matches
  const imageWidth = isDeviceSizePC ? 64 : 32;
  const imageHeight = isDeviceSizePC ? 64 : 32;
    return (
        <Section >
            <Title>Follow Me</Title>
            <SNSList>
                <SNSListItem>
                    <SNSLink href={"https://twitter.com/pntgn09"}>
                    <SNSImage src={"./img/Twitter.png"} width={imageWidth} height={imageHeight} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://www.instagram.com/maaya_ashida/"}>
                    <SNSImage src={"./img/Instagram.png"} width={imageWidth} height={imageHeight} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://note.com/mashida"}>
                    <SNSImage src={"./img/Note.png"} width={imageWidth} height={imageHeight} />
                    </SNSLink>
                </SNSListItem>
            </SNSList>
        </Section>
    )
}

export default SNS