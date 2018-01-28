import React from 'react'
import { connect } from 'react-redux'
import OrganizationForm from './OrganizationForm'
import { addOrganization } from '../actions/organizations'
import { reset } from 'redux-form'


class AddOrganizationPage extends React.Component {

	componentWillMount () {
		if (this.props.user.accessLevel !== 'admin') {
			this.props.history.push('/')
		} 
	}

	handleSubmit = (organization) => {
  			this.props.dispatch(addOrganization({
				...organization
			}))
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

const mapStateToProps = (state, props) => {
	return {
		user: state.userControl.user
	}
}

export default connect(mapStateToProps)(AddOrganizationPage)