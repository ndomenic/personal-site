import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import photo from './Photos/homePage.jpg'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import {address} from '../config';

let prefix = '';
if (process.env.NODE_ENV === 'production') prefix = address;

const highlights = [
  {
    icon: 'flash_on',
    title: 'Experienced',
    description: <Typography component="p">
      I'm experienced with various different languages and platforms. From making small programs in low-level languages like C, to making full-blown web applications with Node.js & front-end frameworks, I've done a lot. If there's a skill that you don't see on my <a href="/resume">resume</a>, I can likely learn it inside & out quite swiftly.
    </Typography>
  },
  {
    icon: 'code',
    title: 'Skilled',
    description: <Typography component="p">
      I'm well versed in RESTful APIs, front-end frameworks such as Angular.js and React.js, SQL databases, and many other things that I've learned from my time working in development positions and attending the University of Guelph. I'm also used to working with virtually all of today's major operating systems, so I'm sure to be comfortable working in any environment.
    </Typography>
  },
  {
    icon: 'group',
    title: 'Collaborative',
    description: <Typography component="p">
      I've worked on a few development teams, and as such I'm able to thrive in collaborative environments that have me working with my peers to create some great products. I also do remote contract work that requires frequent communication between myself and managerial staff. If you'd like to have me on your team, <a href="/contact">let's get in touch</a>. 
    </Typography>
  }
]

const styles = theme => ({
  imageDivOuter: {
    overflow: 'hidden',
    height: '400px',
  },
  imageDivInner: {
    display: 'inline-block',
    position: 'relative',
    right: '-50%'
  },
  image: {
    position: 'relative',
    left: '-50%'
  },
  heading: {
    marginTop: '24px',
    marginBottom: '36px',
  },
  subHeading: {
    marginBottom: '12px',
  },
  icon: {
    scale: '275%',
    margin: '24px'
  }
});

class HomePage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.imageDivOuter}>
          <div className={classes.imageDivInner}>
            <img className={classes.image} src={photo} alt=""/>
          </div>
        </div>
        <Container maxWidth="md">
          <Typography variant="h5" align="center" className={classes.heading}>
            Hi, I'm Nick, Computer Science student and Full Stack software developer
          </Typography>
          <Grid container spacing={3}>
            {highlights.map((element) => (
              <Grid item xs={12} sm={4}>
                <div style={{textAlign: 'center'}}>
                  <Icon color="primary" className={classes.icon}>{element.icon}</Icon>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                    {element.title}
                  </Typography>
                </div>
                {element.description}
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" component="h6" align="center" className={classes.heading}>
            This website is my little corner of the internet. Feel free to take a look around, <a href="/about">get to know me better</a>, or check out some of my <a href="/projects">side projects</a>.
          </Typography>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(HomePage);