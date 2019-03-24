import React, { Component } from 'react'
import Applicants from './applicants/Applicants';
import AdminLayout from '../../HOC/AdminLayout';
import Chat from './adminchat/Chat';
import AdminNav from './nav/AdminNav';
import { Row, Col } from 'react-materialize';

export default class Dashboard extends Component {


  render() {
    return (
      <AdminLayout>

        
          <Row>
          <Col s={6} className='grid-example'><AdminNav /></Col>
          <Col s={6} className='grid-example'><Chat /></Col>
          </Row>
              
          
          <div style={{ marginTop: '50px' }}>
           <Applicants />
          </div>

        
      </AdminLayout>
    )
  }

}