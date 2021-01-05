import React from 'react';
import styled from 'styled-components'

const FooterArea = styled.footer`
  padding: 32px;
  margin: 0 auto;
  width: 1024px;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`

const Footer= () => {
  return (
    <FooterArea>
      (c)1993-2020 MAAYA ASHIDA
    </FooterArea>
  )
}

export default Footer;
