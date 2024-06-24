import React from 'react';
import styles from './SquadhelpUsageExample.module.sass'

const SquadhelpUsageExample = ({ link, text, image, description, title, buttonName }) => {
  return (
    <section className={styles.heroSection}>
      <img src = {image} alt = {description}/>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionDescription}>{text}</p>
      <div className={styles.buttonSection}>
        <a className={styles.button} href={link}>
            <span className={styles.buttonText}>{buttonName}</span>
            <span className={styles.arrowRight}></span>
        </a>
      </div>

    </section>
  );
}

export default SquadhelpUsageExample;
