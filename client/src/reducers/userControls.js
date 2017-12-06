const userControlsReducerDefaultState = {
	lat: 40.0149856,
	lng: -105.2705456
}

const userControlsReducer = (state = userControlsReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_MAP_CENTER':
			return {
				...state,
				lat: action.lat,
				lng: action.lng
			}
		case 'SET_SELECTED_MODAL':
			return {
				...state,
				modal: action.modal
			}
		default:
			return state
	}
}

export default userControlsReducer