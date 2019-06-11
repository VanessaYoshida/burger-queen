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

function ButtonAddRequest(props) {
  const classes = useStyles();
  
  return (
    <div>
      <div>
        <Fab variant="extended" color="secondary" aria-label="Add" className={classes.margin} onClick={props.onClick}>
          <AddIcon className={classes.extendedIcon} />
          Novo Pedido
        </Fab>
        <p>Pedidos Abertos</p>
        <hr></hr>

        <p>Pedidos Prontos</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default ButtonAddRequest;