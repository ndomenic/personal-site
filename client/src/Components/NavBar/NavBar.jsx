import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import {address} from '../config';

let prefix = '';
if (process.env.NODE_ENV === 'production') prefix = address;

const styles = {
  root: {
    flexGrow: 1,
    height: '66px'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    paddingRight: '48px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

//The list of items in the drawer
const items = [
    {
      text: 'Home',
      icon: <Icon>home</Icon>,
      path: prefix + '/'
    },
    {
      text: 'About',
      icon: <Icon>info</Icon>,
      path: prefix + '/about'
    },
    {
      text: 'Resume',
      icon: <Icon>description</Icon>,
      path: prefix + '/resume'
    },
    {
      text: 'Contact',
      icon: <Icon>question_answer</Icon>,
      path: prefix + '/contact'
    },
    {
      text: 'Projects',
      icon: <Icon>code</Icon>,
      path: prefix + '/projects'
    }
  ];
  

function HideOnScroll(props) { //Helper component that hides the top app bar when the user scrolls down the page, but allows it to reappear if they scroll up at any time
  const { children } = props;
  const trigger = useScrollTrigger(); //This function uses react hooks, and thus cannot be used inside the component class. Hence this helper component

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class NavBar extends React.Component {
  state = {
      open: false
  }

  handleClickOpen = () => {
    this.setState({open: true});
  }

  handleClickClose = () => {
    this.setState({open: false});
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HideOnScroll {...this.props}>
          <AppBar color="secondary">
            <Toolbar>
              <IconButton
                onClick={this.handleClickOpen}
                className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu"
              >
                <MenuIcon/>
              </IconButton>
              <div className={classes.grow} >
                <Typography variant="h5" color="inherit">
                  Nick Domenichini
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        {/*Navigation drawer that pops out when the top bar changes the state. The List contains ListItems of each entry*/}
        <Drawer open={this.state.open} onClose={this.handleClickClose}>
          <List style={{width: 250}}>
            {items.map(item => (
              <ListItem 
                button
                key={item.text}
                onClick={() => {
                  //By pushing the path onto the history, react router will re-route automatically to the new path
                  this.props.history.push({pathname: item.path});
                  this.handleClickClose();
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(NavBar));