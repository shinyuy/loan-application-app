import React, { Component } from 'react'
import { firebase } from '../../Firebase';


export default class SignIn extends Component {

    state = {
        email: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth()
            .signInWithEmailAndPassword(
                this.state.email,
                this.state.password
            ).then(() => {
                this.props.history.push('/dashboard')
            }).catch(() => {
                this.setState({
                    formError: true
                })
            })

    }


    render() {
        return (
            <div className='container'>
                <div className='row appform'>
                    <h3>Sign In To Dashboard</h3>
                    <form onSubmit={this.handleSubmit} className='col s12 center'>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='email'>Email</label>
                                <input type='email' onChange={this.handleChange} id='email' placeholder='Enter Email' required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='password'>Password</label>
                                <input type='password' onChange={this.handleChange} id='password' placeholder='Enter Password' required />

                            </div>
                        </div>
                        <button type='submit'>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
