import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { loginUser } from '../actions/userControls'


class LoginPage extends React.Component {
	handleSubmit = (login) => {
		this.props.dispatch(loginUser(login.username, login.password))
		this.props.history.push('/')
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
