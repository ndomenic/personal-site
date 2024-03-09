import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  verticalPadding: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}));

const Error404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.verticalPadding}>
      <h1>Hmm... that page couldn't be found. Click <a href='/'>here</a> to go to the home page.</h1>
    </div>
  )
}

export default Error404