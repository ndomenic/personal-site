import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import Error404 from './Pages/Error404';
import { createTheme } from '@material-ui/core/styles';
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

    const theme = createTheme({
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
              <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/resume" element={<ResumePage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/projects" element={<ProjectsPage/>} />
                <Route path="*" element={<Error404/>} />
              </Routes>
            </main>
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(App);