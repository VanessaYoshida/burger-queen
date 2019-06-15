import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const AddShopping = ({onClick}) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart" onClick={onClick}> 
        <AddShoppingCartIcon /> Fechar Pedido
      </IconButton>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
      <label htmlFor="icon-button-file">
      </label>
    </div>
  );
}

export default AddShopping;