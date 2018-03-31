import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { logout } from '../../actions/users'
import {Redirect} from 'react-router-dom'
import Landing from '../Landing'
import { Link } from 'react-router-dom'

class LogoutPage extends PureComponent {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		// if (!this.props.currentUser) return (
		// 	<Redirect to="/" />
		// )

		return (
			<div>
				<h1>Bye!...</h1>
				<Link to={'/landing'} component={Landing} className="landing">Log In</Link>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, {logout})(LogoutPage)
