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
  subHeading: {
    color: '#5c6bc0',
    marginTop: '16px'
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
  title: {
    fontWeight: 'bold'
  },
  location: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    },
  },
  company: {
    fontStyle: 'italic', 
    color: grey[600]
  },
  timePeriod: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    },
    fontStyle: 'italic', 
    color: grey[600]
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 24,
    bottom: 24,
    left: 'auto',
    position: 'fixed',
  },
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
});

class ResumePage extends React.Component {
  render () {
    const { classes } = this.props;
    const resumePdf = `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/resume.pdf`
    
    return (
      <Container maxWidth="md" className={classes.verticalPadding}>
        <div className={classes.centered}>
          <Typography variant="h3" className={classes.heading}>
            Nick Domenichini
          </Typography>
          <Typography variant="subtitle1" className={classes.address}>
            Guelph, Ontario
          </Typography>
          <Typography variant="subtitle1" className={classes.contact} gutterBottom>
            <a href="tel:416-688-9726" >(416)-688-9726</a> | <a href="mailto:nick.domenichini@gmail.com">nick.domenichini@gmail.com</a>
          </Typography>
        </div>
        {map(resumeJson, (sectionData, sectionHeader) => (
          <React.Fragment key={sectionHeader}>
            <Typography variant="h5" className={classes.subHeading} gutterBottom>
              {sectionHeader}
            </Typography>
            <hr/>
            {sectionData.map((entry, index) => (
              <React.Fragment key={index}>
                {sectionHeader === 'Technical Skills' ? (
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="subtitle1" className={classes.title} gutterBottom>
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
                    <Grid container spacing={0}>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="subtitle1" className={classes.title} gutterBottom>
                          {entry.title}
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12}>
                        <Typography variant="subtitle1" className={classes.location} gutterBottom>
                          {entry.location}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="subtitle1" className={classes.company} gutterBottom>
                          {entry.company}
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12}>
                        <Typography variant="subtitle1" className={classes.timePeriod} gutterBottom>
                          {entry.timePeriod}
                        </Typography>
                      </Grid>
                    </Grid>
                    {entry.bullets ? (
                      <ul style={{paddingLeft: '35px'}}>
                        {entry.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <React.Fragment/> 
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </React.Fragment> 
        ))}
        <Fab color="secondary" aria-label="Download Resume" className={classes.fab} href={resumePdf} download>
          <Icon>file_download</Icon>
        </Fab>
      </Container>
    )
  }
}

export default withStyles(styles)(ResumePage);