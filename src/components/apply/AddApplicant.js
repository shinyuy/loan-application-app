import React, { Component } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class AddApplicant extends Component {

    state = {
        data: [],
        id: 0,
        name: '',
        email: '',
        age: '',
        location: '',
        region: '',
        city: '',
        street: '',
        phoneNumber: '',
        amount: '',
        colateral: '',
        message: '',
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };

    putDataToDB = (name, age, location, phoneNumber, amount, colateral, message) => {

        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("http://localhost:5000/api/putData", {
            id: idToBeAdded,
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            location: this.state.location,
            region: this.state.region,
            city: this.state.city,
            street: this.state.street,
            phoneNumber: this.state.phoneNumber,
            amount: this.state.amount,
            colateral: this.state.colateral,
            message: this.state.message
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        this.putDataToDB(this.state);
    }

    render() {
        const { name, email, age, location, region, city, street, phoneNumber, amount, colateral, message } = this.state;
        return (
            <Container style={{ paddingTop: '150px', paddingBottom: '150px' }}>
            <Row>
               <h2>Fill the form below correctly and submit, and we will get back to you soonest.</h2> 
            </Row>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Full Names</Form.Label>
                        <Form.Control value={name} id='name' name='name' onChange={this.handleChange} required placeholder="Enter full names as on ID card" />
                    </Form.Group>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"value={email} id='email' name='email'  onChange={this.handleChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" value={phoneNumber} id='phoneNumber' name='phoneNumber' onChange={this.handleChange} required placeholder="Enter phone number" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>
                                Date of Birth
                           </Form.Label>
                            <Form.Control type="date" value={age} id='age' name='age' onChange={this.handleChange} required  placeholder="Choose your date of birth" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>
                                Amount Requested
                               </Form.Label>
                            <Form.Control type="number" value={amount} id='amount' name='amount' onChange={this.handleChange} required placeholder="Enter amount requested" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={location} id='location' name='location' onChange={this.handleChange} required placeholder="Enter address here" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Region</Form.Label>
                            <Form.Control as="select" value={region} onChange={this.handleChange} id='region' name='region' required>
                                <option>Choose region</option>
                                <option>North West</option>
                                <option>South West</option>
                                <option>Littoral</option>
                                <option>Center</option>
                                <option>West</option>
                                <option>East</option>
                                <option>North</option>
                                <option>Far North</option>
                                <option>Adamawa</option>
                                <option>South</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} id='city' name='city' onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Street</Form.Label>
                            <Form.Control value={street} id='street' name='street' onChange={this.handleChange} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Why do you need this laon?</Form.Label>
                        <Form.Control as="textarea" rows="3" value={message} id='message' name='message' onChange={this.handleChange} required placeholder="Tell us briefly why you need this loan" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>What do you have as a colateral?</Form.Label>
                        <Form.Control as="textarea" rows="3" value={colateral} id='colateral' name='colateral' onChange={this.handleChange} required placeholder="Tell us briefly about any colateral property that will make you pay this loan in time" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit Application
                           </Button>
                </Form>
            </Container>
        )
    }
}





/*
<div className='row appform'>
                <h1>Apply For Loan</h1>
                <form onSubmit={this.handleSubmit} className='col s12 center'>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='name'>Full Names : </label>
                            <input type='text' value={name} placeholder='Enter full names as on ID card here' id='name' name='name' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='age'>Age : </label>
                            <input type='number' value={age} placeholder='Enter your age here' id='age' name='age' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='location'>Location : </label>
                            <input type='text' value={location} placeholder='Enter your resident location here' id='location' name='location' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='phoneNumber'>Phone Number : </label>
                            <input type='number' value={phoneNumber} placeholder='Enter you main phone number here' id='phoneNumber' name='phoneNumber' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='amount'>Amount : </label>
                            <input type='number' value={amount} placeholder='Enter the loan amount in XAF you are applying for here' id='amount' name='amount' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='colateral'>Colateral Property : </label>
                            <input type='text' value={colateral} placeholder='Enter any property you have as colateral here' id='colateral' name='colateral' onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor='message'>Tell us why you need this loan : </label>
                            <textarea type='text' value={message} placeholder='Enter reason for loan here' id='message' cols='10' rows='20' name='message' onChange={this.handleChange} required></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button type='submit'>Submit Loan Application</button>
                        </div>
                    </div>

                </form>
            </div>
*/