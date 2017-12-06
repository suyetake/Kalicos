import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { editOrganization } from '../actions/organizations'


class EditOrganizationPage extends React.Component {
	render() {
		let props = this.props
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