import axios from 'axios';

export const setLoaded = (value) => ({
  type: 'SET_LOADED',
  payload: value,
});

export const fetchPizzas = (category, type, order) => (dispatch) => {
  dispatch(setLoaded(false));

  // for develop
  axios(
    `http://localhost:3001/pizzas${
      category === 0 ? `?` : `?category=${category}&`
    }_sort=${type}&_order=${order}`,
  ).then(({ data }) => dispatch(setPizzas(data)));

  // for production
  // axios
  //   .get(`/pizzas${category === 0 ? `?` : `?category=${category}&`}_sort=${type}&_order=${order}`)
  //   .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
