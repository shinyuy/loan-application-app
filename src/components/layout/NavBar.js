import React from 'react';
import { Link, } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav-wrapper blue darken-3'>
            <div className='container'>
                <Link className='brand-logo left' to='/'>XYZ Credit Union</Link>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/apply'>Apply For Loan</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

