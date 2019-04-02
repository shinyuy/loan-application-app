import React, { Component } from 'react'


export default class Applicants extends Component {

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



  render() {

    const { data } = this.state;

    return (
      <div>
        <table className="striped responsive-table">
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
              ? `No Applicants Available`
              : data.map(dat => (
                <tr key={dat.id}>
                  <td>{dat.name}</td>
                  <td>{dat.age}</td>
                  <td>{dat.location}</td>
                  <td>{dat.phoneNumber}</td>
                  <td>{dat.amount}XAF</td>
                  <td>{dat.colateral}</td>
                  <td>{dat.message}</td>
                  <td> <button onClick={(id) => { this.props.validate(id) }}
                    style={{
                      backgroundColor: 'blueviolet',
                      cursor: 'pointer',
                      borderRadius: '10%'
                    }}>validate</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )

  }

}

