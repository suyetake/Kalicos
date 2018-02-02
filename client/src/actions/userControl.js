import axios from 'axios'
import { serverUrl } from './constants'

const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN'
const SET_MAP_CENTER = 'SET_MAP_CENTER'
const SET_SELECTED_MODAL = 'SET_SELECTED_MODAL'
const LOGOUT_USER = 'LOGOUT_USER'

// set google map center by geocoded entered address or zip
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

// login user
const receiveUserLogin = (user) => {
	return {
		type: RECEIVE_USER_LOGIN,
		user
	}
}

const loginUser = (username, password) => {
	return (dispatch) => {
		return axios.post(serverUrl + 'login', {
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

// logout user
const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}

// create user account on admin page 
const createUser = ({username, email, password, accessLevel}) => {
	return (dispatch) => {
		return axios.post(serverUrl + 'api/createUser', {
			username,
			email,
			password,
			accessLevel
	})
	.then(
		response => console.log(response))
	}
}


export { 
	SET_MAP_CENTER,
	setMapCenter,
	SET_SELECTED_MODAL,
	setSelectedModal,
	RECEIVE_USER_LOGIN,
	loginUser,
	logoutUser,
	LOGOUT_USER,
	createUser
}
