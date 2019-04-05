import React, { Component } from 'react'
import Applicants from './applicants/Applicants';
import AdminLayout from '../../HOC/AdminLayout';
import Chat from './adminchat/Chat';
import AdminNav from './nav/AdminNav';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Dashboard extends Component {


  render() {
    return (
      <AdminLayout>
        <Row>
          <Col md={4}><AdminNav /></Col>
          <Col md={{ span: 4, offset: 4 }}><Chat /></Col>
        </Row>

        <div style={{ marginTop: '50px' }}>
          <Applicants />
        </div>
      </AdminLayout>
    )
  }

}