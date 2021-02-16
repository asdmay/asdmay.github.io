import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Section = styled.section`
  margin: 0 auto;
  padding-top: ${props => props.pc && 64}px;
  padding-right:${props => props.pc && 0};
  padding-bottom:${props => props.pc && 64}px;
  padding-left:${props => props.pc && 0};
  width: ${props => props.pc ? 1024 : 320}px;
`
const Title = styled.h1`
  font-size: ${props => props.pc ? 2.5 : 1.6}rem;
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
  margin-top: ${props => !props.pc && 32}px;
  margin-bottom: ${props => props.pc ? 64 : 16}px;
`

const SNSImage = styled.img`
  padding: ${props => props.pc ? 16 : 8}px;
  border-radius: ${props => props.pc ? 16 : 8}px;
  box-shadow: ${props => props.pc ? 8 : 2}px ${props => props.pc ? 8 : 2}px ${props => props.pc ? 10 : 3}px #DDE2E6,
  ${props => props.pc ? -8 : -2}px ${props => props.pc ? -8 : -2}px ${props => props.pc ? 10 : 3}px #ffffff;
  @media (prefers-color-scheme: dark) {
  box-shadow: ${props => props.pc ? 8 : 2}px ${props => props.pc ? 8 : 2}px ${props => props.pc ? 10 : 3}px #1E2529,
  ${props => props.pc ? -8 : -2}px ${props => props.pc ? -8 : -2}px ${props => props.pc ? 10 : 3}px #354046;
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
  margin-right: ${props => props.pc ? 64 : 48}px;
  :last-child {
    margin-right: 0;
  }
`

const SNS = props => {
  console.log(props.pc)
  const snsImageLength = props.pc ? 64 : 32;
    return (
        <Section pc={props.pc} >
            <Title pc={props.pc}>Follow Me</Title>
            <SNSList pc={props.pc}>
                <SNSListItem pc={props.pc}>
                    <SNSLink pc={props.pc} href={"https://twitter.com/pntgn09"}>
                    <SNSImage pc={props.pc} src={"./img/Twitter.png"} width={snsImageLength} height={snsImageLength} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem pc={props.pc}>
                    <SNSLink pc={props.pc} href={"https://www.instagram.com/maaya_ashida/"}>
                    <SNSImage pc={props.pc} src={"./img/Instagram.png"} width={snsImageLength} height={snsImageLength} />
                    </SNSLink>
                </SNSListItem>
                <SNSListItem pc={props.pc}>
                    <SNSLink pc={props.pc} href={"https://note.com/mashida"}>
                    <SNSImage pc={props.pc} src={"./img/Note.png"} width={snsImageLength} height={snsImageLength} />
                    </SNSLink>
                </SNSListItem>
            </SNSList>
        </Section>
    )
}

SNS.propTypes = {
  pc: PropTypes.boolean,
};

export default SNS