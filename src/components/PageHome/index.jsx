import React from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import Public from './Public';
import ButtonQuote from './../ButtonQuote';

const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slideshow = styled.div`
  background: teal;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  background: #606163;
`;

const PageHome = () => (
  <Layout>
    <Slideshow />
    <Intro />
    <Background>
      <Public />
      <ButtonQuote quote={text} />
    </Background>
  </Layout>
);

export default PageHome;