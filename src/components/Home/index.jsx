import React from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import Public from './Public';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  </Layout>
);

export default Home;