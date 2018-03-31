import React, { PureComponent } from 'react'

export default class SignUpForm extends PureComponent { 

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]:value
        })
    }

render(){

    return (
            <form className="SignUp" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" value={ this.state.username || ''} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" value={this.state.password || ''} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" value={this.state.email || ''} onChange={this.handleChange}/>
                </div>
                <button type="submit">SignUp</button>
            </form>
    )

}

}



