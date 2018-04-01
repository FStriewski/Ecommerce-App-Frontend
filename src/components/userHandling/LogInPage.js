import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../../actions/users'
import LogInForm from './LogInForm'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'



class LogInPage extends PureComponent {


	handleSubmit = (data) => {
		this.props.loginUser(data.username, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Login</h1>

				<LogInForm onSubmit={this.handleSubmit} />

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
