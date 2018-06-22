import React from 'react';
import styled from 'styled-components';

import { Section as _Section } from './../../styles/AppStyles';
import general from '../../assets/icons/general.svg';
import mujer from '../../assets/icons/mujer.svg';
import hombre from '../../assets/icons/hombre.svg';
import adultomayor from '../../assets/icons/adultomayor.svg';
import deportista from '../../assets/icons/deportista.svg';
import organizacion from '../../assets/icons/organizacion.svg';

const Section = _Section.extend`
  background: #606163;
`;

const Layout = styled.div`
  display: grid;
  width: calc(100% - 7em);
  height: calc(100% - 17em);
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-auto-flow: row;
  margin: 8.5em 3.5em;
  grid-gap: 1px;
  overflow: hidden;
`;

const GridItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  outline-style: solid;
  outline-color: white;
  outline-width: 1px; 
`;

const GridItemLogo = styled.div`
  width: 20%;
`;

const GridItemTitle = styled.div`
  color: ${props => props.theme.mainHighlightColor};
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: bold;
`;

const GridItemDescription = styled.div`
  font-style: italic;
  font-family: "Times New Roman";
  font-size: 0.9rem;
  width: 80%;
  color: white;
  line-height: 1.1rem;
`;

const Img = styled.img`
  width: 70%;
`;

const Public = () => (
  <Section>
    <Layout>
      <GridItem>
        <GridItemLogo><Img src={general} alt="general"/></GridItemLogo>
        <GridItemTitle>General</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
      <GridItem>
        <GridItemLogo><Img src={mujer} alt="mujer"/></GridItemLogo>
        <GridItemTitle>mujer</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
      <GridItem>
        <GridItemLogo><Img src={hombre} alt="hombre"/></GridItemLogo>
        <GridItemTitle>hombre</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
      <GridItem>
        <GridItemLogo><Img src={adultomayor} alt="adultomayor"/></GridItemLogo>
        <GridItemTitle>adulto mayor</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
      <GridItem>
        <GridItemLogo><Img src={deportista} alt="deportista"/></GridItemLogo>
        <GridItemTitle>deportista</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
      <GridItem>
        <GridItemLogo><Img src={organizacion} alt="organización o empresa"/></GridItemLogo>
        <GridItemTitle>organización o empresa</GridItemTitle>
        <GridItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minima magnam accusamus cupiditate aut soluta possimus eos? Sequi, sapiente tempora.</GridItemDescription>
      </GridItem>
    </Layout>
  </Section>
);

export default Public;