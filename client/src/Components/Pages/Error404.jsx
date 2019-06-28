import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: '24px'
  }
});

class Error404 extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <h1>Hmm... that page couldn't be found. Click <a href='/'>here</a> to go to the home page.</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Error404);