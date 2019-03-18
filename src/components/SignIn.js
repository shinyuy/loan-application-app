import React, { Component } from 'react'

export default class SignIn extends Component {
    
    handleChange = () => {

    }

    handleSubmit = () => {

    }
    
    render() {
        return (
            <div className='row appform'>
                <h3>Sign In To Dashboard</h3>
                <form onSubmit={this.handleSubmit} className='col s12 center'>
                <div className="row">
                 <div className="input-field col s12">
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={this.handleChange} id='email' placeholder='Enter Email' required/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                    <label htmlFor='email'>Password:</label>
                    <input type='password' onChange={this.handleChange} id='password' placeholder='Enter Password' required/>
                    </div>
                    </div>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}
