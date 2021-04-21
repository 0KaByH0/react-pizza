import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { useSelector } from 'react-redux';

import logo from '../img/pizza-logo.svg';
import { useStyles } from '../style';

export const Header = () => {
  const classes = useStyles();

  const cart = useSelector(({ cart }) => cart);

  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.logoContent}>
          <Avatar className={classes.avatar} src={logo} alt="PIZZA LOGO"></Avatar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={classes.logoContentText}>
              <Typography variant="h5" color="textPrimary">
                <strong>REACT PIZZA</strong>
              </Typography>
              <Typography color="textSecondary">самая вкусная пицца во вселенной</Typography>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <Button className={classes.shopButton} color="primary" variant="contained">
              <Typography>{cart.totalPrice}₽&nbsp;</Typography>
              <div
                style={{
                  width: 1,
                  height: 25,
                  backgroundColor: '#e7e7e76b',
                  margin: '0 12px',
                }}></div>
              <ShoppingCartOutlinedIcon style={{ height: 18 }}></ShoppingCartOutlinedIcon>
              <Typography>{cart.totalPizzas}</Typography>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
