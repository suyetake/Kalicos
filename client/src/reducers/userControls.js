const userControlsReducerDefaultState = {
	mapCenter: {
		lat: 40.0149856,
		lng: -105.2705456
	},	
	modal: undefined,
	editOrg: undefined
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
		case 'LOAD_EDIT_DATA':
			return {
				...state,
				editOrg: action.num
			}
		default:
			return state
	}
}

export default userControlsReducer