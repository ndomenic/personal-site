import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const list1 = [
  {
    icon: <Icon>email</Icon>,
    primary: 'Email',
    secondary: <a href="mailto:ndomenic@uoguelph.ca">ndomenic@uoguelph.ca</a>
  },
  {
    icon: <Icon>code</Icon>,
    primary: 'GitHub',
    secondary: <a href="https://github.com/ndomenic">@ndomenic</a>
  },
  {
    icon: <Icon>person</Icon>,
    primary: 'Facebook',
    secondary: <a href="https://www.facebook.com/nicholas.domenichini.1">Nicholas Domenichini</a>
  }
];

const list2 = [
  {
    icon: <Icon>phone</Icon>,
    primary: 'Phone',
    secondary: <a href="tel:416-688-9726">(416)-688-9726</a>
  },
  {
    icon: <Icon>work</Icon>,
    primary: 'LinkedIn',
    secondary: <a href="https://www.linkedin.com/in/nicholas-domenichini/">in/nicholas-domenichini/</a>
  },
  {
    icon: <Icon>image</Icon>,
    primary: 'Instagram',
    secondary: <a href="https://www.instagram.com/nicholasdomenichini/">@nicholasdomenichini </a>
  }
];

const styles = theme => ({
  root: {
    padding: '24px'
  },
  paper: {
    padding: theme.spacing(3, 3),
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop: '0',
    paddingBottom: '0'
  }
});

class ContactPage extends React.Component {
  render() {
    const {classes} = this.props; 

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography variant="h4" component="h3">
            Contact Me
          </Typography>
          <br/>
          <Typography component="p">
            You can connect with me through any of the following mediums; 
            I usually reply to phone calls and emails the fastest. 
            If you want to meet up and have a chat with me, 
            I'm usually in the Guelph area and would love to grab a coffee. 
          </Typography>
          <br/>
          <Paper className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <List className={classes.list}>
                  {list1.map((element, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          {element.icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={element.primary} secondary={element.secondary} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List className={classes.list}>
                  {list2.map((element, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          {element.icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={element.primary} secondary={element.secondary} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ContactPage);