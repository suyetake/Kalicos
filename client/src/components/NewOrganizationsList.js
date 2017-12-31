import React from 'react'
import { connect } from 'react-redux'
import { acceptNewOrganization, removeNewOrganization } from '../actions/newOrganizations'


const NewOrganizationsList = (props) => (
	<div>
		<p>test</p>
		{props.newOrganizations.map(organization => {
			return (
				<p>{organization.name} {organization.description} {organization.address} <button onClick={() => {props.dispatch(acceptNewOrganization(organization._id))}}></button></p>
			)
		})}
	</div>
)
	

const mapStateToProps = (state, props) => {
  return {
  	newOrganizations: state.newOrganizations,
  }
}

export default connect(mapStateToProps)(NewOrganizationsList)