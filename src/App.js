import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { Header } from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { ThemeProvider } from '@material-ui/core/styles';
import { useStyles, mainTheme } from './style';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <div className={classes.mainRoot}>
          <Container className={classes.root}>
            <Container className={classes.content}>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
            </Container>
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
