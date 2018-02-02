import { 
	SET_MAP_CENTER,
	SET_SELECTED_MODAL,
	RECEIVE_USER_LOGIN,
	LOGOUT_USER
} from '../actions/userControl'

const userControlReducerDefaultState = {
	mapCenter: {
		lat: 40.0149856,
		lng: -105.2705456
	},
	modal: '',
	user: {}
}

const userControlReducer = (state = userControlReducerDefaultState, action) => {
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
				user: {}
			}
		default:
			return state
	}
}

export default userControlReducer
