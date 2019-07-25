import React, { Component } from 'react'
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import File from "../apply/File";


export default class Register extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneNumber: "",
        images: [],
        formSuccess: null
    }


    register = (firstname, lastname, email, phoneNumber, date, password) => {
        axios
          .post("http://localhost:5000/api/register", {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            images: this.state.images
          })
          .then(res => {
              console.log(res.status);
              this.setState({
                firstname: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                password: "",
                images: [],
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

      imagesHandler = images => {
        this.setState({
          images: images
        });
        console.log(this.state);
      };

    render() {
        const {
            firstname,
            lastname,
            email,
            password,
            phoneNumber
          } = this.state;
        return (
      <Container  style={{ paddingTop: "150px", paddingBottom: "150px" }}>
          <form onSubmit={this.handleSubmit}>
          <Row>
          <File
            imagesHandler={images => this.imagesHandler(images)}
            reset={this.state.formSuccess}
          />
        </Row>
              <Row>
                  <Col>
                  <label htmlFor="name">First Name</label>
          <input
            className="form-control"
            type="text"
            value={firstname}
            id="firstname"
            name="firstname"
            onChange={this.handleChange}
            required
            placeholder="Enter first names as on ID card"
          /> 
                  </Col>
                  <Col>
                  <label htmlFor="name">Last Name</label>
          <input
            className="form-control"
            type="text"
            value={lastname}
            id="lastname"
            name="lastname"
            onChange={this.handleChange}
            required
            placeholder="Enter last names as on ID card"
          /> 
                  </Col>
              </Row>
              <Row>
              <Col>
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </Col>
            <Col>
              <label htmlFor="number">Phone</label>
              <input
                className="form-control"
                type="number"
                value={phoneNumber}
                id="phoneNumber"
                name="phoneNumber"
                onChange={this.handleChange}
                required
                placeholder="Enter phone number"
              />
            </Col>
              </Row>
              <Row>
              <label htmlFor="email">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                id="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Enter password"
              />
           
              </Row>
              <button
            type="submit"
            className="btn btn-secondary"
            style={{ marginTop: "20px" }}
          >
            Create Account
          </button>
          </form>
      </Container>
        )
    }
}
