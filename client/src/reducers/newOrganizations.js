import { 
	RECEIVE_NEW_ORGANIZATIONS, 
} from '../actions/newOrganizations'

const newOrganizationsReducerDefaultState = [];

const newOrganizationsReducer = (state = newOrganizationsReducerDefaultState, action) => {
	switch (action.type) {
		case RECEIVE_NEW_ORGANIZATIONS:
			return [
				...action.newOrganizations
			]
		default:
			return state;
	}
};

export default newOrganizationsReducer