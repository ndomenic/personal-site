import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { map } from 'lodash';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey'
import resumeJson from './resume.json';

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
        {map(resumeJson, (sectionData, sectionHeader) => (
          <React.Fragment key={sectionHeader}>
            <Typography variant="h5" className={classes.heading} gutterBottom>
              {sectionHeader}
            </Typography>
            <hr/>
            {sectionData.map((entry, index) => (
              <React.Fragment key={index}>
                {sectionHeader === 'Skills' ? (
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
                        {entry.title}:
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="subtitle1" gutterBottom>
                        {entry.list}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid container spacing={2}>
                      <Grid item xs={9}>
                        <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
                          {entry.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" style={{textAlign: 'right'}} gutterBottom>
                          {entry.location}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={9}>
                        <Typography variant="subtitle1" style={{fontStyle: 'italic', color: grey[600]}} gutterBottom>
                          {entry.company}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" style={{textAlign: 'right', fontStyle: 'italic', color: grey[600]}} gutterBottom>
                          {entry.timePeriod}
                        </Typography>
                      </Grid>
                    </Grid>
                    <ul style={{paddingLeft: '35px'}}>
                      {entry.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </React.Fragment> 
        ))}
        <Fab color="secondary" aria-label="Download Resume" className={classes.fab}>
          <Icon>file_download</Icon>
        </Fab>
      </Container>
    )
  }
}

export default withStyles(styles)(ResumePage);