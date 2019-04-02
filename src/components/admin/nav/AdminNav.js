import React from 'react'
import { Link } from 'react-router-dom';
import { firebase } from '../../../Firebase';

function AdminNav() {

    const links = [
        {
            title: 'All Aplicants',
            linkTo: '/dashboard'
        },
        {
            title: 'Validated Applicants',
            linkTo: '/validated_applicants'
        },
        {
            title: 'Applicant Information',
            linkTo: '/applicant'
        },
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom: '1px solid #353535',
        margin: '10px',
        borderRadius: '10%',
        backgroundColor: 'blueviolet',
        height: '50px',
        width: '100px',
        cursor: 'pointer'
    }

    const renderItems = () => (
         links.map(link => (
            <Link to={link.linkTo} key={link.title}>
               <button style={style}>
                  {link.title}
                  </button>
             
            </Link>
         ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out successful')
        },(error)=>{
            console.log('Error logging out')
        })
    }

    return (
        <div>
            
            {renderItems()}
            <Link to=''>
               <button style={style} onClick={()=> logoutHandler()}>
                Log out
            </button>  
            </Link>
            <h1>Dashboard</h1>
        </div>
    )
}

export default AdminNav
