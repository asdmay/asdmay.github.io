import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  width: 320px;
`
const Title = styled.h1`
  font-size: 1.6rem;
  color: rgba(0,0,0,0.9);
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

const SNSImage = styled.img`
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