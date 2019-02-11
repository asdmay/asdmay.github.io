import React from 'react';
import textTitle from './component/atom/textTitle.js';

function Title(props) {
  return(
    <textTitle title={props.title} />
  );
}

export default Title;
