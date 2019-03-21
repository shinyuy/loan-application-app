import React, { Component } from 'react';
import AddApplicant from './AddApplicant';

export default class Apply extends Component {

 /* // initialize our state 
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
  componentDidMount() {
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
  };

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


    state = {
        applicants : [
          { id: 1 , name: 'John', age: 30, location : 'nkwen', phoneNumber : 72727272, amount : 100000, colateral: '20km land at nkwen', message : 'Hello I would like to apply for a loan to carry out my project'},
          { id: 2 , name: 'George', age: 25, location : 'bambui', phoneNumber : 62007272, amount : 150000,  colateral: '5 bedroom house', message : 'Hello I would like to apply for a loan to pay my school fees'},
          { id: 3 , name: 'Jude', age: 33, location : 'sonacstreet', phoneNumber : 99577272, amount : 1000000,  colateral: 'a toyota corolla', message : 'Hello I would like tto apply for a loan start up a small business'},
          { id: 4 , name: 'Mary', age: 36, location : 'aziri', phoneNumber : 727290095, amount : 250000,  colateral: '10km land at aziri ', message : 'Hello I would like tto apply for a loan to carry out my project'}
        ]
      }

      addApplicant = (applicant) => {
        // let id = 4;
         let applicants = [...this.state.applicants, applicant];
         this.setState({
           applicants: applicants
         })
        
       }
  */
    render() {
    return (
      <div>
         <AddApplicant putDataToDB={this.putDataToDB} />
      </div>
    )
  }
}
