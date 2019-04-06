import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class Applicant extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params._id;
    axios.get("http://localhost:5000/api/getData/" + id)
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      });
  }



  render() {
    const data = this.state.data ? (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div><span className='chat'>Name</span>:     {this.state.data.data.name}</div><br />
              <div><span className='chat'>Age</span>:    {this.state.data.data.age}</div><br />
              <div><span className='chat'>Location</span>:   {this.state.data.data.location}</div><br />
              <div><span className='chat'>Region In</span>:   {this.state.data.data.region}</div><br />
              <div><span className='chat'>City In</span>:    {this.state.data.data.city}</div><br />
              <div><span className='chat'>Street</span>:    {this.state.data.data.street}</div><br />
              <div><span className='chat'>Phone Number</span>:   {this.state.data.data.phoneNumber}</div><br />
              <div><span className='chat'>Amount</span>: {this.state.data.data.amount}XAF</div><br />
              <div><span className='chat'>Colateral Property</span>:   {this.state.data.data.colateral}</div><br />
              <div><span className='chat'>Reason For Loan</span>:    {this.state.data.data.message}</div><br />
            </Col>
            <Col xs={6} md={4}>
              <div><span className='chat'>Supporting Documents</span>:  {this.state.data.data.documents} </div>
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
        {data}
      </div >
    )
  }
}