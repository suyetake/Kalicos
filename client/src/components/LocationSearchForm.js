import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../styles/LocationSearchForm.css'

let LocationSearchForm = (props) => {
	return (
		<div className="locationsearchform">
			<h3>Find a charity near</h3>
			<form onSubmit={props.handleSubmit}>
				<Field 
					name="address"
					component="input"
					type="text"
				/>
         		 <button type="submit">GO!</button>
			</form>
		</div>
	)
}

LocationSearchForm = reduxForm({
  form: 'locationSearchForm'
})(LocationSearchForm)

export default LocationSearchForm