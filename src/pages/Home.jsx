import React from 'react';

import ControlLayout from '../components/ControlLayout';
import Content from '../components/Content';
import Loader from '../components/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/action/pizzas';

const Home = () => {
  const dispatch = useDispatch();
  const filters = useSelector(({ filter }) => filter);
  const isLoaded = useSelector(({ pizza }) => pizza.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas(filters.category, filters.sortBy.type, filters.sortBy.order));
  }, []);

  return (
    <>
      <ControlLayout />
      {isLoaded ? <Content /> : <Loader />}
    </>
  );
};

export default Home;
