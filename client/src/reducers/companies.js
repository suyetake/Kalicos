const companiesReducerDefaultState = [];

const companiesReducer = (state = companiesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_COMPANY':
			return [
				...state,
				action.company
			]
		default:
		return state;
	}
};

export default companiesReducer;