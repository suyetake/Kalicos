import axios from 'axios'
import { serverUrl } from './constants'
import { receiveAddedOrganization } from './organizations'

const RECEIVE_NEW_ORGANIZATIONS = 'RECEIVE_NEW_ORGANIZATIONS'
const REMOVE_FROM_NEW_ORGANIZATION = 'REMOVE_FROM_NEW_ORGANIZATION'

// Pull newly added organizations
const receiveNewOrganizations = (data) => {
	return {
		type: RECEIVE_NEW_ORGANIZATIONS,
		newOrganizations: data
	}
}

const getNewOrganizations = () => {
	return (dispatch) => {
		return axios.get(serverUrl + 'api/neworganizations')
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => dispatch(receiveNewOrganizations(data))
		)
	}
}

// admin acceptance of new organization. updates org in db and adds to orgs array on map
const acceptNewOrganization = (organization) => {
	return (dispatch) => {
		return axios.put(serverUrl + 'api/acceptnew', {
			_id: organization._id
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			dispatch(receiveAddedOrganization(organization)),
			dispatch(removeFromNewOrganization(organization._id))
		)
	}
}

// remove organization from newOrganizations array when accepted or rejected
const removeFromNewOrganization = (_id) => {
	return {
		type: REMOVE_FROM_NEW_ORGANIZATION,
		_id
	}
}

// remove new organization from db and app
const rejectNewOrganization = (_id) => {
	console.log('reject', _id, )
	return (dispatch) => {
		return axios.delete(serverUrl + 'api/removeorganization', {
			data: {
				_id
			}     
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			dispatch(removeFromNewOrganization(_id))
		)
	}
}



export {
	RECEIVE_NEW_ORGANIZATIONS,
	getNewOrganizations,
	acceptNewOrganization,
	REMOVE_FROM_NEW_ORGANIZATION,
	rejectNewOrganization,
}