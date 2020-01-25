import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const projectsList = [
  {
    title: 'Personal Website',
    languages: ['ReactJS', 'Material-UI', 'JavaScript'],
    description: 'This is the site that you\'re currently looking at, home to my online portfolio. If you\'d like to see the source code, it\'s all available on my GitHub in the repository linked below.',
    link: 'https://github.com/ndomenic/personal-site'
  },
  {
    title: 'England/Wales Family Trip',
    languages: ['ReactJS', 'Material-UI', 'Javascript'],
    description: 'This website uses Google\'s Maps API to show a customized map of England and Wales with markers in various places we visited. Each marker is clickable, bringing up a brief description of what we did in each location with pictures to accompany it.',
    link: 'https://github.com/ndomenic/travel-log'
  },
  {
    title: 'Server API',
    languages: ['Node.js', 'JavaScript', 'MySQL'],
    description: 'The Node.js server that runs all of the API endpoints for my web projects. While there is no SQL code in the below repository, this server links to the MySQL database that I have setup on my personal server.',
    link: 'https://github.com/ndomenic/personal-site'
  },
  {
    title: 'LibADT',
    languages: ['C'],
    description: 'A library of data structures written in the C language complying to the C11 standard. I\'ve frequently used this library in my various C projects throughout university, as its been extremely reliable with no memory leaks.',
    link: 'https://github.com/ndomenic/libADT'
  },
]

const styles = theme => ({
  root: {
    padding: '24px'
  },
  paper: {
    padding: theme.spacing(2),
  },
  chip: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(1),
  },
  card: {
    paddingBottom: '4px'
  },
  cardDescription: {
    marginTop: '12px'
  },
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
});

class ProjectsPage extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Container maxWidth="md" className={classes.verticalPadding}>
        <Typography variant="h4" component="h3">
          Personal Projects
        </Typography>
        <br/>
        <Typography component="p">
          Below are some of my personal projects that I have worked on in my spare time over the past few years. Each one will have a link to the project's own git repository, where you can find more detail project-specific information and code.
        </Typography>
        <br/>
        <Grid container spacing={3}>
          {projectsList.map((element, index) => (
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent className={classes.card}>
                  <Typography variant="h6" component="h3">
                    {element.title}
                  </Typography>
                  {element.languages.map((language, index) => (
                    <Chip className={classes.chip} label={language} />
                  ))}
                  <Typography className={classes.cardDescription} component="p">
                    {element.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={element.link}>View Git Repo</Button>
                  {element.liveLink ? (
                    <Button size="small" href={element.liveLink}>Live Demo</Button> 
                  ) : (
                    <React.Fragment/>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(ProjectsPage);