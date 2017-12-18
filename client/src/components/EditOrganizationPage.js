import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { updateOrganization } from '../actions/organizations'


class EditOrganizationPage extends React.Component {
	render() {
		let props = this.props
		return (
			<div>
				<p>Edit organization page: {props.match.params.id}</p>
				<OrganizationForm
					organization={props.organization}
					onSubmit={(organization) => {
			  			this.props.dispatch(updateOrganization(
			  				{...organization}
			  			))
					}}
					match={parseInt(props.match.params._id, 10)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		organization: state.organizations.find((organization) => organization._id === props.match.params.id)
	}
}


export default connect(mapStateToProps)(EditOrganizationPage)