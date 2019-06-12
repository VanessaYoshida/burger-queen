import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 400,
  },
}));

function Input(props) {
  const classes = useStyles();
  
  return (
    <TextField
      required
      type={props.type}
      label={props.text}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={props.onChange}
    />
    );
  }
  
  export default Input;