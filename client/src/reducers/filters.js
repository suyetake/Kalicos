const filtersReducerDefaultState = {
	name: '',
	description: '',
	address: '',
	category: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_NAME_FILTER':
			return {
				...state,
				name: action.name
			}
		case 'SET_DESCRIPTION_FILTER':
			return {
				...state,
				description: action.description
			}
		case 'SET_ADDRESS_FILTER':
			return {
				...state,
				address: action.address
			}
		case 'SET_CATEGORY_FILTER':
			return {
				...state,
				category: action.category
			}
		default:
			return state;
	}
};

export default filtersReducer;