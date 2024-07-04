import React from 'react';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import Grid from '../Grid/Grid';
import MethodItem from '../MethodItem/MethodItem';


const metods = [
  { "id": 1, "src": "/staticImages/g1.svg", 'alt': 'lightning', 'link': '/startContest', 'text': 'Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.', 'buttonName': 'Launch a Contest'  },
  { "id": 2, "src": "/staticImages/g2.svg", 'alt': 'monitor', 'link': 'https://www.google.com/', 'text': 'Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design', 'buttonName': 'Explore Names For Sale'  },
  { "id": 3, "src": "/staticImages/g3.svg", 'alt': 'bulb', 'link': 'https://www.google.com/', 'text': 'Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs', 'buttonName': 'Learn More'  }
]

const MethodsOfUse = () => {
  return (
    <Container bgColor={'lightgrey'}>
      <SectionTitle
      title={'3 Ways To Use Atom'}
      titleType={"h2"}
      tagline={'Our Services'}
      description={"Atom offers 3 ways to get you a perfect name for your business."}
      />
      <Grid columns = '3' gap = '24px'>
      {metods.map((metod)=>{
        return <MethodItem
          key = {metod.id}
          image = {metod.src} 
          alt = {metod.description}
          link={metod.link}
          text={metod.text}
          buttonName={metod.buttonName}
    />
        })}

      </Grid>
    </Container>
  );
}

export default MethodsOfUse;

