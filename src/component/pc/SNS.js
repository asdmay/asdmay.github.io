import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 64px 0;
  margin: 0 auto;
  width: 1024px;
`
const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
  margin-bottom: 64px;
`

const SNSImage = styled.img`
  padding: 16px;
  border-radius: 16px;
  box-shadow:  8px 8px 10px #DDE2E6, -8px -8px 10px #ffffff;
  @media (prefers-color-scheme: dark) {
    box-shadow:  8px 8px 10px #1E2529, -8px -8px 10px #354046;
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
  margin-right: 64px;
  :last-child {
    margin-right: 0;
  }
`

const SNS = () => {
    return (
        <Section>
            <Title>Follow Me</Title>
            <SNSList>
                <SNSListItem>
                    <SNSLink href={"https://twitter.com/pntgn09"}>
                    <SNSImage src={"./img/Twitter.png"} width={64} height={64} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://www.instagram.com/maaya_ashida/"}>
                    <SNSImage src={"./img/Instagram.png"} width={64} height={64} />
                    </SNSLink>
                </SNSListItem>
            </SNSList>
        </Section>
    )
}

export default SNS