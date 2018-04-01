import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import { createUser } from '../../actions/users'

class SignUpPage extends PureComponent {

    handleSubmit = (data) => {
        this.props.createUser(data.email, data.password, data.username)
    }

    render (){
        if (this.props.signup.success) return (
            <Redirect to="/" />
        )

        return (
            <div>
                <SignUpForm onSubmit={this.handleSubmit} />
                <p style={{ color: 'red' }}>{this.props.signup.error}</p>
            </div>

        )
    }
}

const mapStateToProps = function (state) {
    return {
        signup: state.signup
    }
}

export default connect(mapStateToProps, { createUser })(SignUpPage)