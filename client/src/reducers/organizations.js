const organizationsReducerDefaultState = [];

const organizationsReducer = (state = organizationsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_ORGANIZATION':
			return [
				...state,
				action.organization
			]
		case 'EDIT_ORGANIZATION':
			return state.map((organization) => {
				if (organization.id === action.id) {
					return {
						...organization,
						...action.updates
					}
				} else {
					return organization
				}
			})
		default:
			return state;
	}
};

export default organizationsReducer;