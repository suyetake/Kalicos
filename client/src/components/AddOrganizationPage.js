import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { addOrganization } from '../actions/organizations'
import { geocodeAddress } from '../utils'
import {reset} from 'redux-form';


class AddOrganizationPage extends React.Component {

	handleSubmit = (organization) => {
		geocodeAddress(organization.address)
  			.then(latLng => this.props.dispatch(addOrganization({
				...organization,
				lat: latLng.lat,
				lng: latLng.lng
			})))
  		this.props.dispatch(reset('organizationForm'))
	}
	render() {
		return (
	    	<div>
	    		<OrganizationForm 
		    		onSubmit={this.handleSubmit} 
		    	/>
			</div>
		)
	}
}

export default connect()(AddOrganizationPage)