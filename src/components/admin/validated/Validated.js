import React from 'react';

function Validated({ validatedApplicants, applicantInformation }) {

   
    return (
        <div >
            <table className="striped responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Phone Number</th>
                        <th>Amount</th>
                        <th>Colateral Property</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        validatedApplicants.map((validatedApplicant, id) => (

                            <tr key={validatedApplicant.id}>
                                <td>{validatedApplicant.name}</td>
                                <td>{validatedApplicant.age}</td>
                                <td>{validatedApplicant.location}</td>
                                <td>{validatedApplicant.phoneNumber}</td>
                                <td>{validatedApplicant.amount} XAF</td>
                                <td>{validatedApplicant.colateral}</td>
                                <td>{validatedApplicant.message}</td>
                                <button onClick={(id) => {this.props.applicantInformation(id)}}
                                 style={{
                                     backgroundColor: 'blueviolet',
                                     cursor: 'pointer',
                                     borderRadius: '10%'
                                     }}>Appicant Information</button>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )

}

export default Validated;
