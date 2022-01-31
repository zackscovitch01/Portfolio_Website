import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is <br/>
        Moubarack Bagoudou
      </SectionTitle>
      <SectionText>
        The purpose of this website is to showcase my technical skills via some of my most polish projects.
      </SectionText>
      <Button href = "#">Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;