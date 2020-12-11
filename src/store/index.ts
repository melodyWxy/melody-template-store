import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const middleware = [];

const composeEnhancers =
	(window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(combineReducers({}), composeEnhancers(applyMiddleware(...middleware)));

export default store;
