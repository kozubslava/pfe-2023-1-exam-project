import React from 'react';
import styles from './StepContestComponent.module.sass'


const StepContestComponent = ({title, text}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.conteiner}>
        <div className={styles.item}>
          <span className={styles.itemCap}>{title}</span>
          <p>{text}</p>
        </div>
      </div>
    </div>
    
  );
}

export default StepContestComponent;
