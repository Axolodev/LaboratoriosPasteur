import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Routes from './Routes';
import Footer from './Footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppLayout = () => (
  <Layout>
    <Navbar />
    <Routes />
    <Footer />
  </Layout>
);

export default AppLayout;