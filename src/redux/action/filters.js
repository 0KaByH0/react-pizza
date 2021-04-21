export const setCategories = (index) => ({
  type: 'SET_CATEGORIES',
  payload: index,
});

export const setSort = (type, order) => ({
  type: 'SET_SORT',
  payload: {
    type,
    order,
  },
});
