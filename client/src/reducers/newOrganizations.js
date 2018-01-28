import { 
	RECEIVE_NEW_ORGANIZATIONS, 
	REMOVE_FROM_NEW_ORGANIZATION
} from '../actions/newOrganizations'

const newOrganizationsReducerDefaultState = []

const newOrganizationsReducer = (state = newOrganizationsReducerDefaultState, action) => {
	switch (action.type) {
		case RECEIVE_NEW_ORGANIZATIONS:
			return [
				...action.newOrganizations
			]
		case REMOVE_FROM_NEW_ORGANIZATION:
			return state.filter(({_id}) => _id !== action._id)
		default:
			return state
	}
}

export default newOrganizationsReducer