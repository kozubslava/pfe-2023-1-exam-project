import React from 'react';
import styles from './StepItem.module.sass'


const StepItem = ({indicator, text}) => {
  return (
    <div className={styles.item}>
      <span className={styles.stepIndicator}>{indicator}</span>
      <p>{text}</p>
    </div>
    
  );
}

export default StepItem;
