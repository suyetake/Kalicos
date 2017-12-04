import React from 'react'
import { connect } from 'react-redux'
import { mapsApiKey } from '../config'
import OrganizationForm from './OrganizationForm'
import { addOrganization } from '../actions/organizations'
// import selectOrganizations from '../selectors/organizations'
import GoogleMapReact from 'google-map-react'



const AddOrganizationPage = (props) => (
	<div>
		<OrganizationForm 
			onSubmit={(organization) => {
	        	props.dispatch(addOrganization(organization))
	      }}
		/>
	{/* GoogleMapReact must be present for google.maps to be passed up */}
		<GoogleMapReact
	        center={{ lat: 40.0150, lng: -105.2705 }}
	        defaultZoom={ 11 }
	        bootstrapURLKeys={{ key: mapsApiKey }}>
	    </GoogleMapReact>
	</div>
)

export default connect()(AddOrganizationPage)