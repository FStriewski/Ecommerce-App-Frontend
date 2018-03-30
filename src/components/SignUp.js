import React, { PureComponent } from 'react'

export default class SignUp extends PureComponent { 

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
        <div className="SignUp" onSubmit={this.handleSubmit}>
            <form>
                <label htmlFor="username">Username</label>
                <input name="username" id="username" value={ this.state.username || ''} onChange={this.handleChange} />

                <label htmlFor="password">Password</label>
                <input name="password" value={this.state.password || ''} onChange={this.handleChange} />

                <label htmlFor="email">Username</label>
                <input name="email" value={this.state.password || ''} onChange={this.handleChange}/>

                <button type="submit">SignUp</button>
            </form>
        </div>
    )

}





}



