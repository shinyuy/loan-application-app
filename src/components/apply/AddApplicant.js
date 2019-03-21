import React, { Component } from 'react'
import axios from "axios";

export default class AddApplicant extends Component {
   
    state = {
        data: [],
          
            id: 0,
            name: null,
            age: null,
            location: null,
            phoneNumber: null,
            amount: null,
            colateral: null,
            message: null,
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null
          
    
      };
    
    
     // when component mounts, first thing it does is fetch all existing data in our db
      // then we incorporate a polling logic so that we can easily see if our db has 
      // changed and implement those changes into our UI
     /* componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
      }
    
      // never let a process live forever 
      // always kill a process everytime we are done using it
      componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }
    
    
       // our first get method that uses our backend api to 
      // fetch data from our data base
      getDataFromDb = () => {
        fetch("http://localhost:5000/api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
      };*/
    
       // our put method that uses our backend api
      // to create new query into our data base
      putDataToDB = (name, age, location, phoneNumber, amount, colateral, message) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post("http://localhost:5000/api/putData", {
          id: idToBeAdded,
          name: name,
          age: age,
          location: location,
          phoneNumber: phoneNumber,
          amount: amount,
          colateral: colateral,
          message: message
        });
      };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.putDataToDB(this.state);
      
    }

    render() {
        return (
                <div className='row appform'>
                 <h1>Apply For Loan</h1>
                    <form onSubmit={(e) => this.handleSubmit(e)} className='col s12 center'>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='name'>Full Names : </label>
                                <input type='text' placeholder='Enter full names as on ID card here' id='name' onChange={(e) => this.handleChange(e)} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor='age'>Age : </label>
                                <input type='number' placeholder='Enter your age here' id='age' onChange={(e) => this.handleChange(e)} required/>
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
