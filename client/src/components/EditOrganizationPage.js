import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { editOrganization } from '../actions/organizations'
import { mapsApiKey } from '../config'
import GoogleMapReact from 'google-map-react'

const EditOrganizationPage = (props) => {
	return (
		<div>
		{console.log(props)}
			<p>Edit organization page: {props.match.params.id}</p>
			<OrganizationForm 
				organization={props.organization}
				onSubmit={(organization) => {
					props.dispatch(editOrganization(props.match.params.id, organization))
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
}

const mapStateToProps = (state, props) => {
	return {
		organization: state.organizations.find((organization) => organization.id === props.match.params.id)
	}
}

export default connect(mapStateToProps)(EditOrganizationPage)