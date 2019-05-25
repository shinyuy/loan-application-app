import React, { Component } from 'react'
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import File from './File';

export default class AddApplicant extends Component {

    state = {
        data: [],
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
        images: [],
        validated: false,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        success: false,
		errorMessage: false
    };

    putDataToDB = (name, email, age, location, region, city, street, phoneNumber, amount, colateral, message) => {
        console.log(this.state);
        axios.post("http://localhost:5000/api/putData", {
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
            message: this.state.message,
            validated: this.state.validated,
            images: this.state.images
        })
            .then(res => {
				 this.setState({
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
            images: [],
            validated: false,
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null,
            success: true
        })
			})
			.catch(error => {
        console.log(error);
        this.setState({
          errorMessage: true
        });
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


    imagesHandler = (images) => {

        this.setState({
            images: images
        });
        console.log(this.state);
    }


    render() {
        const { name, email, age, location, region, city, street, phoneNumber, amount, colateral, message } = this.state;
        return (
            <Container style={{ paddingTop: '150px', paddingBottom: '150px' }}>
                <Row>
                    <div style={{ color: 'green' }}>{this.state.success === true ? ('Congratulations, your application for a loan has been successfully submitted, we will review it and get back to you soonest') :
                        ''}</div>
					<div style={{ color: "red" }}>{this.state.errorMessage === true
                ? "Registration Unsuccessful, try again later"
                : ""}</div>
                    <h2>Fill the form below correctly and submit, and we will get back to you soonest.</h2>
                </Row>

                <Row>
                    <File imagesHandler={(images) => this.imagesHandler(images)}
                        reset={this.state.formSuccess} />
                </Row>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Full Names</label>
                    <input className="form-control" type='text' value={name} id='name' name='name' onChange={this.handleChange} required placeholder="Enter full names as on ID card" />

                    <Row>
                        <Col>
                            <label htmlFor='email'>Email</label>
                            <input className="form-control" type="email" value={email} id='email' name='email' onChange={this.handleChange} placeholder="Enter email" />
                        </Col>
                        <Col>
                            <label htmlFor='number'>Phone</label>
                            <input className="form-control" type="number" value={phoneNumber} id='phoneNumber' name='phoneNumber' onChange={this.handleChange} required placeholder="Enter phone number" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor='age'>Age</label>
                            <input className="form-control" type="number" value={age} id='age' name='age' onChange={this.handleChange} required placeholder="Choose your date of birth" />
                        </Col>
                        <Col>
                            <label>Amount Requested</label>
                            <input className="form-control" type="number" value={amount} id='amount' name='amount' onChange={this.handleChange} required placeholder="Enter amount requested" />
                        </Col>
                    </Row>
                    <label htmlFor='location'>Address</label>
                    <input className="form-control" value={location} id='location' name='location' onChange={this.handleChange} required placeholder="Enter address here" />
                    <Row>
                        <Col>
                            <label htmlFor='region'>Region</label>
                            <select className="form-control" value={region.option} onChange={this.handleChange} id='region' name='region' required>
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
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor='city'>City</label>
                            <input className="form-control" value={city} id='city' name='city' onChange={this.handleChange} required />
                        </Col>
                        <Col>
                            <label htmlFor='street'>Street</label>
                            <input className="form-control" value={street} id='street' name='street' onChange={this.handleChange} required />
                        </Col>
                    </Row>
                    <label htmlFor='message'>Why do you need this laon?</label>
                    <textarea className="form-control" rows="5" value={message} id='message' name='message' onChange={this.handleChange} required placeholder="Tell us briefly why you need this loan" />
                    <label htmlFor='colateral'>What do you have as a collateral?</label>
                    <textarea className="form-control" rows="3" value={colateral} id='colateral' name='colateral' onChange={this.handleChange} required placeholder="Tell us briefly about any colateral property that will make you pay this loan in time" />
                    <button type="submit" className="btn btn-secondary" style={{ marginTop: '20px' }}>Submit Application</button>
                </form>
                <div style={{ color: 'green' }}>{this.state.success === true ? ('Congratulations, your application for a loan has been successfully submitted, we will review it and get back to you soonest') :
                    ''}</div>
				<div style={{ color: "red" }}>{this.state.errorMessage === true
                ? "Registration Unsuccessful, try again later"
                : ""}</div>	
            </Container>
        )
    }
}