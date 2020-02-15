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
    description: 
    <Typography component="p">I've been enthralled by computers and anything that has a silicone chip in it from a young age. From computers to phones to video game consoles, if it has a processor and an interface I've been tinkering with them for as long as I can remember. Probably what actually got me into tinkering with computers was video games, specifically Minecraft - modding that game opened me up to the vast world that I now adore. From rooting my Android devices, to switching between various Linux distros, playing around with computers and such is what got me into the field of software development that I'm in today.</Typography>,
    image: `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/desktop.jpg`
  },
  {
    title: 'Cars Are My Hobby',
    description: <Typography component="p">While computers may be my passion and I love tinkering with them, my hobby is tinkering with cars of all sorts. I currently drive a mostly stock 2012 Mazda 3, with hopes of one day owning a project car such as a Mazda Miata or a Subaru BRZ (I'm undecided). I tend to spend most of my weekends either working on my own car, or my friends cars, learning more about how the machines we drive every day work.</Typography>,
    image: `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/mazda3.jpg`
  },
  {
    title: 'I Love To Travel',
    description: <Typography component="p">I have been fortunate enough in my life to have visited many countries around the world. Notable places I've visited include England, France, Italy,  Germany, Ireland, Costa Rica, and Belgium. I always love going new places, seeing new things, tasting new food, and experiencing all sorts of things I have yet to discover. One of my personal projects was to make a web application showing off one of my recent trips to England & Wales, and you can view it <a href="https://github.com/ndomenic/travel-log">here</a>.</Typography>,
    image: `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/ireland.jpg`
  }, 
  {
    title: 'Home Is Where The Family Is',
    description: <Typography component="p">While I absolutely love travelling, and there is a small part of me that wants to go live somewhere else and explore living in another part of the world, I simply couldn't give up my family life. My family are some of the most awesome and supportive people that I know, and I am very lucky to have them in my life. I am super fortunate to have such an amazing family, and I won't be leaving to GTA anytime soon - how else would I keep seeing them all?</Typography>,
    image: `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/family.jpg`
  },
  {
    title: 'Dogs Are My Absolute Favourite',
    description: <Typography component="p">I do like most animals, but dogs are by far the top of my favourites list. There's just something about those goofy, loving creatures that I absolutely adore - and the bigger the better. My family has a Springer Spaniel named Lexi, and she is definitely one of my favourite things about visiting my parts. I love her to bits, and I hope to have a dog of my own one day, perhaps I can fullfill my dream of owning a Bernese Mountain Dog.</Typography>,
    image: `${process.env.REACT_APP_ADDRESS}/${process.env.REACT_APP_API_NAME}/lexi.jpg`
  }
]

const styles = theme => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  image: {
    height: 275, 
    width: '100%',
  },
  card: {
    display: 'flex',
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
                <Grid container spacing={1}>
                  <Grid item md={8} sm= {7} xs={12}>
                    <CardContent className={classes.content}>
                    <Typography variant="h6" component="h3">
                        {element.title}
                      </Typography>
                      {element.description}
                    </CardContent>
                  </Grid>
                  <Grid item md={4} sm={5} xs={12}>
                    <CardMedia
                      className={classes.image}
                      image={element.image}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(AboutPage);