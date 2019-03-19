import React from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

function Layout(props) {
    return (
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
