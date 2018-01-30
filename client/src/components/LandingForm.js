import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LandingForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<Field 
					name="address"
					component="input"
					type="text"
					placeholder="Enter your location"
				/>
         		 <button type="submit">GO!</button>
			</form>
		</div>
	)
}

LandingForm = reduxForm({
  form: 'landingForm'
})(LandingForm)

export default LandingForm