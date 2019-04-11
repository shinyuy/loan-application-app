import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

export default class Applicants extends Component {

  state = {
    data: [],
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
      let interval = setInterval(this.getDataFromDb, 600000);
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
    axios.get("http://localhost:5000/api/getData")
      .then(res => this.setState({ data: res.data }))
      .catch(function (error) { console.log(error) })
    console.log(this.state.data);
  };


  render() {

    const { data } = this.state;

    return (
      <div>
        <Row>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Amount</th>
              <th>Colateral Property</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.length <= 0
              ? `Loading Applicants...`
              : data.data.map(function (dat, i) {
                return (
                  <tr key={i}>
                    <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                    <td>{dat.phoneNumber}</td>
                    <td>{dat.amount}XAF</td>
                    <td>{dat.colateral}</td>
                    <td>{dat.message}</td>
                    <td> <button
                      style={{
                        backgroundColor: '#e1ddc3',
                        cursor: 'pointer',
                        borderRadius: '10%'
                      }}><Link to={'/applicant/' + dat._id}>More Info</Link></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </Row>
      </div>
    )

  }

}