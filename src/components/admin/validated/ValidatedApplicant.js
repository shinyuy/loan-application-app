import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import LoanCalculator from './LoanCalculator';

export default class ValidatedApplicant extends Component {

    state = {
        data: null,
        loanAmount: null,
        annualInterest: null,
        repaymentPeriod: null,
        monthlyPayment: null,
        totalPayment: null,
        totalInterest: null
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

    handleSubmit = ( loanAmount,annualInterest,repaymentPeriod,monthlyPayment,totalPayment,totalInterest) => {
        let id = this.props.match.params._id;
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
            validated: this.state.data.data.validated,
            images: this.state.data.data.images,
            loanAmount: loanAmount,
            annualInterest: annualInterest,
            repaymentPeriod: repaymentPeriod,
            monthlyPayment: monthlyPayment,
            totalPayment: totalPayment,
            totalInterest: totalInterest
        })
            .then(res => console.log(res.data));
        setTimeout(() => {
            this.props.history.push('/validated_applicants');
        }, 2000);

    }

    repayment  = (e, loanAmount,annualInterest,repaymentPeriod,monthlyPayment,totalPayment,totalInterest) => {
        e.preventDefault();
        let newLoanAmount = this.state.data.data.loanAmount - this.state.amount;
        let id = this.props.match.params._id;
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
            validated: this.state.data.data.validated,
            images: this.state.data.data.images,
            loanAmount: newLoanAmount,
            annualInterest: this.state.data.data.annualInterest,
            repaymentPeriod: this.state.data.data.repaymentPeriod,
            monthlyPayment: this.state.data.data.monthlyPayment,
            totalPayment: this.state.data.data.totalPayment,
            totalInterest: this.state.data.data.totalInterest
        })
            .then(res => console.log(res.data));
        setTimeout(() => {
            this.props.history.push('/validated_applicants');
        }, 2000);

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        //console.log(this.props);
        const data = this.state.data ? (
            <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
                <Row>
                    <Col xs={12} md={5}>
                        <div>Name:<span className='chat'>    {this.state.data.data.name}</span></div><br />
                        <div>Age:<span className='chat'>    {this.state.data.data.age}</span></div><br />
                        <div>Location:<span className='chat'>   {this.state.data.data.location}</span></div><br />
                        <div>Region: <span className='chat'>  {this.state.data.data.region}</span></div><br />
                        <div>City:<span className='chat'>    {this.state.data.data.city}</span></div><br />
                        <div>Street:<span className='chat'>    {this.state.data.data.street}</span></div><br />
                        <div>Phone Number:<span className='chat'>   {this.state.data.data.phoneNumber}</span></div><br />
                        <div>Loan Amount:<span className='chat'> {this.state.data.data.loanAmount}XAF</span></div><br />
                        <div>Colateral Property:<span className='chat'>   {this.state.data.data.colateral}</span></div><br />
                        <div>Reason For Loan:<span className='chat'>    {this.state.data.data.message}</span></div><br />
                    </Col>

                    <Col xs={12} md={7}>
                       <LoanCalculator handleSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>

                    <Col xs={12} md={5}>
                        <div className='wrap'>
                            <div>Supporting Documents:
                <div>
                                    <img src={this.state.data.data.images[0].url} alt='documents' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={7}>
                    <div style={{marginLeft: '50px'}}>
                        Amount Repaid (XAF)
                        <input className='form-control' type='number' id='amount' value={this.state.amount} onChange={this.handleChange} />
                        <button className='btn btn-success' style={{marginTop: '10px'}} onClick={this.repayment}>Submit Payment</button>
                    </div>
                    </Col>
                </Row>
            </div>
        ) :
            (
                <div>Loading Applicant's Information...</div>
            )
        return (
            <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '150px' }}>
                {data}
            </div >
        )
    }
}