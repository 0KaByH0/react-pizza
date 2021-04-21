export const addPizzaToCart = (pizza) => ({
  type: 'ADD_PIZZA',
  payload: pizza,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const deletePizzaFromCart = (id) => ({
  type: 'DELETE_PIZZA',
  payload: id,
});

export const removeItemFromCart = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});
