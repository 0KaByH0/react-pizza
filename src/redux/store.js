import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import pizza from './reducer/pizzaReducer';
import filter from './reducer/filtersReducer';
import cart from './reducer/cartReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ pizza, filter, cart });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
