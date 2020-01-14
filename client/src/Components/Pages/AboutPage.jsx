import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
});

class AboutPage extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Container maxWidth="md" className={classes.verticalPadding}>
        <Typography variant="h4" component="h3">
          About Me
        </Typography>
        <br/>
      </Container>
    )
  }
}

export default withStyles(styles)(AboutPage);