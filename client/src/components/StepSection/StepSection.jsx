import React from 'react';
import styles from './StepSection.module.sass'
import Grid from '../Grid/Grid';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import StepItem from '../StepItem/StepItem';

const steps = [
  { "id": 1, "text": "Fill out your Naming Brief and begin receiving name ideas in minutes" },
  { "id": 2,"text": "Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback." },
  { "id": 3,"text": "Our team helps you test your favorite names with your target audience. We also assist with Trademark screening." },
  { "id": 4,"text": "Pick a Winner. The winner gets paid for their submission." },
];

const StepSection = () => {
  return (
    
    <Container bgColor={'lightgrey'}>
      <img src = '/staticImages/icon-27.svg' alt = 'cup' className={styles.image}/>
      <SectionTitle
        title={'How Do Naming Contests Work?'}
        titleType={"h3"}
        style = {{marginBottom: 75}}
      /> 
      <Grid columns = '4' gap = '24px'>
        {steps.map((step, index)=>{
          return <StepItem
            key = {step.id}
            indicator = {`Step ${index+1}`}
            text={step.text}
      />
        })}
      </Grid>
    </Container>
  );
}

export default StepSection;
