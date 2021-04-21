const initialState = {
  category: 0,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};

export default function filterSort(state = initialState, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_SORT':
      return {
        ...state,
        sortBy: {
          type: action.payload.type,
          order: action.payload.order,
        },
        isLoaded: false,
      };
    default:
      return state;
  }
}
