import React from 'react';
import styled from 'styled-components'
import { DeviceSize } from '../DeviceSize'


const FooterArea = styled.footer`
  margin: 0 auto;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
  @media ${DeviceSize.sp} {
    padding: 16px;
    width: 320px;
    font-size: 0.7rem;
  }
  @media ${DeviceSize.pc} {
    padding: 32px;
    width: 1024px;
    font-size: 1.0rem;
  }
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`

const Footer= () => {
  return (
    <FooterArea>
      (c)1993-2021 MAAYA ASHIDA
    </FooterArea>
  )
}

export default Footer;
