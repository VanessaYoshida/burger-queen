import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function Input(props) {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        type={props.type}
        label={props.text}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;