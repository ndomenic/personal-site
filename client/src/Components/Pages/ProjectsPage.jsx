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
    title: 'Project 1',
    languages: ['JavaScript', 'Python'],
    description: 'This is some description. probably long.',
    link: 'https://google.com'
  },
  {
    title: 'Project 2',
    languages: ['C'],
    description: 'This is some description. Also probably long.',
    link: 'https://bing.com'
  },
  {
    title: 'Project 3',
    languages: ['C'],
    description: 'This is some description. Also probably long.',
    link: 'https://bing.com'
  },
  {
    title: 'Project 4',
    languages: ['C'],
    description: 'This is some description. Also probably long.',
    link: 'https://bing.com'
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
                  <Typography className={classes.cardDescription} variant="p" component="p">
                    {element.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={element.link}>View Git Repo</Button>
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