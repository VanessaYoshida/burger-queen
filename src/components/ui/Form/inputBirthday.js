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

const InputBirthday = ({text, value, type, onChange}) => {
  const classes = useStyles();

  return (
      <TextField
        label={text}
        value={value}
        type={type}
        onChange={onChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
  );
}

export default InputBirthday;