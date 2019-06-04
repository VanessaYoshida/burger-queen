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

function OutlinedTextFields(props) {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate autoComplete="off" onClick={props.onClick}>
      <TextField
        required
        type={props.text}
        label={props.text}
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}

export default OutlinedTextFields;