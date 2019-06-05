import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ButtonSizes() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        {/* <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab> */}
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <AddIcon className={classes.extendedIcon} />
          Adicionar
        </Fab>
      </div>
    </div>
  );
}

export default ButtonSizes;