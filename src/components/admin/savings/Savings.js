import React, { Component } from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default class Savings extends Component {

    state = {
        data: []
    }
    
    componentDidMount() {
    
        axios.get("http://localhost:5000/api/getUsers")
          .then(res => { console.log(res.data.docs);
              this.setState({ data: res.data.docs })
          })
          .catch(function (error) { console.log(error) })
        console.log(this.state.data);
      };

      handleCalc = (dat) => {
          let total = 0;
          for(var i =0; i<dat.savings.length; i++){
               total += parseInt(dat.savings[i].amount);
          }
          return total
      }

    render (){
        const {
            data
          } = this.state;
        return (
      <Container  style={{ paddingTop: "150px", paddingBottom: "150px" }}>
          <Row>
              <h3>Customer Savings</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Account Number</th>
              <th>Total Savings</th>
            </tr>
          </thead>
          <tbody>
            {data.length <= 0
              ? `Loading Applicants...`
              : data.map(function (dat, i) {
                return (
                  <tr key={i}>
                    <td>{dat.firstname} {dat.lastname}</td>
                    <td>{dat.email}</td>
                    <td>{dat.phoneNumber}</td>
                    <td>{dat.accountNumber}</td>
                    <td>{this.handleCalc(dat)} Fcfa</td>
                   <td> <button
                      style={{
                        backgroundColor: '#e1ddc3',
                        cursor: 'pointer',
                        borderRadius: '10%'
                      }}><Link to={'/admin/savings/' + dat._id}>Save Into This Account</Link></button></td>
                  </tr>
                )
              }, this)
            }
          </tbody>
        </table>
        </Row>
        </Container>
        )
    }
}