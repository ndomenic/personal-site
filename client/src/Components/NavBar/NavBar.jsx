import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
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

const useStyles = makeStyles((theme) => ({
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
}));

//The list of items in the drawer
const items = [
    {
      text: 'Home',
      icon: <Icon>home</Icon>,
      path: '/'
    },
    {
      text: 'About',
      icon: <Icon>info</Icon>,
      path: '/about'
    },
    {
      text: 'Resume',
      icon: <Icon>description</Icon>,
      path: '/resume'
    },
    {
      text: 'Contact',
      icon: <Icon>question_answer</Icon>,
      path: '/contact'
    },
    {
      text: 'Projects',
      icon: <Icon>code</Icon>,
      path: '/projects'
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

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClickOpen = () => {
    setDrawerOpen(true);
  }

  const handleClickClose = () => {
    setDrawerOpen(false);
  }

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar color="primary">
          <Toolbar>
            <IconButton
              onClick={handleClickOpen}
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
      <Drawer open={drawerOpen} onClose={handleClickClose}>
        <List style={{width: 250}}>
          {items.map(item => (
            <ListItem 
              button
              key={item.text}
              onClick={() => {
                //By pushing the path onto the history, react router will re-route automatically to the new path
                navigate(item.path);
                handleClickClose();
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

export default NavBar;