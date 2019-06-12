import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function RadioButton(props) {
  const classes = useStyles();
  
  return (
    <FormControl component="fieldset" className={classes.formControl}>
    <FormLabel component="legend">Tipo de Usuário</FormLabel>
      <RadioGroup
        aria-label="Tipo de Usuário"
        name="typeuser"
        className={classes.group}
        value={props.value}
        onChange={props.onChange}
      >
      <FormControlLabel value="salao" control={<Radio />} label="Salão" />
      <FormControlLabel value="cozinha" control={<Radio />} label="Cozinha" />
      </RadioGroup>
    </FormControl>
    );
  }
  
  export default RadioButton;