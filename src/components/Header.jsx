import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({ isDashboard }) {
  return (
    <>
      <Navbar style={{ backgroundColor: '#90ee90' }} className="postion-fixed top-0 w-100">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fai{' '}</Link>
          </Navbar.Brand>

          {/* <button className='btn btn-light'>Logout</button> */}
          {isDashboard &&
            <div className="btn btn-linkms-auto text-info fw-bolder fs-5">Logout <i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header