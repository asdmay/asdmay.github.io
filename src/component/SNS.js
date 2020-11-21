import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 64px 0;
  margin: 0 auto;
  width: 1024px;
`
const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,0,0.9);
  text-align: center;
  margin-bottom: 64px;
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
  margin-right: 64px;
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
                    <SNSImage src={"./img/Twitter.png"} width={64} height={64} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://twitter.com/pntgn09"}>
                    <SNSImage src={"./img/Twitter.png"} width={64} height={64} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem>
                    <SNSLink href={"https://twitter.com/pntgn09"}>
                    <SNSImage src={"./img/Twitter.png"} width={64} height={64} />
                    </SNSLink>
                </SNSListItem>
            </SNSList>
        </Section>
    )
}

export default SNS