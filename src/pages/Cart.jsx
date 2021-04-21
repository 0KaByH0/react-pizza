import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  deletePizzaFromCart,
  addPizzaToCart,
  removeItemFromCart,
} from '../redux/action/cart';

import Container from '@material-ui/core/Container';
import CartContent from '../components/CartContent';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  function handleClearCart() {
    if (window.confirm('Are you sure?')) {
      dispatch(clearCart());
    }
  }

  function handleDelete(payload) {
    dispatch(deletePizzaFromCart(payload));
  }

  function handleAdd(payload) {
    dispatch(addPizzaToCart(payload));
  }

  function handleRemove(payload) {
    dispatch(removeItemFromCart(payload));
  }

  return (
    <>
      <Container maxWidth="md">
        {cart.totalPizzas === 0 ? (
          <EmptyCart />
        ) : (
          <CartContent
            pizzaList={cart.items}
            totalPizzas={cart.totalPizzas}
            totalPrice={cart.totalPrice}
            clearCart={handleClearCart}
            onDelete={handleDelete}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        )}
      </Container>
    </>
  );
};

export default Cart;
