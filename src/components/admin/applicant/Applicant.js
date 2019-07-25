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
    let id = this.props.match.params._id;
    axios.get("http://localhost:5000/api/getData/" + id)
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      });
  }

  validate = (e) => {
    let id = this.props.match.params._id;
    let validateToTrue = true;
    axios.post("http://localhost:5000/api/updateData/" + id, {
      name: this.state.data.data.name,
      email: this.state.data.data.email,
      age: this.state.data.data.age,
      location: this.state.data.data.location,
      region: this.state.data.data.region,
      city: this.state.data.data.city,
      street: this.state.data.data.street,
      phoneNumber: this.state.data.data.phoneNumber,
      amount: this.state.data.data.amount,
      colateral: this.state.data.data.colateral,
      message: this.state.data.data.message,
      validated: validateToTrue,
      images: this.state.data.data.images
    })
      .then(res => console.log(res.data));
    setTimeout(() => {
      this.props.history.push('/dashboard');
    }, 2000);

  }


  render() {
    const data = this.state.data ? (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div>Name:<span className='chat'>     {this.state.data.data.name}</span></div><br />
              <div>Age:<span className='chat'>    {this.state.data.data.age}</span></div><br />
              <div>Location:<span className='chat'>   {this.state.data.data.location}</span></div><br />
              <div>Region<span className='chat'>    {this.state.data.data.region}</span></div><br />
              <div>City:<span className='chat'>    {this.state.data.data.city}</span></div><br />
              <div>Street:<span className='chat'>    {this.state.data.data.street}</span></div><br />
              <div>Phone Number:<span className='chat'>   {this.state.data.data.phoneNumber}</span></div><br />
              <div>Amount:<span className='chat'> {this.state.data.data.amount}XAF</span></div><br />
              <div>Colateral Property:<span className='chat'>   {this.state.data.data.colateral}</span></div><br />
              <div>Reason For Loan:<span className='chat'>    {this.state.data.data.message}</span></div><br />
            </Col>
            <Col xs={6} md={4}>
              <div className='wrap'>
                <div><span className='chat'>Supporting Documents</span>:
                <div>
                    <img src={this.state.data.data.images[0].url} alt='documents' />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {
            this.state.data.data.validated === true  ? ( <button className="btn btn-success" disabled>Validated</button>)
            :( <button className="btn btn-primary" onClick={this.validate}>Validate</button>)
          }
         
        </Container>
      </div>
    ) :
      (
        <div>Loading Applicant's Information...</div>
      )
    return (
      <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom:'150px' }}>
        {data}
      </div >
    )
  }
}