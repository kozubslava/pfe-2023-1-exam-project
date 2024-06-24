import React from 'react';
import styles from './HowItWorksComponent.module.sass'

const HowItWorksComponent = () => {
  return (
    <section className={styles.infoContainer}>
      <div className={styles.leftBlock}>
        <h4 className={styles.subtitleSection}>World's #1 Naming Platform</h4>
        <h1 className={styles.headerArticle}>How Does Squadhelp Work?</h1>
        <p className={styles.articleLeft}>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.
        </p>
        <div className={styles.buttonSection}>
          <a className={styles.button} data-fancybox="" href="https://vimeo.com/826948811">
            <i class="fas fa-play"/>
            <span className={styles.buttonText}>Play Video</span>
          </a>
        </div>
      </div>
      <div className={styles.rightBlock}>
          <img  width="450" src='/staticImages/app-user.svg' alt="app user svg"/>
      </div>
    </section>
  );
}

export default HowItWorksComponent;

