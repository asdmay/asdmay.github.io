import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  width: 320px;
`
const Title = styled.h1`
  font-size: 1.6rem;
  color: rgba(0,0,0,0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

const SNSImage = styled.img`
  padding: 8px;
  border-radius: 8px;
  box-shadow:  2px 2px 3px #DDE2E6, -2px -2px 3px #ffffff;
  @media (prefers-color-scheme: dark) {
    box-shadow:  2px 2px 3px #1E2529, -2px -2px 3px #354046;
  }
`

const SNSLink = styled.a`
`

const SNSList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`
const SNSListItem = styled.li`
  margin-right: 48px;
  :last-child {
    margin-right: 0;
  }
`

const SNS = () => {
    return (
        <Section>
            <Title>SNS</Title>
            <SNSList>
                <SNSListItem>
                    <SNSLink href={"https://twitter.com/pntgn09"}>
                    <SNSImage src={"./img/Twitter.png"} width={32} height={32} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://www.instagram.com/maaya_ashida/"}>
                    <SNSImage src={"./img/Instagram.png"} width={32} height={32} />
                    </SNSLink>
                </SNSListItem>
            </SNSList>
        </Section>
    )
}

export default SNS