import { 
	SET_MAP_CENTER,
	SET_SELECTED_MODAL,
	RECEIVE_USER_LOGIN,
	LOGOUT_USER
} from '../actions/userControls'

const userControlsReducerDefaultState = {
	mapCenter: {
		lat: 40.0149856,
		lng: -105.2705456
	},
	modal: '',
	user: {
		accessLevel: '',
		email: '',
		username: ''
	}
}

const userControlsReducer = (state = userControlsReducerDefaultState, action) => {
	switch (action.type) {
		case SET_MAP_CENTER:
			return {
				...state,
				mapCenter: action.mapCenter
			}
		case SET_SELECTED_MODAL:
			return {
				...state,
				modal: action.id
			}
		case RECEIVE_USER_LOGIN:
			return {
				...state,
				user: action.user
			}
		case LOGOUT_USER:
			return {
				...state,
				user: {
					accessLevel: '',
					email: '',
					username: ''
				}
			}
		default:
			return state
	}
}

export default userControlsReducer
