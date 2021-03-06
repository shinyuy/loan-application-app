import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default class SingleUserAccount extends Component {

  state = {
    data: null,
    accountNumber: null
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

  setAccountNumber = (e) => {
    let id = this.props.match.params._id;
    axios.post("http://localhost:5000/api/setAccountNumber/" + id, {
      firstname: this.state.data.data.firstname,
      lastname: this.state.data.data.lastname,
      email: this.state.data.data.email,
      phoneNumber: this.state.data.data.phoneNumber,
      accountNumber: this.state.accountNumber,
      images: this.state.data.data.images
    })
      .then(res => console.log(res.data));
    setTimeout(() => {
      this.props.history.push('/admin/userAccounts');
    }, 2000);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
              <div>Set Account Number<input type='number'  value={this.state.accountNumber}
                id="accountNumber"
                name="accountNumber" className="form-control" onChange={this.handleChange}/></div>
            </Col>
            <Col xs={6} md={4}>
              <div className='wrap'>
                <div><span className='chat'>Supporting Documents</span>:
                <div>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {
            this.state.data.data.validated === true  ? ( <button className="btn btn-success" disabled>Validated</button>)
            :( <button className="btn btn-primary" onClick={this.setAccountNumber}>Submit</button>)
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
