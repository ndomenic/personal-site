import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const aboutMeList = [
  {
    title: 'Computers Are My Passion',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'Cars Are My Hobby',
    description: 'Lorem ipsum.',
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'I Love To Travel',
    description: 'Lorem ipsum.',
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  }, 
  {
    title: 'Home Is Where The Family Is',
    description: 'Lorem ipsum.',
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'Dogs Are My Absolute Favourite',
    description: 'Lorem ipsum.',
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  }
]

const styles = theme => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  image: {
    height: 250, 
    width: 250,
    float: 'right'
  },
  imageDiv: {
    width: '30%'
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%'
  },
  content: {
    flex: '1 0 auto',
  },
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
        <Grid container spacing={3}>
          {aboutMeList.map((element, index) => (
            <Grid item xs={12}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                  <Typography variant="h6" component="h3">
                      {element.title}
                    </Typography>
                    <Typography component="p">
                      {element.description}
                    </Typography>
                  </CardContent>
                </div>
                <div className={classes.imageDiv}>
                  <CardMedia
                    className={classes.image}
                    image={element.image}
                    title="Live from space album cover"
                  />
                </div>     
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(AboutPage);