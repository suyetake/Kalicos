import axios from 'axios'


const RECEIVE_ALL_ORGANIZATIONS = 'RECEIVE_ALL_ORGANIZATIONS'
const RECEIVE_ADDED_ORGANIZATION = 'RECEIVE_ADDED_ORGANIZATION'
const RECEIVE_UDPATED_ORGANIZATION = 'RECEIVE_UDPATED_ORGANIZATION'



// Pull all organizations
const receiveAllOrganizations = (data) => {
	return {
		type: RECEIVE_ALL_ORGANIZATIONS,
		organizations: data
	}
}

const getAllOrganizations = () => {
	return (dispatch) => {
		return axios.get('http://localhost:4000/api/organizations')
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveAllOrganizations(data))
		)
	}
}

// Create new organization
const receiveAddedOrganization = (data) => {
	return {
		type: RECEIVE_ADDED_ORGANIZATION,
		organization: data
	}
}

const addOrganization = ({ 
  name = '',
  category = '',
  description = '',
  address = ''
}) => {
	return (dispatch) => {
		return axios.post('http://localhost:4000/api/organization', {
			name,
			category,
			description,
			address
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveAddedOrganization(data[0])),
		)
	}
}

// Update organization
const receiveUpdatedOrganization = (updates) => {
	return {
		type: RECEIVE_UDPATED_ORGANIZATION,
		updates
	}
}

const updateOrganization = (updates) => {
	return (dispatch) => {
		return axios.put('http://localhost:4000/api/update', updates)
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveUpdatedOrganization(data[0]))
		)
	}
}



export { 
	getAllOrganizations, 
	RECEIVE_ALL_ORGANIZATIONS, 
	addOrganization, 
	RECEIVE_ADDED_ORGANIZATION, 
	updateOrganization, 
	RECEIVE_UDPATED_ORGANIZATION, 
	receiveUpdatedOrganization 
}

