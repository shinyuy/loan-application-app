import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default class SingleUserAccount extends Component {
    state = {
        data: null
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
                  <div>First Name:<span className='chat'>     {this.state.data.data.firstname}</span></div><br />
                  <div>Last Name:<span className='chat'>     {this.state.data.data.lastname}</span></div><br />
                  <div>Phone Number:<span className='chat'>   {this.state.data.data.phoneNumber}</span></div><br />
                  <div>Email:<span className='chat'>     {this.state.data.data.email}</span></div><br />
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
