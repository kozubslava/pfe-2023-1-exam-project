import React, { Children } from 'react';
import styles from './Grid.module.sass'

const Grid = ({children, columns, gap}) => {
  
  const gridStyle = {
    display : 'grid',
    gridTemplateColumns : `repeat(${columns}, 1fr ) `,
    gap: gap
  }
  
  return (
    <div style = {gridStyle}>
      {children}
    </div>
  );
}

export default Grid;


