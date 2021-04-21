import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useStyles } from '../style';

import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function CartContent({ pizzaList, totalPrice, totalPizzas, clearCart, onDelete, onAdd, onRemove }) {
  const classes = useStyles();

  const onhandleClear = () => {
    clearCart();
  };

  const handleDelete = (item) => {
    onDelete(item);
  };

  const handleAdd = (item) => {
    onAdd(item);
  };

  const handleRemove = (id) => {
    onRemove(id);
  };

  return (
    <>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid style={{ display: 'flex', alignItems: 'center' }} item>
          <ShoppingCartOutlinedIcon style={{ height: 50, fontSize: '45px' }} />
          <Typography variant="h3">Корзина</Typography>
        </Grid>
        <Grid item>
          <span onClick={onhandleClear} className={classes.cartClearButton}>
            <DeleteIcon />
            Очистить корзину
          </span>
        </Grid>
      </Grid>

      {Object.values(Object.values(pizzaList)).map((pizza, id) => (
        <CartItem
          key={id}
          {...pizza.item[0]}
          pizzaAmount={pizza.pizzaAmount}
          pizzaPrice={pizza.pizzaPrice}
          onDelete={(pizza) => handleDelete(pizza)}
          onAdd={(pizza) => handleAdd(pizza)}
          onRemove={(id) => handleRemove(id)}
        />
      ))}

      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            Всего пицц: <b>{totalPizzas} шт.</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Сумма заказа: <b className={classes.totalPrice}>{totalPrice} ₽</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button className={classes.cartBackButton}>
              <ArrowBackIosIcon />
              <span>Вернуться назад</span>
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Button onClick={() => console.log('hi')} className={classes.paymentButton}>
            <span>Оплатить сейчас</span>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

CartContent.propTypes = {};

export default CartContent;
