import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default class SingleAccountSavings extends Component {

  state = {
    data: null,
    savings: null
  }

  componentDidMount() {
    let id = this.props.match.params._id;
    axios.get("http://localhost:5000/api/getUsers/" + id)
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      });
  } 

  saveToAccount = (e) => {
    var datetime = new Date();
      console.log(this.state.savings)
      console.log(this.state.data.data.savings);
    let id = this.props.match.params._id;
    let savings = {
      date: datetime,
      amount: this.state.savings
    }
    this.state.data.data.savings.push(savings);
    axios.post("http://localhost:5000/api/save/" + id, {
      firstname: this.state.data.data.firstname,
      lastname: this.state.data.data.lastname,
      email: this.state.data.data.email,
      phoneNumber: this.state.data.data.phoneNumber,
      accountNumber: this.state.data.data.accountNumber,
      images: this.state.data.data.images,
      savings: this.state.data.data.savings
    })
      .then(res => console.log(res.data));
    setTimeout(() => {
      this.props.history.push('/admin/savings');
    }, 2000);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state)
  };

  render() {
    const data = this.state.data ? (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div>First Name:<span className='chat'>     {this.state.data.data.firstname}</span></div><br />
              <div>Last Name:<span className='chat'>     {this.state.data.data.lastname}</span></div><br />
              <div>Email:<span className='chat'>     {this.state.data.data.email}</span></div><br />
              <div>Phone Number:<span className='chat'>   {this.state.data.data.phoneNumber}</span></div><br />
              <div>Account Number:<span className='chat'>   {this.state.data.data.accountNumber}</span></div><br />
              <div>Savings:<span className='chat'>   {this.state.data.data.savings.amount}</span></div><br />
              <div><input type='number'  value={this.state.savings} placeholder='Enter Amount To be Saved'
                id="savings"
                name="savings" className="form-control" onChange={this.handleChange}/></div>
            </Col>
            <Col xs={6} md={4}>
              <div className='wrap'>
                <div>
                <div>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
             <button className="btn btn-primary" onClick={this.saveToAccount}>Save</button>
         
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
