import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';
import Intro from '../components/Home/Intro';
import Public from './../components/Home/public';
import ExtendedFooter from '../components/ExtendedFooter';

const Layout = MainText(styled.div`
  display: flex;
  flex-direction: column;
`);

const Slideshow = styled.div`
  background: teal;
  width: 100%;
  height: 100vh;
`;

const Home = () => (
  <Layout>
    <Slideshow />
    <Intro />
    <Public />
    <ExtendedFooter />
  </Layout>
);

export default Home;