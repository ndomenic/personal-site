import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import Error404 from './Pages/Error404';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {palette} from './colourPalette'
import {address} from './config';

let prefix = '';
if (process.env.NODE_ENV === 'production') prefix = address;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
});

class App extends React.Component {
  render() {
    const {classes} = this.props;

    const theme = createMuiTheme({
      palette: {
        ...palette,
        type: 'light'
      }
    });

    return (
      <div className={classes.root}>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Router>
            <header>
              <NavBar/>
            </header>
            <main style={{flex: 1}}>
              <Switch>{/*React router switch that determines which component to render based on the current url*/}
                <Route exact path={prefix + "/"} component={HomePage} />
                <Route path={prefix + "/SecondPage"} component={SecondPage} />
                <Route component={Error404} />
              </Switch>
            </main>
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(App);

