import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ButtonDefault = ({color, onClick, text}) => {
  const classes = useStyles();
  
  return (
    <div>
    <Button variant="contained" color={color} className={classes.button} onClick={onClick}>
    {text}
    </Button>
    </div>
    );
  }
  
  export default ButtonDefault;  