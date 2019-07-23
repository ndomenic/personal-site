import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  centered: {
    textAlign: 'center'
  },
  heading: {
    color: '#5c6bc0'
  },
  address: {
    fontStyle: 'italic'
  },
  contact: {
    '& a': {
      color: 'black',
      textDecoration: 'none'
    }
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 24,
    bottom: 24,
    left: 'auto',
    position: 'fixed',
  },
});

class ResumePage extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Container maxWidth="md">
        <div className={classes.centered}>
          <Typography variant="h3" className={classes.heading} gutterBottom>
            Nicholas Domenichini
          </Typography>
          <Typography variant="subtitle1" className={classes.address}>
            1077 Gordon Street, Unit 320, Guelph, Ontario, N1G 0E3
          </Typography>
          <Typography variant="subtitle1" className={classes.contact} gutterBottom>
            <a href="tel:416-688-9726" >(416)-688-9726</a> | <a href="mailto:ndomenic@uoguelph.ca">ndomenic@uoguelph.ca</a> | <a href="https://domenichini.ca">domenichini.ca</a>
          </Typography>
        </div>
        <Fab color="secondary" aria-label="Download Resume" className={classes.fab}>
          <Icon>file_download</Icon>
        </Fab>
      </Container>
    )
  }
}

export default withStyles(styles)(ResumePage);