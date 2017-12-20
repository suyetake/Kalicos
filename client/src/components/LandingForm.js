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
				<label>Miles</label>
				<Field 
					name="distance"
					component="select"
				>
					<option></option>
					<option value="1">1</option>
		            <option value="5">5</option>
		            <option value="10">10</option>
         		 </Field>
         		 <button type="submit">Search</button>
			</form>
		</div>
	)
}

LandingForm = reduxForm({
  form: 'landingForm'
})(LandingForm)

export default LandingForm