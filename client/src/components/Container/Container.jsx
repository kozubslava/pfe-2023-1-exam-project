import React from 'react';
import stylesCSS from './Container.module.sass';

const Container = ({styles, children, bgColor}) => {
  
  let background = ''
  if (bgColor === 'lightgrey') {
    background = 'linear-gradient(271.19deg, rgba(68, 51, 241, 0.04) 0%, rgba(98, 142, 255, 0.04) 100%)'
  }else if (bgColor === 'lightgreen'){
    background = 'linear-gradient(271.19deg, rgba(48, 125, 246, .05) 0%, rgba(20, 187, 191, .05) 100%)'
  }
  
  return (
    <div  style={{ backgroundImage: background }}> 
      <div className={stylesCSS.container} style={styles}>
        {children}
      </div>
    </div>
  );
}

export default Container;

