import React from 'react';
import Text  from '../atom/Text.js';

const Footer= () => {
  const style = {
    padding: "40px 24px"
  };
  return (
    <footer style={style}>
      <Text>(c)1993-2019 Maaya Ashida</Text>
    </footer>
  );
}

export default Footer;
