import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from '../style.js';

const Categories = React.memo(function Categories({ items, onHandleClick, activeCategory }) {
  const classes = useStyles();

  return (
    <>
      <List className={classes.buttonLayoutWrapper}>
        {items.map((name, index) => (
          <ListItem
            className={classes.buttons}
            selected={activeCategory === index ? true : false}
            key={`${name}_${index}`}
            button
            onClick={() => onHandleClick(index)}>
            {name}
          </ListItem>
        ))}
      </List>
    </>
  );
});

export default Categories;
