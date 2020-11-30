import React from 'react';
import styled from 'styled-components'

const FooterArea = styled.footer`
  font-size: 0.7rem;
  padding: 16px;
  margin: 0 auto;
  width: 320px;
  text-align: center;
`

const Footer= () => {
  return (
    <FooterArea>
      (c)1993-2020 MAAYA ASHIDA
    </FooterArea>
  )
}

export default Footer;
