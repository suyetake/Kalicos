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


export {
	RECEIVE_NEW_ORGANIZATIONS,
	getNewOrganizations
}