import React from 'react';
import styled from 'styled-components'

const FooterArea = styled.footer`
  padding: 32px;
  margin: 0 auto;
  width: 1024px;
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
