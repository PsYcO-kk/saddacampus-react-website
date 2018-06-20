const roleReducerDefaultState = { type: sessionStorage.getItem('admin-role') };

const roleReducer = (state = roleReducerDefaultState, action) => {
	switch(action.type){
		case 'UPDATE_ROLE':
			return { ...state, type: sessionStorage.getItem('admin-role') };
		default:
			return state;
	}
};

export default roleReducer;
