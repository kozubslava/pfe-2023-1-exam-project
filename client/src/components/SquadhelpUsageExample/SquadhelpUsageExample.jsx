import React from 'react';
import styles from './SquadhelpUsageExample.module.sass'
import Button from '../Button/Button';

const SquadhelpUsageExample = ({ link, text, image, description, title, buttonName }) => {
  return (
    <div className={styles.heroSection}>
      <img src = {image} alt = {description}/>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionDescription}>{text}</p>
      <Button
        link={link}
        text={buttonName}
        icon={true}
      />

    </div>
  );
}

export default SquadhelpUsageExample;
