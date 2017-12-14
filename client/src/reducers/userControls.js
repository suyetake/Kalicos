const userControlsReducerDefaultState = {
	mapCenter: {
		lat: 40.0149856,
		lng: -105.2705456
	},	
	modal: ''
}

const userControlsReducer = (state = userControlsReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_MAP_CENTER':
			return {
				...state,
				mapCenter: action.mapCenter
			}
		case 'SET_SELECTED_MODAL':
			return {
				...state,
				modal: action.id
			}
		default:
			return state
	}
}

export default userControlsReducer
