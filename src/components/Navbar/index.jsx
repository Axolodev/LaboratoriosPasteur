import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const I = styled.i`
  color: white;
  font-size: 2em;
  padding: 0 0.5em;
`;

const NavLayout = styled.nav`
  display: grid;
  grid-template: repeat(4, minmax(2.5vh, 47px)) / 3fr 1fr 2fr;
  grid-template-areas: 
    "contact contact contact"
    "logo nav nav"
    "logo nav nav"
    ". . .";  
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, rgba(44,68,134,1) 0%, rgba(5,6,255,0) 100%, rgba(0,212,255,1) 100%);
`;

const ContactSection = styled.div`
  grid-area: contact;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  box-shadow: inset 0px -2px 0px -1px white, inset 0px 2px 0px -1px white;
`;

const styledSection = styled.div`
  border-left: 1px solid white;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 0.9em;
  color: white;
  height: 100%;
`;

const PhoneSection = styledSection.extend`
  width: 15%;
`;

const SocialsSection = styledSection.extend`
  width: 29%;
  font-size: 0.8em;
  justify-content: space-between;
  padding: 0 3%;
`;

const SocialButtons = styled.div`
`;

const LogoSection = styled.div`
  display: flex;
  grid-area: logo;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left:4em;
  color: white;
  font-size: 1.5em;
  flex: 1;
`;

const LinksSection = styled.div`
  display: flex;
  grid-area: nav;  
  align-items: center;
  justify-content: space-between;
  padding-right: 3.5em;
  flex: 1;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 0.8em;
  text-transform: uppercase;
  color: white;

  &:visited {
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  height: 100%;
  width: 100%;

  &:visited {
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 57%;
`;

const Navbar = () => (
  <NavLayout>
    <ContactSection>
      <PhoneSection>(81) 1234 56789</PhoneSection>
      <SocialsSection>
        <div>labpasteur@gmail.com</div>
        <SocialButtons>
          <ExternalLink target="_blank" href="https://www.facebook.com/laboratoriospasteuranalisisclinicos"><I className="fab fa-facebook-square" /></ExternalLink>
          <ExternalLink target="_blank" href="https://www.instagram.com/laboratoriospasteur"><I className="fab fa-instagram" /></ExternalLink>
        </SocialButtons>
      </SocialsSection>
    </ContactSection>
    <LogoSection><NavLink to="/"><Img src={logo} alt="logo" /></NavLink></LogoSection>
    <LinksSection>
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/">Productos y servicios</Link>
      <Link to="/">Noticias</Link>
      <Link to="/contact">Contacto</Link>
    </LinksSection>
  </NavLayout>
);

export default Navbar;
