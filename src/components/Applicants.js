import React from 'react'

function Applicants({ applicants }) {
    return (
        <div >
            <table className="striped">
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
                        applicants.map((applicant, id) => (

                            <tr key={applicant.id}>
                                <td>{applicant.name}</td>
                                <td>{applicant.age}</td>
                                <td>{applicant.location}</td>
                                <td>{applicant.phoneNumber}</td>
                                <td>{applicant.amount}</td>
                                <td>{applicant.colateral}</td>
                                <td>{applicant.message}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )

}

export default Applicants;
