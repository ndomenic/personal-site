import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: '24px'
  }
});

class AboutPage extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <h1>About Me</h1>
      </div>
    )
  }
}

export default withStyles(styles)(AboutPage);