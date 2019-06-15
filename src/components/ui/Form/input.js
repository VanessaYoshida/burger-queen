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

const Input = ({type, text, onChange}) => {
  const classes = useStyles();
  
  return (
    <TextField
      required
      type={type}
      label={text}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={onChange}
    />
    );
  }
  
  export default Input;