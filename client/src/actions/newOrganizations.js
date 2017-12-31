import axios from 'axios'

const RECEIVE_NEW_ORGANIZATIONS = 'RECEIVE_NEW_ORGANIZATIONS'

// Pull newly added organizations
const receiveNewOrganizations = (data) => {
	return {
		type: RECEIVE_NEW_ORGANIZATIONS,
		newOrganizations: data
	}
}

const getNewOrganizations = () => {
	return (dispatch) => {
		return axios.get('http://localhost:4000/api/neworganizations')
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveNewOrganizations(data))
		)
	}
}

const acceptNewOrganization = (id) => {
	return (dispatch) => {
		return axios.put('http://localhost:4000/api/updateneworganization', {
			id
		})
		.then(response => response)
		error => console.log('A request error occurred', error)
	}
}

const rejectNewOrganization = (id) => {
	return (dispatch) => {
		return axios.put('http://localhost:4000/api/removeorganization', {
			params: {
				id
			}
		})
		// .then()
	}
}


export {
	RECEIVE_NEW_ORGANIZATIONS,
	getNewOrganizations,
	acceptNewOrganization,
	rejectNewOrganization
}