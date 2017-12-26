import axios from 'axios'

const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN'
const SET_MAP_CENTER = 'SET_MAP_CENTER'
const SET_SELECTED_MODAL = 'SET_SELECTED_MODAL'
const LOGOUT_USER = 'LOGOUT_USER'

const setMapCenter = (mapCenter) => {
	return {
		type: SET_MAP_CENTER,
		mapCenter
	}
}
const setSelectedModal = (id) => {
	return {
		type: SET_SELECTED_MODAL,
		id
	}
}
const receiveUserLogin = (user) => {
	return {
		type: RECEIVE_USER_LOGIN,
		user
	}
}

const userLogin = (username, password) => {
	return (dispatch) => {
		return axios.post('http://localhost:4000/login', {
			username,
			password
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveUserLogin(data))
		)
	}
}

const userLogout = () => {
	return {
		type: LOGOUT_USER
	}
}


export { 
	SET_MAP_CENTER,
	setMapCenter,
	SET_SELECTED_MODAL,
	setSelectedModal,
	RECEIVE_USER_LOGIN,
	userLogin,
	userLogout,
	LOGOUT_USER
}
