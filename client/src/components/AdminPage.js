import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import selectOrganizations from '../selectors/organizations'
import { createUser, findUserForUpdate } from '../actions/userControls'
import { getNewOrganizations } from '../actions/newOrganizations'
import SignUpForm from './SignUpForm'
import FindUserForm from './FindUserForm'
import UserUpdateForm from './UserUpdateForm'
import NewOrganizationsListItem from './NewOrganizationsListItem'




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

	handleSignUpSubmit = (user) => {
		// console.log(user)
		this.props.dispatch(createUser(user))
		this.props.dispatch(reset('signUpForm'))
	}

	handleFindUserSubmit = (user) => {
		this.props.dispatch(findUserForUpdate(user.email))
		this.props.dispatch(reset('findUserForm'))
	}

	handleUserUpdateSubmit = (user) => {
		console.log(user)
	}

	pullNewOrgs = () => {
		this.props.dispatch(getNewOrganizations())
	}

	

	render() {
		return (
			<div>
				<div>
					<p>Welcome {this.props.user.username}!</p>
				</div>
				<div>
					<p>Create new user account</p>
					<SignUpForm 
						onSubmit={this.handleSignUpSubmit}
					/>
				</div>
				<br/>
				<p>Find User</p>
				<div>
					<FindUserForm 
						onSubmit={this.handleFindUserSubmit}
					/>
				</div>
				<br/>
				<p>Update Found User</p>
				<div>
					<UserUpdateForm
						updatingUser={this.props.updatingUser}
						onSubmit={this.handleUserUpdateSubmit}
					/>
				</div>
				<button onClick={this.pullNewOrgs}>show new orgs</button>
				<div>
					<NewOrganizationsListItem />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  return {
  	visibleOrganizations: selectOrganizations(state.organizations, state.filters),
    user: state.userControls.user,
    updatingUser: state.userControls.updatingUser
  }
}

export default connect(mapStateToProps)(AdminPage)