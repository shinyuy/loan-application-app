import React, { Component } from 'react'

export default class AddApplicant extends Component {
   
    state = {
        name: null,
        age: null,
        location: null,
        number: null,
        amount: null,
        colateral: null,
        message: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addApplicant(this.state)
    }

    render() {
        return (
                <div className='row appform'>
                 <h1>Apply For Loan</h1>
                    <form onSubmit={this.handleSubmit} className='col s12 center'>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='name'>Full Names : </label>
                                <input type='text' placeholder='Enter full names as on ID card here' id='name' onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='age'>Age : </label>
                                <input type='number' placeholder='Enter your age here' id='age' onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='location'>Location : </label>
                                <input type='text' placeholder='Enter your resident location here' id='location' onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='phoneNumber'>Phone Number : </label>
                                <input type='number' placeholder='Enter you main phone number here' id='phoneNumber' onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='amount'>Amount : </label>
                                <input type='number' placeholder='Enter the loan amount in XAF you are applying for here' id='amount' onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='colateral'>Colateral Property : </label>
                                <input type='text' placeholder='Enter any property you have as colateral here' id='colateral' onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='message'>Tell us why you need this loan : </label>
                                <textarea type='text' placeholder='Enter reason for loan here' id='message' cols='10' rows='20' onChange={this.handleChange} required></textarea>
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
