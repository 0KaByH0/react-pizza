const initialState = {
  items: {},
  totalPrice: 0,
  totalPizzas: 0,
};

const allPizzas = (obj) => [].concat.apply([], Object.values(obj));

const pizzaAmount = (obj, id) => allPizzas(obj).find((el) => el.item[0].id === id).item.length;
const allPizzaAmount = (obj) =>
  Object.keys(obj).length
    ? allPizzas(obj)
        .map((i) => i.item.length)
        .reduce((sum = 0, el) => el + sum)
    : 0;

const getPizzaPrice = (amount, price) => amount * price;
const getAllPizzaPrice = (obj) =>
  allPizzas(obj)
    .map((i) => i.item)
    .flat()
    .map((i) => i.price)
    .reduce((a, b) => a + b, 0);

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA':
      let newObj = {
        ...state.items,
        [action.payload.id]: {
          item: state.items[action.payload.id]
            ? [...state.items[action.payload.id].item, action.payload]
            : [action.payload],
        },
      };

      newObj[action.payload.id].pizzaAmount = pizzaAmount(newObj, action.payload.id);
      newObj[action.payload.id].pizzaPrice = getPizzaPrice(
        pizzaAmount(newObj, action.payload.id),
        action.payload.price,
      );

      return {
        items: newObj,
        totalPrice: getAllPizzaPrice(newObj),
        totalPizzas: allPizzaAmount(newObj),
      };

    case 'DELETE_PIZZA':
      console.log(state.items);
      let tempObj = {
        ...state.items,
        [action.payload.id]: {
          item:
            state.items[action.payload.id].item.length > 1
              ? state.items[action.payload.id].item.slice(
                  0,
                  state.items[action.payload.id].item.length - 1,
                )
              : state.items[action.payload.id].item,
        },
      };
      tempObj[action.payload.id].pizzaAmount = pizzaAmount(tempObj, action.payload.id);
      tempObj[action.payload.id].pizzaPrice = getPizzaPrice(
        pizzaAmount(tempObj, action.payload.id),
        action.payload.price,
      );

      return {
        items: tempObj,
        totalPrice: getAllPizzaPrice(tempObj),
        totalPizzas: allPizzaAmount(tempObj),
      };

    case 'REMOVE_ITEM':
      delete state.items[action.payload];
      const newItems = { ...state.items };

      return {
        items: { ...state.items },
        totalPrice: newItems ? getAllPizzaPrice(newItems) : 0,
        totalPizzas: newItems ? allPizzaAmount(newItems) : 0,
      };

    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        totalPizzas: 0,
        items: {},
      };
    default:
      return state;
  }
}
