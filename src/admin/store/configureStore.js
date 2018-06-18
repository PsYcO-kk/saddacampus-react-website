import { createStore } from 'redux';

const roleReducer = (state = { role: sessionStorage.getItem('admin-role') }, action) => {
	switch(action.type){
		default:
			return state;
	}
}

export default() => {
	const store = createStore(
		roleReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
