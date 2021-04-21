import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setSort } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';

import Categories from './Categories';
import SortPopUp from './SortPopUp';

import { useStyles } from '../style';

const categoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const ControlLayout = React.memo(function ControlLayout() {
  const dispatch = useDispatch();
  const filters = useSelector(({ filter }) => filter);
  const classes = useStyles();

  const onHandleCategoryClick = React.useCallback(
    (index) => {
      dispatch(setCategories(index));
      dispatch(fetchPizzas(index, filters.sortBy.type, filters.sortBy.order));
    },
    [filters.sortBy.type, filters.sortBy.order, dispatch],
  );

  const onHandleSortClick = React.useCallback(
    ({ type, order }) => {
      dispatch(setSort(type, order));
      dispatch(fetchPizzas(filters.category, type, order));
    },
    [filters.category, dispatch],
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={classes.buttonLayoutWrapper}>
          <Categories
            items={categoriesNames}
            onHandleClick={onHandleCategoryClick}
            activeCategory={filters.category}
          />
        </div>
        <div className={classes.buttonLayoutWrapper}>
          <SortPopUp
            items={sortItems}
            onHandleSortClick={onHandleSortClick}
            activeSort={filters.sortBy.type}
          />
        </div>
      </div>
    </>
  );
});

export default ControlLayout;
