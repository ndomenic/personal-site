import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
});

class Error404 extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.verticalPadding}>
        <h1>Hmm... that page couldn't be found. Click <a href='/'>here</a> to go to the home page.</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Error404);