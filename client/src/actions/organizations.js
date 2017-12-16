import uuid from 'uuid'
import axios from 'axios'


const RECEIVE_ALL_ORGANIZATIONS = 'RECEIVE_ALL_ORGANIZATIONS'


const addOrganization = ({
	id = uuid(),
	lat = 0,
	lng = 0,
	name = '',
	category = '',
	description = '',
	address = ''
}) => ({
	type: 'ADD_ORGANIZATION',
	organization: {
		id,
		lat,
		lng,
		name,
		category,
		description,
		address
	}
})

const editOrganization = (id, updates) => ({
	type: 'EDIT_ORGANIZATION',
	id,
	updates
})

const receiveOrganizations = (data) => {
	return {
		type: RECEIVE_ALL_ORGANIZATIONS,
		data: data
	}
}

const getOrganizations = () => {
	return (dispatch) => {
		return axios.get('http://localhost:4000/api/organizations')
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(data => 
			dispatch(receiveOrganizations(data))
		)
	}
}

export { addOrganization, editOrganization, getOrganizations, RECEIVE_ALL_ORGANIZATIONS }

