const organizationsReducerDefaultState = [];

const organizationsReducer = (state = organizationsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_ORGANIZATION':
			return [
				...state,
				action.organization
			]
		default:
		return state;
	}
};

export default organizationsReducer;