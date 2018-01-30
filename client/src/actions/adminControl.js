import axios from 'axios'
import { serverUrl } from './constants'

const RECEIVE_USER_FOR_UPDATE = 'RECEIVE_USER_FOR_UPDATE'
const CLEAR_UPDATED_USER = 'CLEAR_USER_FOR_UPDATE'
const RECEIVE_ORGANIZATION_FOR_UPDATE = 'RECEIVE_ORGANIZATION_FOR_UPDATE'
const CLEAR_UPDATED_ORGANIZATION = 'UPDATED_ORGANIZATION'

// retrieve one user to update on admin page
const findUserForUpdate = (email) => {
	return (dispatch) => {
		console.log('email', email)
		return axios.get(serverUrl + 'api/user', {
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
		type: RECEIVE_USER_FOR_UPDATE,
		user
	}
}

// update user on admin page 
const updateUser = (updates) => {
	return (dispatch) => {
		return axios.put(serverUrl + 'api/updateuser', updates)
		.then(
			response => console.log(response.data),
			error => console.log('A request error occurred', error)
		)
	}
}

const clearUpdatedUser = () => {
	return {
		type: CLEAR_UPDATED_USER,
	}
}

// retrieve one organization to update on admin page
const findOrganizationForUpdate = (name) => {
	return (dispatch) => {
		return axios.get(serverUrl + 'api/oneorganization', {
			params: {
				name
			}
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => dispatch(receiveOrganizationForUpdate(data)))
	}
}

const clearUpdatedOrganization = () => {
	return {
		type: CLEAR_UPDATED_ORGANIZATION
	}
}

const receiveOrganizationForUpdate = (organization) => {
	return {
		type: RECEIVE_ORGANIZATION_FOR_UPDATE,
		organization
	}
}



export { 
	findUserForUpdate,
	RECEIVE_USER_FOR_UPDATE,
	updateUser,
	clearUpdatedUser,
	CLEAR_UPDATED_USER,
	findOrganizationForUpdate,
	clearUpdatedOrganization,
	CLEAR_UPDATED_ORGANIZATION,
	RECEIVE_ORGANIZATION_FOR_UPDATE
}

