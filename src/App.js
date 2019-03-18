import React, { Component } from 'react';
import AddApplicant from './components/AddApplicant';
import Applicants from './components/Applicants';
import SignIn from './components/SignIn';

class App extends Component {

  state = {
    applicants : [
      { id: 1 , name: 'John', age: 30, location : 'nkwen', phoneNumber : 72727272, amount : 100000, colateral: '20km land at nkwen', message : 'Hello I would like to apply for a loan to carry out my project'},
      { id: 2 , name: 'George', age: 25, location : 'bambui', phoneNumber : 62007272, amount : 150000,  colateral: '5 bedroom house', message : 'Hello I would like to apply for a loan to pay my school fees'},
      { id: 3 , name: 'Jude', age: 33, location : 'sonacstreet', phoneNumber : 99577272, amount : 1000000,  colateral: 'a toyota corolla', message : 'Hello I would like tto apply for a loan start up a small business'},
      { id: 4 , name: 'Mary', age: 36, location : 'aziri', phoneNumber : 727290095, amount : 250000,  colateral: '10km land at aziri ', message : 'Hello I would like tto apply for a loan to carry out my project'}
    ]
  }

 

  addApplicant = (applicant) => {
    let id = 4;
    let applicants = [...this.state.applicants, applicant];
    this.setState({
      applicants: applicants
    })
   
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
       <AddApplicant addApplicant={this.addApplicant}/>
       <SignIn />
       <Applicants applicants={this.state.applicants} />
      </div>
    );
  }
}

export default App;
