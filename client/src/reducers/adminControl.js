import {
	RECEIVE_USER_FOR_UPDATE,
	CLEAR_UPDATED_USER,
	RECEIVE_ORGANIZATION_FOR_UPDATE,
	CLEAR_UPDATED_ORGANIZATION
} from '../actions/adminControl'

const adminControlDefaultState = {
	updatingUser: {},
	updatingOrganization: {}
}

const adminControl = (state = adminControlDefaultState, action) => {
	switch (action.type) {
		case RECEIVE_USER_FOR_UPDATE:
			return {
				...state,
				updatingUser: action.user
			}
		case CLEAR_UPDATED_USER:
			return {
				...state,
				updatingUser: {}
			}
		case RECEIVE_ORGANIZATION_FOR_UPDATE:
			return {
				...state,
				updatingOrganization: action.organization
			}
		case CLEAR_UPDATED_ORGANIZATION:
			return {
				...state,
				updatingOrganization: {}
			}
		default:
			return state
	}
}

export default adminControl