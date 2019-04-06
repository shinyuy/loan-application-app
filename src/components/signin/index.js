import React, { Component } from 'react'
import { firebase } from '../../Firebase';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

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
            <Container style={{ paddingTop: '150px', paddingBottom: '150px' }}>
              <Row><Col></Col><Col><h3>Sign In To Dashboard</h3></Col><Col></Col></Row>  
                <Row>
                    <Col></Col>
                <Col xs={6}>
                    <form onSubmit={this.handleSubmit} className='col s12 center'>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='email'>Email</label>
                                <input type='email' className="form-control" onChange={this.handleChange} id='email' placeholder='Enter Email' required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='password'>Password</label>
                                <input type='password' className="form-control" onChange={this.handleChange} id='password' placeholder='Enter Password' required />

                            </div>
                        </div>
                        <button type='submit' className="btn btn-secondary" style={{ marginTop: '20px' }}>Log In</button>
                    </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
