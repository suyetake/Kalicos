import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import selectOrganizations from '../selectors/organizations'
import { createUser, findUserForUpdate, updateUser, clearUserForUpdate } from '../actions/userControl'
import { getNewOrganizations } from '../actions/newOrganizations'
import SignUpForm from './SignUpForm'
import FindUserForm from './FindUserForm'
import UpdateUserForm from './UpdateUserForm'
import NewOrganizationsList from './NewOrganizationsList'




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
		this.props.dispatch(createUser(user))
		this.props.dispatch(reset('signUpForm'))
	}

	handleFindUserSubmit = (user) => {
		this.props.dispatch(findUserForUpdate(user.email))
		this.props.dispatch(reset('findUserForm'))
	}

	handleUpdateUserSubmit = (user) => {
		this.props.dispatch(updateUser(user))
		this.props.dispatch(clearUserForUpdate())
		this.props.dispatch(reset('updateUserForm'))
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
					<UpdateUserForm
						updatingUser={this.props.updatingUser}
						onSubmit={this.handleUpdateUserSubmit}
					/>
				</div>
				<button onClick={this.pullNewOrgs}>show new orgs</button>
				<div>
					{this.props.newOrganizations.map(organization => {
						return <NewOrganizationsList key={organization._id} organization={organization} {...organization} />
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  return {
  	visibleOrganizations: selectOrganizations(state.organizations, state.filters),
  	newOrganizations: state.newOrganizations,
    user: state.userControl.user,
    updatingUser: state.userControl.updatingUser
  }
}

export default connect(mapStateToProps)(AdminPage)