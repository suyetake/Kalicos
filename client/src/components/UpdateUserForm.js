import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let UpdateUserForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<label>Username</label>
				<Field 
					name="username"
					component="input"
					type="text"
					placeholder="Enter username"
				/>
				<label>Email</label>
				<Field 
					name="email"
					component="input"
					type="text"
					placeholder="Enter email"
				/>
				<label>oldPassword</label>
				<Field 
					name="oldPassword"
					component="input"
					type="password"
					placeholder="Enter old password"
				/>
				<label>newPassword</label>
				<Field 
					name="newPassword"
					component="input"
					type="password"
					placeholder="Enter new password"
				/>
				<label>Access Level</label>
				<Field 
					name="accessLevel"
					component="select"
				>
					<option>Select Access Level</option>
					<option value="standard">Standard</option>
		            <option value="admin">Admin</option>
         		 </Field>
         		 <button type="submit">Update User</button>
			</form>
		</div>
	)
}

UpdateUserForm = reduxForm({
  form: 'updateUserForm'
})(UpdateUserForm)

UpdateUserForm = connect(
  ( state, props ) => {
    return {
      initialValues: props.updatingUser
    }
  }
)(UpdateUserForm)

export default UpdateUserForm