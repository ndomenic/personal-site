import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import Error404 from './Pages/Error404';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {palette} from './colourPalette'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    flex: 1,
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
            <main className={classes.main}>
              <Switch>{/*React router switch that determines which component to render based on the current url*/}
                <Route exact path={"/"} component={HomePage} />
                <Route path={"/about"} component={AboutPage} />
                <Route path={"/resume"} component={ResumePage} />
                <Route path={"/contact"} component={ContactPage} />
                <Route path={"/projects"} component={ProjectsPage} />
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