import React from 'react'
import { connect } from 'react-redux'
import { userLogout } from '../actions/userControls'
import selectOrganizations from '../selectors/organizations'

const AdminPage = (props) => (
	<div>
		<p>Welcome {props.user.username}!</p>
	</div>
)

const mapStateToProps = (state, props) => {
  return {
  	visibleOrganizations: selectOrganizations(state.organizations, state.filters),
    user: state.userControls.user
  }
}

export default connect(mapStateToProps)(AdminPage)