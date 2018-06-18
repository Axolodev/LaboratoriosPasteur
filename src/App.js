import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { globalTheme } from './styles/themes';
import AppLayout from './components/AppLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={globalTheme}>
          <Fragment>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
            <AppLayout />
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
