import React from 'react'
import { connect } from 'react-redux'
import GeocodeAddress from './GeocodeAddress'
import { addOrganization } from '../actions/organizations'


const AddOrganizationPage = (props) => (
	    	<div>
		    	<GeocodeAddress 
		    		onSubmit={(org) => {
		    			props.dispatch(addOrganization(org))
		    		}} 
		    	/>
			</div>
)

export default connect()(AddOrganizationPage)