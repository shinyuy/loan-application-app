import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class Applicant extends Component {

  state = {
    dat: {}
  }

  componentDidMount() {
    let id = this.props.match.params.dat_id;
    axios.get("http://localhost:5000/api/getData/" + id)
      .then(res => {
        this.setState({
          dat: res.data
        })
        console.log(res)
      })
  }



  render() {
    const dat = this.state.dat ? (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}></Col>
            <div><span className='chat'>Name</span>:     {this.state.dat.name}</div>
            <div><span className='chat'>Age</span>:    {this.state.dat.age}</div>
            <div><span className='chat'>Location</span>:   {this.state.dat.location}</div>
            <div><span className='chat'>Region In</span>:   {this.state.dat.region}</div>
            <div><span className='chat'>City In</span>:    {this.state.dat.city}</div>
            <div><span className='chat'>Street</span>:    {this.state.dat.street}</div>
            <div><span className='chat'>Phone Number</span>:   {this.state.dat.phoneNumber}</div>
            <div><span className='chat'>Amount</span>: {this.state.dat.amount}XAF</div>
            <div><span className='chat'>Colateral Property</span>:   {this.state.dat.colateral}</div>
            <div><span className='chat'>Reason For Loan</span>:    {this.state.dat.message}</div>
            <Col xs={6} md={4}>
              <div>Supporting Documents:  {this.state.dat.documents} </div>
            </Col>
          </Row>
        </Container>
      </div>
    ) :
      (
        <div>Loading Applicant's Information...</div>
      )
    return (
      <div style={{ minHeight: '100vh', paddingTop: '150px' }}>
        {dat}
      </div >
    )
  }
}