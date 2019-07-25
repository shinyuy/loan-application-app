import React, { Component } from 'react'
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default class UserAccount extends Component {
state = {
    data: [],
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    accountNumber: null,
    role: 1,
    formSuccess: null
}

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
    axios.get("http://localhost:5000/api/getUsers")
      .then(res => { console.log(res.data.docs);
          this.setState({ data: res.data.docs })
      })
      .catch(function (error) { console.log(error) })
    console.log(this.state.data);
  };


register = (firstname, lastname, email, phoneNumber, date, password) => {
    axios
      .post("http://localhost:5000/api/register", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
        role: this.state.role
      })
      .then(res => {
          console.log(res.status);
          this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            password: "",
            success: true
          })
          setTimeout(() => {
            this.props.history.push('/login');
          }, 2000);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: true
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    this.register(this.state);
  };

  adminDelete = e => {}


render() {
    const {
        data,
        firstname,
        lastname,
        email,
        password,
        phoneNumber
      } = this.state;
    return (
  <Container  style={{ paddingTop: "150px", paddingBottom: "150px" }}>
      <Row>
          <h3>User Accounts</h3>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Account Number</th>
        </tr>
      </thead>
      <tbody>
        {data.length <= 0
          ? `Loading Applicants...`
          : data.map(function (dat, i) {
            return (
              <tr key={i}>
                <td>{dat.firstname} {dat.lastname}</td>
                <td>{dat.email}</td>
                <td>{dat.phoneNumber}</td>
                <td>{dat.accountNumber}</td>
                <td> <button
                  style={{
                    backgroundColor: '#e1ddc3',
                    cursor: 'pointer',
                    borderRadius: '10%'
                  }}><Link to={'/admin/userAccounts/' + dat._id}>Set Account Number</Link></button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </Row>
    </Container>
    )
}
}