import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 418-575-6682">418-575-6682</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bagoudoumoubarack@icloud.com">bagoudoumoubarack@icloud.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Fast and eager learner willing to relocate or learn a new stack if needed.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.github.com/zackscovitch01">
            <AiFillGithub size= "3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/moubarackbagoudou/">
            <AiFillLinkedin size= "3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/zackscovitch">
            <AiFillInstagram size= "3rem"/>
          </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
