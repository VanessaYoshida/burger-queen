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

function ButtonDefault(props) {
  const classes = useStyles();
  const { color, onClick, text } = props;
  
  return (
    <div>
    <Button variant="contained" color={color} className={classes.button} onClick={onClick}>
    {text}
    </Button>
    </div>
    );
  }
  
  export default ButtonDefault;  