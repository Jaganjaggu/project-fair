import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
import MyProjects from '../components/MyProjects'

function Dashboard() {
  return (
    <>
      <Header isDashboard/> 
      <h2 style={{marginTop:'30px'}} className='px-3'>Welcome <span className='text-warning'>User</span></h2>

        <Row style={{marginTop:'30px'}} className='container-fluid'>
          <Col sm={12} md={8}>
            <MyProjects/>
          </Col>
          <Col sm={12} md={4}>
            <Profile/>
          </Col>
        </Row>
    </>
  )
}

export default Dashboard