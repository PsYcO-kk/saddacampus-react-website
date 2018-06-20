import { createStore, combineReducers } from 'redux';
import roleReducer from '../reducers/roleReducer';

export default() => {
	const store = createStore(
		combineReducers({
			role: roleReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
