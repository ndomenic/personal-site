import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

const aboutMeList = [
  {
    title: 'Computers Are My Passion',
    description: 
    <Typography component="p">I've been enthralled by computers and anything that has a silicone chip in it from a young age. From computers to phones to video game consoles, if it has a processor and an interface I've been tinkering with them for as long as I can remember. Probably what actually got me into tinkering with computers was video games, specifically Minecraft - modding that game opened me up to the vast world that I now adore. From rooting my Android devices, to switching between various Linux distros, playing around with computers and such is what got me into the field of software development that I'm in today.</Typography>,
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'Cars Are My Hobby',
    description: <Typography component="p">While computers may be my passion and I love tinkering with them, my hobby is tinkering with cars of all sorts. I currently drive a mostly stock 2012 Mazda 3, with hopes of one day owning a project car such as a Mazda Miata or a Subaru BRZ (I'm undecided). I tend to spend most of my weekends either working on my own car, or my friends cars, learning more about how the machines we drive every day work.</Typography>,
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'I Love To Travel',
    description: <Typography component="p">I have been fortunate enough in my life to have visited many countries around the world. Notable places I've visited include England, France, Germany, Ireland, Costa Rica, and Belgium. I always love going new places, seeing new things, tasting new food, and experiencing all sorts of things I have yet to discover. One of my personal projects was to make a web application showing off one of my recent trips to England & Wales, and you can view it <a href="https://domenichini.ca/englandWales">here</a>.</Typography>,
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  }, 
  {
    title: 'Home Is Where The Family Is',
    description: <Typography component="p">Lorem ipsum.</Typography>,
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  },
  {
    title: 'Dogs Are My Absolute Favourite',
    description: <Typography component="p">Lorem ipsum.</Typography>,
    image: 'https://media.istockphoto.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?k=6&m=509636590&s=612x612&w=0&h=0n261AbJgmWI5cUWLUwpcRAbuGfmbWPF44tvPvErZXA='
  }
]

const styles = theme => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  image: {
    height: 275, 
    width: 275,
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

        <Alert severity="info">This page is currently under construction, and should be finished in the next few days. In the meantime, you can keep checking back as it gets updated.</Alert>
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
                    {element.description}
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