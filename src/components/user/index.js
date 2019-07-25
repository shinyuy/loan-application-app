import React, { Component } from "react";
import UserLayout from "../../HOC/UserLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class UserDashboard extends Component {
  state = {
    data: null,
    loanAmount: 0,
    annualInterest: 0,
    monthlyPayment: 0,
    repaymentPeriod: 0,
    region: 'N/A',
    city: 'N/A',
    location: 'N/A'
  };

  componentDidMount() {
    let email = this.props.user.email;
   // let phoneNumber = this.props.phoneNumber;
    axios
      .get(`http://localhost:5000/api/getUserData?email=${email}`)
      .then(res => {
        if(res.data.data.length>0){
        this.setState({
          data: res.data,
          loanAmount: res.data.data[0].loanAmount,
          annualInterest: res.data.data[0].annualInterest,
          monthlyPayment: res.data.data[0].monthlyPayment,
          repaymentPeriod: res.data.data[0].repaymentPeriod,
          region: res.data.data[0].region,
          city: res.data.data[0].city,
          location: res.data.data[0].location
        }); 
      
      }
       }); 
  }
  
  render() {
    console.log(this.props);
    const data = this.state ? (
    <>
        <div className="user_nfo_panel">
          <h1>Loan Information</h1>
          <div className="user_product_block_wrapper">
            <div>Loan Amount:<span className='chat'> {this.state.loanAmount} Fcfa</span></div><br/>
            <div>Annual Interest:<span className='chat'> {this.state.annualInterest}%</span></div><br/>
            <div>Monthly Payment:<span className='chat'> {this.state.monthlyPayment} Fcfa </span></div><br/>
            <div>Repayment Period:<span className='chat'> {this.state.repaymentPeriod} years </span></div><br/>
            <div>Location:<span className='chat'> {this.state.region}, {this.state.city}, {this.state.location} </span></div><br/>
          </div>
        </div>
     </>
     ) :
     (
         <div>Loading Applicant's Information...</div>
     )   
return (
  <>
    <UserLayout user={this.props.user}>
      <Row>
        <Col>
         <div className="user_nfo_panel">
          <h1> User Information</h1>
          <div>
            <div>First Name:<span className='chat'> {this.props.user.firstname}</span></div>
            <br />
            <div>Last Name: <span className='chat'>{this.props.user.lastname}</span></div>
            <br />
            <div>Account Number: <span className='chat'>{this.props.user.accountNumber}</span></div>
            <br />
            <div>Email:<span className='chat'> {this.props.user.email}</span></div>
            <br />
            <div>Phone Number:<span className='chat'> {this.props.user.phoneNumber}</span></div>
            <br />
          </div>
          <button className="btn">
            <Link to="/user/profile">Edit Account Info</Link>
          </button>
        </div>
        </Col>
        <Col>
        
        </Col>
      </Row>
       

  {data}

  <div className="user_nfo_panel">
          <h1>Savings</h1>
          <div className="user_product_block_wrapper">History of Savings</div>
        </div>
  </UserLayout>
  </>
    );
  }
}

export default UserDashboard;
