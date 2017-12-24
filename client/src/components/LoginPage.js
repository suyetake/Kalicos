import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'


class LoginPage extends React.Component {


	handleSubmit = (login) => {
		console.log(login)
		// this.props.dispatch(getOrganizationsByLocation(search.address, search.distance))
		// geocodeAddress(search.address)
		// 	.then(latLng => this.props.dispatch(setMapCenter(latLng)))
		// this.props.history.push('/maps')
	}
	render() {
		return (
			<div>
				<LoginForm 
					onSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default connect()(LoginPage)
