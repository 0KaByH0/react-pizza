import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import PizzaBlock from './PizzaBlock';

import { addPizzaToCart } from '../redux/action/cart';

const Content = React.memo(function Content() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizza }) => pizza.items);
  const cart = useSelector(({ cart }) => cart);

  const onClickAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <>
      <Container style={{ margin: '20px 0' }}>
        <Typography variant="h4">Все пиццы</Typography>
      </Container>
      <Container maxWidth="lg" style={{ minHeight: 500 }}>
        <Grid container spacing={4} direction="row" justify="flex-start" alignItems="center">
          {pizzas &&
            pizzas.map((pizza, pizza_index) => (
              <Grid key={`${pizza.name}_${pizza_index}`} item xs={6} sm={4} md={3}>
                <PizzaBlock
                  {...pizza}
                  pizzaAmount={cart.items[pizza.id] && cart.items[pizza.id].item.length}
                  onClickAddPizza={onClickAddPizzaToCart}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
});

export default Content;
