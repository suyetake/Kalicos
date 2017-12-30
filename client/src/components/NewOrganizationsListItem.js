import React from 'react'
import { connect } from 'react-redux'


const NewOrganizationsListItem = (props) => (
	<div>
		<p>test</p>
		{props.newOrganizations.map(organization => {
			return (
				<p>
					{organization.name}
					{organization.description}
					{organization.address}
				</p>
			)
		})}
	</div>
)
	

const mapStateToProps = (state, props) => {
  return {
  	newOrganizations: state.newOrganizations,
  }
}

export default connect(mapStateToProps)(NewOrganizationsListItem)