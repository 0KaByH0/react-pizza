import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';

import AddIcon from '@material-ui/icons/Add';

import { useStyles } from '../style';

const availebleType = [
  { id: 0, name: 'тонкое' },
  { id: 1, name: 'традиционое' },
];
const availebleSize = [
  { id: 0, size: 26 },
  { id: 1, size: 30 },
  { id: 2, size: 40 },
];

const PizzaBlock = ({ id, name, types, sizes, price, imageUrl, onClickAddPizza, pizzaAmount }) => {
  const [activePizzaType, setActivePizzaType] = useState(types[0]);

  const [activePizzaSize, setActivePizzaSize] = useState(sizes[0]);

  const classes = useStyles();

  function onHandleTypeChange(index) {
    setActivePizzaType(index);
  }

  function onHandleSizeChange(index) {
    setActivePizzaSize(index);
  }

  function onHandleCounterChange() {
    onClickAddPizza({
      id,
      name,
      type: availebleType[activePizzaType].name,
      size: activePizzaSize,
      price,
      imageUrl,
    });
  }

  return (
    <>
      <Card elevation={0}>
        <CardMedia style={{ paddingTop: '100%' }} image={imageUrl} />
        <CardContent style={{ padding: '12px 2px' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              textAlign: 'center',
              fontSize: '19px',
              fontWeight: 900,
              letterSpacing: '1%',
              minHeight: '45px',
              padding: '10px 0px 0px 0px',
            }}>
            {name}
          </Typography>
        </CardContent>
        <CardActions className={classes.pizzaBlockSelector}>
          <Grid container>
            <Grid container className={classes.pizzaBlockSelectorFirstWrapper}>
              {availebleType.map((el, index) => (
                <ListItem
                  key={`${el.name}_${index}`}
                  className={classes.pizzaBlockSelectorFirstRow}
                  button
                  disabled={!types.includes(index)}
                  selected={activePizzaType === index}
                  onClick={() => onHandleTypeChange(index)}>
                  {el.name}
                </ListItem>
              ))}
            </Grid>
            <Grid className={classes.pizzaBlockSelectorSecWrapper} container>
              {availebleSize.map((el, index) => (
                <ListItem
                  key={`${el.id}_${index}`}
                  className={classes.pizzaBlockSelectorSecondRow}
                  selected={activePizzaSize === el.size}
                  disabled={!sizes.includes(el.size)}
                  onClick={() => onHandleSizeChange(el.size)}
                  button>
                  {el.size} cм.
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Grid container className={classes.pizzaBlockBottom}>
        <Box className={classes.pizzaPrice}>от {price}&nbsp;₽</Box>
        <Button onClick={onHandleCounterChange} className={classes.pizzaButtonAdd}>
          <AddIcon
            style={{
              height: '25px',
              fontWeight: 800,
              fontSize: '22px',
              position: 'relative',
              right: '5px',
            }}
          />
          <span>Добавить</span>

          {pizzaAmount ? <i>{pizzaAmount}</i> : null}
        </Button>
      </Grid>
    </>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default PizzaBlock;
