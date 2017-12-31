import axios from 'axios'

const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN'
const SET_MAP_CENTER = 'SET_MAP_CENTER'
const SET_SELECTED_MODAL = 'SET_SELECTED_MODAL'
const LOGOUT_USER = 'LOGOUT_USER'
const RECEIVEUSERFORUPDATE = 'RECEIVEUSERFORUPDATE'

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

// logout user
const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}

// create user account on admin page 
const createUser= ({username, email, password, accessLevel}) => {
	return (dispatch) => {
		return axios.post('http://localhost:4000/api/createUser', {
			username,
			email,
			password,
			accessLevel
	})
	.then(
		response => console.log(response))
	}
}

// retrieve one user to update on admin page
const findUserForUpdate = (email) => {
	return (dispatch) => {
		console.log('email', email)
		return axios.get('http://localhost:4000/api/user', {
			params: {
				email
			}
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => dispatch(receiveUserForUpdate(data))
		)
	}
}

const receiveUserForUpdate = (user) => {
	return {
		type: RECEIVEUSERFORUPDATE,
		user
	}
}

// update user on admin page 
// const updateUser = () => {
	
// }


export { 
	SET_MAP_CENTER,
	setMapCenter,
	SET_SELECTED_MODAL,
	setSelectedModal,
	RECEIVE_USER_LOGIN,
	loginUser,
	logoutUser,
	LOGOUT_USER,
	createUser,
	findUserForUpdate,
	RECEIVEUSERFORUPDATE
}
