
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import SquadhelpUsageExample from '../../components/SquadhelpUsageExample/SquadhelpUsageExample'
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass'
import HowItWorksComponent from '../../components/HowItWorksComponent/HowItWorksComponent';
import StepContestComponent from '../../components/StepContestComponent/StepContestComponent';

const HowItWorks = () => {
  return (
  <>
      <Header/>
      <HowItWorksComponent/>
      <section className={styles.sectionUseSquadhelp}>
        <div className={styles.blockUseSquadhelp}>
          <h4 className={styles.subtitleSection}>Our Services</h4>
          <h1 className={styles.headerSection}>3 Ways To Use Squadhelp</h1>
          <p>Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
        </div>
        <div className={styles.sectionExamples}>
        <SquadhelpUsageExample
          image = '/staticImages/g1.svg'
          description = 'lightning'
          title = 'Launch a Contest'
          text='Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.'
          buttonName = 'Launch a Contest'
          link = '/startContest'
        />
        <SquadhelpUsageExample
          image = '/staticImages/g2.svg'
          description = 'monitor'
          title = 'Explore Names For Sale'
          text='Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design'
          buttonName = 'Explore Names For Sale'
          link='https://www.google.com/'
        />
        <SquadhelpUsageExample
          image = '/staticImages/g3.svg'
          description = 'bulb'
          title = 'Agency-level Managed Contests'
          text='Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs'
          buttonName = 'Learn More'
          link='https://www.google.com/'
        />
        </div>
      </section>
      <section className={styles.sectionSteps}>
        <div className={styles.blockUseSquadhelp}>
        <img src = '/staticImages/icon-27.svg' alt = 'cup' />
        <h1 className={styles.headerSection}>How Do Naming Contests Work?</h1>
        </div>
        <div className={styles.containerSteps}>
          <StepContestComponent
          title = 'Step 1'
          text = 'Fill out your Naming Brief and begin receiving name ideas in minutes'
          />
          <StepContestComponent
          title = 'Step 2'
          text = 'Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.'
          />
          <StepContestComponent
          title = 'Step 3'
          text = 'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.'
          />
          <StepContestComponent
          title = 'Step'
          text = 'Pick a Winner. The winner gets paid for their submission.'
          />
        </div>
        
      </section>
      
          
    
    
    <Footer/>
  </>
    
  );
}

export default connect(null)(HowItWorks);


