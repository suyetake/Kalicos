import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { editOrganization } from '../actions/organizations'
// import { loadEditData } from '../actions/userControls'


class EditOrganizationPage extends React.Component {
	render() {
		let props = this.props
		return (
			<div>	
				<p>Edit organization page: {props.match.params.id}</p>
				<OrganizationForm 
					organization={props.organization}
					onSubmit={(organization) => {
						console.log('in edit', props.match.params.id, organization)
						props.dispatch(editOrganization(props.match.params.id, organization))
					}}
					match={parseInt(props.match.params.id, 10)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		organization: state.organizations.find((organization) => organization.id === props.match.params.id)
	}
}


export default connect(mapStateToProps)(EditOrganizationPage)