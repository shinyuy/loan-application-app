import React from 'react';
import { Link, } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='bck_b_light'>
            <div className='container'>
                <div className='left'>
                    <div className='logo'>
                        <Link to='/'>Credit Union</Link>
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/apply'>Apply For Loan</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                </div>
                <div className='bottom'>
                   <Link to='/signin'></Link> 
                </div>
            </div>
        </nav>
    )
}

export default NavBar

