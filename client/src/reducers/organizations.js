import { RECEIVE_ALL_ORGANIZATIONS } from '../actions/organizations'

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
		case RECEIVE_ALL_ORGANIZATIONS:
			return [
				...state,
				...action.data
			]
		default:
			return state;
	}
};

export default organizationsReducer;