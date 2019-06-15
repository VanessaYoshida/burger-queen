import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({click, btnText}) => {
  const classes = useStyles();
  let showUserName = localStorage.getItem('userName') ? true : false;
  const userName = " - Logado como " + localStorage.getItem('userName');
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Burger Queen {showUserName ? userName : ""}
          </Typography>
          <Button color="inherit" onClick={click}>{btnText}</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }

  export default ButtonAppBar;