import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdminNav from '../../admin/nav/AdminNav';
import Chat from '../adminchat/Chat';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Validated extends Component {
  state = {
    data: [],
    name: null,
    phoneNumber: null,
    loanAmount: null,
    annualInterest: null,
    repaymentPeriod: null,
    monthlyPayment: false,
    totalPayment: null,
    totalInterest: null,
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
    axios.get("http://localhost:5000/api/getData/validated")
      .then(res => this.setState({ data: res.data }))
      .catch(function (error) { console.log(error) })
    console.log(this.state.data);
  };


  render() {

    const { data } = this.state;

    return (
      <div style={{minHeight: '100vh', paddingTop : '50px', paddingBottom: '100px'}}>
        <Row>
          <Col md={4}><AdminNav /></Col>
          <Col md={{ span: 4, offset: 4 }}><Chat /></Col>
        </Row>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>phoneNumber</th>
              <th>Loan Amount (XAF)</th>
              <th>Annual Interest (%)</th>
              <th>Repayment Period (Years)</th>
              <th>Monthly Payment (XAF)</th>
              <th>Total Payment (XAF)</th>
              <th>Total Interest</th>
            </tr>
          </thead>
          <tbody>
            {data.length <= 0
              ? `Loading Applicants...`
              : data.docs.map(function (dat, i) {
                return (
                  <tr key={i}>
                    <td>{dat.name}</td>
                    <td>{dat.phoneNumber}</td>
                    <td>{dat.loanAmount}</td>
                    <td>{dat.annualInterest}</td>
                    <td>{dat.repaymentPeriod}</td>
                    <td>{dat.totalPayment}</td>
                    <td>{dat.totalInterest}</td>
                    <td>{dat.monthlyPayment}</td>
                    <td> <button
                      style={{
                        backgroundColor: '#e1ddc3',
                        cursor: 'pointer',
                        borderRadius: '10%'
                      }}><Link to={'/valid_applicant/' + dat._id}>More Info</Link></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )

  }

}
