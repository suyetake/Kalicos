import axios from 'axios'

const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN'
const SET_MAP_CENTER = 'SET_MAP_CENTER'
const SET_SELECTED_MODAL = 'SET_SELECTED_MODAL'

const setMapCenter = (mapCenter) => ({
	type: SET_MAP_CENTER,
	mapCenter
})
const setSelectedModal = (id) => ({
	type: SET_SELECTED_MODAL,
	id
})
const receiveUserLogin = (user) => ({
	type: RECEIVE_USER_LOGIN,
	user
})


export { 
	setMapCenter,
	SET_MAP_CENTER,
	setSelectedModal,
	SET_SELECTED_MODAL,
	receiveUserLogin,
	RECEIVE_USER_LOGIN
}
