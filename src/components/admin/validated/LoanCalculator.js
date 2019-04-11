import React, { Component } from 'react'

export default class LoanCalculator extends Component {

    state = {
        loanAmount: null,
        annualInterest: null,
        repaymentPeriod: null,
        monthlyPayment: null,
        totalPayment: null,
        totalInterest: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleCalc = (e) => {
        e.preventDefault();
        let loanAmount = this.state.loanAmount;
        let annualInterest = this.state.annualInterest;
        let years = this.state.repaymentPeriod;
        let totalInterest = this.state.totalInterest;
        let monthlyPayment = this.state.monthlyPayment;
        let totalPayment = this.state.totalPayment;
        let repaymentPeriod = this.state.repaymentPeriod;

        let principal = parseFloat(loanAmount);
        let interest = parseFloat(annualInterest) / 100 / 12;
        let payments = parseFloat(years) * 12;

        let x = Math.pow(1 + interest, payments);
        let monthly = (principal * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            // Fill in the output fields, rounding to 2 decimal places
            monthlyPayment = monthly.toFixed(2);
            totalPayment = (monthly * payments).toFixed(2);
            totalInterest = ((monthly * payments) - principal).toFixed(2);

                 console.log(totalInterest, totalPayment, monthlyPayment)
            this.setState({
                data: null,
                loanAmount: loanAmount,
                annualInterest: annualInterest,
                repaymentPeriod: repaymentPeriod,
                monthlyPayment: monthlyPayment,
                totalPayment: totalPayment,
                totalInterest: totalInterest,
            })
            
        }else{ console.log('error')}
    }



    render() {
        return (
            <div>
                 <table>
                            <tr>
                                <th>Enter Loan Data</th>
                                <th></th>
                                <th>Loan Balance, Cumulative Equity, and Interest Payments</th>
                            </tr>
                            <tr>
                                <td>Loan Amount (XAF)</td>
                                <input className='form-control' type='number' id='loanAmount' value={this.state.loanAmount} onChange={this.handleChange} />
                                <td rowspan='8'><canvas id="graph" width="400" height="250"></canvas></td>
                            </tr>
                            <tr>
                                <td>Annual Interest (%)</td>
                                <input className='form-control' type='number' id='annualInterest' value={this.state.annualInterest} onChange={this.handleChange} />
                            </tr>
                            <tr>
                                <td>Repayment Period (Years)</td>
                                <input className='form-control' type='number' id='repaymentPeriod' value={this.state.repaymentPeriod} onChange={this.handleChange} />
                            </tr>
                            <tr>
                                <td>Monthly Payment (XAF)</td>
                                <td>{this.state.monthlyPayment}XAF</td>
                            </tr>
                            <tr>
                                <td>Total Payment (XAF)</td>
                                <td>{this.state.totalPayment}XAF</td>
                            </tr>
                            <tr>
                                <td>Total Interest(XAF)</td>
                                <td>{this.state.totalInterest}XAF</td> 
                            </tr>
                        </table>
                        <div style={{ marginTop: '20px' }}>
                            <button className='btn btn-primary' style={{ marginRight: '20px' }} onClick={this.handleCalc}>Calculate</button>
                            <button className='btn btn-success' style={{ marginRight: '20px' }} onClick={this.handleSubmit}>Submit</button>
                        </div>

            </div>
        )
    }
}
