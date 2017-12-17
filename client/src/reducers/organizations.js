import { RECEIVE_ALL_ORGANIZATIONS, RECEIVE_ADDED_ORGANIZATION, RECEIVE_UDPATED_ORGANIZATION } from '../actions/organizations'

const organizationsReducerDefaultState = [];

const organizationsReducer = (state = organizationsReducerDefaultState, action) => {
	switch (action.type) {
		case RECEIVE_ADDED_ORGANIZATION:
			return [
				...state,
				action.organization
			]
		case RECEIVE_UDPATED_ORGANIZATION:
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
				...action.organizations
			]
		default:
			return state;
	}
};

export default organizationsReducer;