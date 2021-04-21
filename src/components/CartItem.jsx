import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { useStyles } from '../style';

function CartItem({
  id,
  name,
  type,
  size,
  price,
  imageUrl,
  pizzaAmount,
  pizzaPrice,
  onDelete,
  onAdd,
  onRemove,
}) {
  const classes = useStyles();
  const itemPayload = { id, name, type, size, price, imageUrl };

  const handleDelete = () => {
    onDelete({ id, name, type, size, price, imageUrl });
  };

  const handleAdd = () => {
    onAdd({ id, name, type, size, price, imageUrl });
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <>
      <Grid
        style={{ borderTop: '1px solid rgb(230 229 229)', paddingTop: '30px', marginTop: '30px' }}
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid className={classes.cartItemImageWrapper} item>
          <Avatar className={classes.cartItemImage} alt={name} src={imageUrl} />
        </Grid>
        <Grid className={classes.cartItemNameWrapper} item>
          <Typography>{name}</Typography>
          <Typography>
            {type}, {size} см.
          </Typography>
        </Grid>
        <Grid className={classes.cartItemButtonsWrapper} item>
          <Button onClick={handleDelete}>-</Button>
          <Typography>{pizzaAmount}</Typography>
          <Button onClick={handleAdd}>+</Button>
        </Grid>
        <Grid className={classes.cartItemPriceWrapper} item>
          <Typography>{pizzaPrice} ₽</Typography>
        </Grid>
        <Grid className={classes.cartItemDeleteButtonWrapper} item>
          <Button onClick={handleRemove}>x</Button>
        </Grid>
      </Grid>
    </>
  );
}

CartItem.propTypes = {};

export default CartItem;
