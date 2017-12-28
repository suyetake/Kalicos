import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userControls'
import { reset } from 'redux-form'
import selectOrganizations from '../selectors/organizations'
import SignUpForm from './SignUpForm'




class AdminPage extends React.Component {

	componentWillMount () {
		if (this.props.user.accessLevel !== 'admin') {
			this.props.history.push('/')
		} 
	}

	// temporary work around until Logout button can do history.push (in Header.js)
	componentDidUpdate () {
		if (this.props.user.accessLevel !== 'admin') {
			this.props.history.push('/')
		} 
	}

	handleSubmit = (user) => {
		// console.log(user)
		this.props.dispatch(createUser(user))
		this.props.dispatch(reset('signUpForm'))
	}

	render() {
		return (
			<div>
				<div>
					<p>Welcome {this.props.user.username}!</p>
				</div>
				<div>
					<SignUpForm 
						onSubmit={this.handleSubmit}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  return {
  	visibleOrganizations: selectOrganizations(state.organizations, state.filters),
    user: state.userControls.user
  }
}

export default connect(mapStateToProps)(AdminPage)