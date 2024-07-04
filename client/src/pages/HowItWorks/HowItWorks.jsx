
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import MethodItem from '../../components/MethodItem/MethodItem'
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass'
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FaqComponent from '../../components/FaqComponent/FaqComponent';
import StepSection from '../../components/StepSection/StepSection';
import MethodsOfUse from '../../components/MethodsOfUse/MethodsOfUse';

const HowItWorks = () => {
  return (
  <>
    <Header/>
    <Hero/>
    <MethodsOfUse/>
    <StepSection/>
    <FaqComponent/>
    <Footer/>
  </>
    
  );
}

export default connect(null)(HowItWorks);


