import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import characterReducer from './reducers/characters';
import dungeonReducer from './reducers/dungeons';

const rootReducer = combineReducers({
	characters: characterReducer,
	dungeons: dungeonReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
