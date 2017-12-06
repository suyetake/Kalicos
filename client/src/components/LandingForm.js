import React from 'react'
import { Field, reduxForm } from 'redux-form'


let LandingForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<Field 
					name="mapCenter"
					component="input"
					type="text"
					placeholder="Enter your location"
				/>
			</form>
		</div>
	)
}

LandingForm = reduxForm({
  form: 'landingForm'
})(LandingForm)

export default LandingForm