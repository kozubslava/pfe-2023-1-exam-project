import React from 'react';
import styles from './Hero.module.sass'
import SectionTitle from '../SectionTitle/SectionTitle';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <SectionTitle
          title={'How Does Atom Work?'}
          titleType={"h1"}
          tagline={'World\'s #1 Naming Platform'}
          description={"Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services."}
          style={{textAlign: 'left', marginLeft: 0, marginBottom: 40}}
          descriptionColor={'rgba(25, 24, 74, 0.5)'}
        />
        <div className={styles.buttonSection}>
          <a className={styles.button} href="https://vimeo.com/826948811">
            <i className="fas fa-play"/>
            <span className={styles.buttonText}>Play Video</span>
          </a>
        </div>
      </div>
      <div className={styles.image}>
          <img  width="450" src='/staticImages/app-user.svg' alt="app user svg"/>
      </div>
    </section>
  );
}


export default Hero;

