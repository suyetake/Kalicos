import React from 'react'
import { connect } from 'react-redux'
import LandingForm from './LandingForm'
import { geocodeAddress } from '../utils'
import { setMapCenter } from '../actions/userControls'


class LandingPage extends React.Component {


	handleSubmit = (location) => {
		geocodeAddress(location.location)
			.then(latLng => this.props.dispatch(setMapCenter(latLng)))
		this.props.history.push('/maps')
	}
	render() {
		return (
			<LandingForm 
				onSubmit={this.handleSubmit}
			/>		
		)
	}
}

export default connect()(LandingPage)
