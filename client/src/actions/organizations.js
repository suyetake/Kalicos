import axios from 'axios'
import { serverUrl } from './constants'

const RECEIVE_ALL_ORGANIZATIONS = 'RECEIVE_ALL_ORGANIZATIONS'
const RECEIVE_ADDED_ORGANIZATION = 'RECEIVE_ADDED_ORGANIZATION'
const RECEIVE_UDPATED_ORGANIZATION = 'RECEIVE_UDPATED_ORGANIZATION'
const RECEIVE_ORGANIZATIONS_BY_LOCATION = 'RECEIVE_ORGANIZATIONS_BY_LOCATION'


// Pull all accepted organizations
const receiveAllOrganizations = (data) => {
	return {
		type: RECEIVE_ALL_ORGANIZATIONS,
		organizations: data
	}
}

const getAllOrganizations = () => {
	return (dispatch) => {
		return axios.get(serverUrl + 'api/organizations')
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => dispatch(receiveAllOrganizations(data))
		)
	}
}

// Pull accepted organizations by location search
const receiveOrganizationsByLocation = (data) => {
	return {
		type: RECEIVE_ORGANIZATIONS_BY_LOCATION,
		organizations: data
	}
}

const getOrganizationsByLocation = (address) => {
	return (dispatch) => {
		return axios.get(serverUrl + 'api/organization', { 
			params: {
			  address,
			  distance: 5
			}
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => {
				// increase distance to 10 miles if no results
				if (data.length === 0) {
					return axios.get(serverUrl + 'api/organization', { 
						params: {
						  address,
						  distance: 10
						}
					})
					.then(
						response => response.data,
						error => console.log('A request error occurred', error)
					)
					.then(
						data => {
							// increase distance to 25 miles if no results returned
							if (data.length === 0) {
								return axios.get(serverUrl + 'api/organization', { 
									params: {
									  address,
									  distance: 25
									}
								})
								.then(
									response => response.data,
									error => console.log('A request error occurred', error)
								)
								.then(
									data => {
										// increase distance to 50 miles if no results returned
										if (data.length === 0) {
											return axios.get(serverUrl + 'api/organization', { 
												params: {
												  address,
												  distance: 50
												}
											})
											.then(
												response => response.data,
												error => console.log('A request error occurred', error)
											)
											.then(
												data => dispatch(receiveOrganizationsByLocation(data))
											)
										} else {
											dispatch(receiveOrganizationsByLocation(data))
										}
									}
								)
							} else {
								dispatch(receiveOrganizationsByLocation(data))
							}
						} 
					)
				} else {
					dispatch(receiveOrganizationsByLocation(data))
				}
			}
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
		return axios.post(serverUrl + 'api/organization', {
			name,
			category,
			description,
			address
		})
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
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
		return axios.put(serverUrl + 'api/updateorganization', updates)
		.then(
			response => response.data,
			error => console.log('A request error occurred', error)
		)
		.then(
			data => dispatch(receiveUpdatedOrganization(data[0]))
		)
	}
}



export { 
	getAllOrganizations, 
	RECEIVE_ALL_ORGANIZATIONS, 
	getOrganizationsByLocation,
	RECEIVE_ORGANIZATIONS_BY_LOCATION,
	addOrganization,
	receiveAddedOrganization,
	RECEIVE_ADDED_ORGANIZATION, 
	updateOrganization, 
	RECEIVE_UDPATED_ORGANIZATION, 
	receiveUpdatedOrganization,
}

