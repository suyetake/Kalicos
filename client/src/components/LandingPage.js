import React from 'react'
import { connect } from 'react-redux'
import LandingForm from './LandingForm'
import { geocodeAddress } from '../utils'
import { setMapCenter } from '../actions/userControl'
import { getOrganizationsByLocation } from '../actions/organizations'


class LandingPage extends React.Component {
	handleSubmit = (search) => {
		this.props.dispatch(getOrganizationsByLocation(search.address))
		geocodeAddress(search.address)
			.then(latLng => this.props.dispatch(setMapCenter(latLng)))
			.then(() => this.props.history.push('/maps'))
	}
	render() {
		return (
			<div>
				<p>Find a charity near</p>
				<LandingForm 
					onSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default connect()(LandingPage)