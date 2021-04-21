import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';

import { useStyles } from '../style';
import { Link } from 'react-router-dom';

function EmptyCart() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.wrapperEmptyCart} maxWidth="sm">
        <Typography className={classes.titleEmptyCart}>Корзина пустая 😕</Typography>
        <Typography className={classes.textEmptyCart}>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейдите на
          главную страницу.
        </Typography>
        <Link className={classes.linkEmptyCart} to="/">
          <Button className={classes.buttonEmptyCart}>Вернуться назад</Button>
        </Link>
      </Container>
    </>
  );
}

EmptyCart.propTypes = {};

export default EmptyCart;
