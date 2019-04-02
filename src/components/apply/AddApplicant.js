import React, { Component } from 'react'
import axios from "axios";

export default class AddApplicant extends Component {

    state = {
        data: [],
        id: 0,
        name: '',
        age: '',
        location: '',
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
            age: this.state.age,
            location: this.state.location,
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
        const { name, age, location, phoneNumber, amount, colateral, message } = this.state;
        return (
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
                            <input type='number' value={age} placeholder='Enter your age here' id='age' name='id' onChange={this.handleChange} required />
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

        )
    }
}
