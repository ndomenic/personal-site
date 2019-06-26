import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {endpointPreface} from '../config';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  text: {
    paddingTop: '10px'
  },
  root: {
    padding: '24px'
  }
});

class HomePage extends React.Component {
  state = {getResponse: '', postResponse: ''};

  handleGetClick = () => {
    axios.get(`http://localhost${endpointPreface}/getData`).then(res => {
      this.setState({getResponse: res.data.sample})
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <h1>Home Page</h1>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleGetClick}>
              Check server mode (get request)
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.text}>
              {this.state.getResponse}
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(HomePage);