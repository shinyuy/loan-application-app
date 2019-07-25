/*import React from 'react';
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
*/

import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
         <div>{this.props.children}</div>
    );
  }
}

export default Layout;