import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { editOrganization } from '../actions/organizations'

const EditOrganizationPage = (props) => {
	return (
		<div>
			<p>Edit organization page: {props.match.params.id}</p>
			<OrganizationForm 
				organization={props.organization}
				onSubmit={(organization) => {
					props.dispatch(editOrganization(props.match.params.id, organization))
				}}
			/>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	return {
		organization: state.organizations.find((organization) => organization.id === props.match.params.id)
	}
}

export default connect(mapStateToProps)(EditOrganizationPage)