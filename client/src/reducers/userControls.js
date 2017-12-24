import { 
	SET_MAP_CENTER,
	SET_SELECTED_MODAL,
	RECEIVE_USER_LOGIN
} from '../actions/userControls'

const userControlsReducerDefaultState = {
	mapCenter: {
		lat: 40.0149856,
		lng: -105.2705456
	},
	modal: '',
	user: null
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
		default:
			return state
	}
}

export default userControlsReducer
