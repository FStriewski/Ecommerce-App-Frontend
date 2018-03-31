import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { loginUser} from '../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

class LogInPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.loginUser(data.username, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/products" />
		)

		return (
			<div>
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit} />

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, { loginUser })(LogInPage)
