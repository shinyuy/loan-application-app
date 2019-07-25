import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    success: false,
    errorMessage: false
  };

  register = (email, password) => {
    axios
      .post("http://localhost:3000/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
          if(res.data.loginSuccess){
               this.props.history.push('/user/dashboard')
          }else{
              this.setState({
                  errorMessage: true
              })
          }
       
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

  render() {
    const { email, password } = this.state;

    return (
      
        <Container style={{paddingTop: "150px", paddingBottom: "150px"}}>
          <Row>
            <Col />
            <Col>
              <h3>Login !</h3>
            </Col>
            <Col />
          </Row>

          <Row>
            <div style={{ color: "red" }}>
              {this.state.errorMessage === true
                ? "Login Unsuccessful, email or password incorrect"
                : ""}
            </div>
          </Row>

          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    <label htmlFor="">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Email Address"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label htmlFor="">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Password"
                    />
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ marginTop: "20px" }}
                >
                  Login
                </button>

                <div style={{ color: "red" }}>
              {this.state.errorMessage === true
                ? "Login Unsuccessful, email or password incorrect"
                : ""}
            </div>
              </form>
            </Col>
          </Row>
        </Container>
  
    );
  }
}
