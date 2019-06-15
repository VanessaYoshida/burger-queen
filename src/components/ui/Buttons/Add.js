import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonAddRequest = (props) => {
  const classes = useStyles();
  
  return (
    <div>
      <Fab variant="extended" color={props.color} aria-label="Add" className={classes.margin} onClick={props.onClick}>
        <AddIcon className={classes.extendedIcon} />
        {props.text}
      </Fab>
    </div>
  );
}

export default ButtonAddRequest;